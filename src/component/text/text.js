import React from 'react'
import './text.scss'

function Text(props) {
  return (
    <span>
      <label>{props.label}</label>
      <input type="text" className="text-default">
        {props.children}
      </input>
    </span>
  )
}

export default Text