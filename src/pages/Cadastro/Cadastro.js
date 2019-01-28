import React from 'react'

export default class Cadastro extends React.Component {

    render= ()=> {
        return (<div>{localStorage.getItem('jwt')}</div>)
    }
}