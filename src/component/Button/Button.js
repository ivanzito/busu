import React from 'react'
import './button.scss'

function Botao(props) {
  return (
    
    <button className="button-default">
      {props.children}
    </button>
    
  )
}

export default Botao