import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function Layout(props){
  return <div className="Layout">
    {props.children}
  </div>
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Layout