import React from 'react'
import './text.scss'

function Text(props) {
  return (
    <span>
      <label>{props.label}</label>
      <input type="text" onChange={props.change} className="text-default" id={props.id}>
        {props.children}
      </input>
    </span>
  )
}

export default Text