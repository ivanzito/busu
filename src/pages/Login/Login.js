import React from 'react'
import './Login.scss'
import facebook from './facebook.png'
import google from './google.png'
import instagram from './instagram.png'
import Button from '../../component/Button/Button'
import Text from '../../component/text/text';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email:'', password:'', jwt: ''}
    }
    
    doLogin=() => {

        let email = document.querySelector('#email').value
        let senha = document.querySelector('#senha').value
        this.setState({'email': email, 'password': senha, 'jwt': ''})
        let jwt = fetch('http://localhost:8080/users/login',
        {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({'email': this.state.email, 'password': this.state.password})
        }).then(response => response.json(), fail => console.error('fail',fail))

        this.state.jwt = jwt
    }

    render= () => {
        return ( 
            <main className="border">
                <span className="busu">BUSU</span>
                <span className="busu_complemento">, seja bem vindo</span> 
                <div className="border-mail">
                    <Text label="E-mail" id="email"/>
                </div>
                <div className="border-pwd">
                    <Text label="Senha" id="senha"/>
                </div>
                <div className="actions-login">
                    <Button click={this.doLogin} >Entrar</Button>
                    <Button>Criar Conta</Button>
                </div>
                <div>                    
                    <div className="sso-redes-sociais">
                        <h4>Ou faça o login usando as redes sociais abaixo:</h4>
                        <img className="social_media" width="30px" height="30px" src={facebook}/>
                        <img className="social_media" width="30px" height="30px" src={google}/>
                        <img className="social_media" width="30px" height="30px" src={instagram}/>
                    </div>
                </div>
            </main>
        )
    }
}