import React from 'react'
import './Login.scss'
import facebook from './facebook.png'
import google from './google.png'
import instagram from './instagram.png'
import Button from '../../component/Button/Button'
import Text from '../../component/text/text';

export default class Login extends React.Component {
    

    render= () => {
        return ( 
            <main className="border">

                <span className="busu">BUSU</span>
                <span className="busu_complemento">, seja bem vindo</span> 
                <div className="border-mail">
                    <Text label="E-mail"/>
                </div>
                <div className="border-pwd">
                    <Text label="Senha"/>
                </div>
                <div className="actions-login">
                    <Button>Entrar</Button>
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