import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components"


const InputMensagemContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 0px;

`
const ConversaDisplay = styled.div`
    display: flex;
    flex-direction: row;
`

const InputMensagem = styled.input`
    display: flex;
    flex:5;
`
const InputUsuario= styled.input`
    display: flex;
    width: 20%;
`
const BotaoEnviar= styled.button`
    display: flex;
    width: 20%;
`

export class Mensagem extends React.Component{

    _handleKeyDown = (e) =>{
        if (e.key === "Enter"){
            {this.enviarMensagem()}
        }
    }

    state = {
        mensagem:[{
            usuario: "",
            mensagemEnviada:""
        }],
        usuarioInput:"",
        mensagemInput:""
    }

    enviarMensagem = () =>{
        const novaMensagem = {
            usuario: this.state.usuarioInput+":",
            mensagemEnviada: this.state.mensagemInput
        }
        if(novaMensagem.usuario === ":" && novaMensagem.mensagemEnviada === ""){
            alert("Insira os campos da mensagem")
            return
        }else if(novaMensagem.usuario === ":"){
            alert("Insira o nome do usuario")
            return
        }else if(novaMensagem.mensagemEnviada === ""){
            alert("Insira a mensagem")
            return
        }

        const adicionarMensagem = [...this.state.mensagem, novaMensagem]
        this.setState({mensagem: adicionarMensagem})
        this.setState({mensagemInput: ''})
        this.setState({usuarioInput: ''})
    }

    onChangeInputNome = (event) =>{
        this.setState({usuarioInput: event.target.value})         
        
    }
    onChangeInputMensagem = (event) =>{
        this.setState({mensagemInput: event.target.value})
    }

    render(){
        const conversas = this.state.mensagem.map((conversa)=>{
            return(
                <div>
                   <p><strong>{conversa.usuario}</strong> {conversa.mensagemEnviada}</p>
                </div>
            )
        })
        return(
            <InputMensagemContainer>
                <div>{conversas}</div>
                <ConversaDisplay>
                    <InputUsuario
                        value={this.state.usuarioInput}
                        onChange={this.onChangeInputNome}
                        placeholder={"Usuário"}
                    />
                        <InputMensagem
                        value={this.state.mensagemInput}
                        onChange={this.onChangeInputMensagem}
                        placeholder={"Mensagem"}
                        onKeyDown={this._handleKeyDown}
                    
                    />
                    <BotaoEnviar onClick={this.enviarMensagem} type="submit"> Enviar</BotaoEnviar>
                </ConversaDisplay>     
            </InputMensagemContainer>

        )
    }
}
export default Mensagem