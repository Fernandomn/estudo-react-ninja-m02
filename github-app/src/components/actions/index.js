'use strict'

import React, { PropTypes } from 'react'
import './actions.css'

const Index = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos} name='actionRepos'>Ver repositórios</button>
    <button onClick={getStarred} name='actionStarred'>Ver favoritos</button>
  </div>
)

Index.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Index
