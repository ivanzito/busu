import React from 'react'
import './button.scss'

function Botao(props) {
  return (
     
    <button className="button-default" onClick={props.click} id={props.id}>
      {props.children}
    </button>
    
  )
}

export default Botao