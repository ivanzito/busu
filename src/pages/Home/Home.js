import React from 'react'

export default class Home extends React.Component {

    render= ()=> {
        return (<div>{localStorage.getItem('jwt')}</div>)
    }
}