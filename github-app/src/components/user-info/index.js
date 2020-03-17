'use strict'

// import React, { PropTypes } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import './user-info.css'

const Index = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} alt='Imagem do usuário' />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>
    <ul className='repos-info'>
      <li>- Repositórios: {userinfo.repos}</li>
      <li>- Seguidores: {userinfo.followers}</li>
      <li>- Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

Index.propTypes = {
  userinfo: PropTypes.shape(
    {
      username: PropTypes.string.isRequired,
      repos: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired
    }
  )
}

export default Index
