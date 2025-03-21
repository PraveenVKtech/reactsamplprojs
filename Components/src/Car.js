import React from 'react'
import PropTypes from 'prop-types'

function Car(props) {
  return (
    <div>
        <h2>I am a {props.brand.model}!</h2>

    </div>
  )
}


export default Car

