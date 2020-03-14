'use strict'

import React, { PropTypes } from 'react'
import './repos.css'
import Pagination from '../pagination'

const Index = ({ className, title, repos, handlePagination }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}:</h2>
    <ul className='repos-list'>
      {repos.repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
        </li>
      ))}
    </ul>
    <Pagination total={repos.pagination.total} activePage={repos.pagination.activePage} onClick={handlePagination} />
  </div>
)
Index.defaultProps = {
  className: ''
}

Index.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      html_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  })
}

export default Index
