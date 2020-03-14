'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
// import ajax from '@fdaciuk/ajax'
import jquery from 'jquery'

const $ = jquery
const initialReposState = { repos: [], pagination: {} }

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false
    }
    this.perPage = 3
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubUrl (username, type, page = 1) {
    const internUser = username ? `/${username}` : ''
    const internType = type ? `/${type}` : ''
    return `https://api.github.com/users${internUser}${internType}?per_page=${this.perPage}&page=${page}`
  }

  handleSearch (e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTER = 13 // confirma
    // const target = e.target
    if (key === ENTER) {
      // target.disabled = true
      this.setState({ isFetching: true })
      $.get(this.getGitHubUrl(value))
        .then((result) => {
          // console.log('search result', result)
          this.setState({
            userinfo: {
              username: result.name,
              url: result.url,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
              // repos_url: result.repos_url,
              // starred_url: result.starred_url.replace('{/owner}{/repo}', '')
            },
            repos: initialReposState,
            starred: initialReposState
          })
        })
        .always(() => {
          this.setState({ isFetching: false })
        })
    }
  }

  handleAction (type, page) {
    return (e) => {
      console.log('type e page', type, page)
      const username = this.state.userinfo.login

      // ajax().get(this.getGitHubUrl(username, type, page))
      $.get(this.getGitHubUrl(username, type, page))
        .then((result, xhr) => {
          const linkHeader = xhr.getResponseHeader('Link') || ''
          const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last"/)
          console.log('totalPagesMatch: ', totalPagesMatch)
          this.setState({
            [type]: {
              repos: result.map((repo) => ({
                // o parênteses permite o retorno multilinha como se fosse uma linha só. as chaves na sequencia returnam
                // um objeto, como esperado
                id: repo.id,
                name: repo.name,
                html_url: repo.html_url
              })),
              pagination: {
                // ...this.state[type].pagination,
                total: totalPagesMatch ? +totalPagesMatch[1] : this.state[type].pagination.total,
                activePage: page
              }
            }
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        onHandleSearch={this.handleSearch}
        getRepos={this.handleAction('repos')}
        getStarred={this.handleAction('starred')}
        handlePagination={(type, page) => this.handleAction(type, page)()}
      />
    )
  }
}

export default App
