import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components"


const InputMensagemContainer = styled.div`
    margin: 0px;
`
const MensagemBloco = styled.div`
    display:flex;
    flex-direction: flex-start;
    margin-left: 10px;
    
`
const MensagemUtil = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    background-color: lightgray;
    max-width: 80vw;
    word-wrap: break-word;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
    
`
const MensagemBlocoEu = styled.div`
    display:flex;
    flex-direction: row-reverse;
    margin-right: 10px;
`
const MensagemUtilEu = styled.div`
    display:flex;
    flex-direction:column;
    flex-direction: flex-end;
    background-color: lightgreen;
    max-width: 80vw;
    word-wrap: break-word;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
`

const ConversaDisplay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    background-color: darkgreen;
    padding: 10px;
`


const InputMensagem = styled.input`
    flex:2;
    border-radius: 5px;
    border-style: none;
`
const InputUsuario= styled.input`
    flex:1;
    margin-right: 1%;
    border-radius: 5px;
    border-style: none;
    @media(max-width:667px){
        width:100%
    }
`
const BotaoEnviar= styled.button`
    flex:1;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 8px;
    
`


export class Mensagem extends React.Component{

    _handleKeyDown = (e) =>{
        if (e.key === "Enter"){
            {this.enviarMensagem()}
        }
    }

    state = {
        mensagem:[],
        usuarioInput:"",
        mensagemInput:""
    }

    enviarMensagem = () =>{
        const novaMensagem = {
            usuario: this.state.usuarioInput+":",
            mensagemEnviada: this.state.mensagemInput,
            index: Math.random()
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

    onClickDeletar = (idDeletar) =>{
        if(window.confirm ("Deseja pagar a mensagem?")){
            const apagarMensagem = [...this.state.mensagem]
                const mensagemApagada = apagarMensagem.filter((mensagem)=>{
                return mensagem.index !== idDeletar ;
            })
    
        this.setState({mensagem: mensagemApagada})
        }else{
            return
        }
            
    }

    onChangeInputNome = (event) =>{
        this.setState({usuarioInput: event.target.value})         
        
    }
    onChangeInputMensagem = (event) =>{
        this.setState({mensagemInput: event.target.value})
    }

    render(){

        const conversas = this.state.mensagem.map((conversa, index)=>{
            if(conversa.usuario === "eu:" || conversa.usuario === "EU:" || conversa.usuario === "Eu:"){
                return(
                    <MensagemBlocoEu >
                        <MensagemUtilEu onDoubleClick={() => this.onClickDeletar(conversa.index)}>
                            <p><strong>{conversa.usuario}</strong> {conversa.mensagemEnviada}</p>
                        </MensagemUtilEu>
                    </MensagemBlocoEu>
                )
            }else{
                return(
                    <MensagemBloco >
                        <MensagemUtil onDoubleClick={() => this.onClickDeletar(conversa.index)}>
                            <p><strong>{conversa.usuario}</strong> {conversa.mensagemEnviada}</p>
                        </MensagemUtil>
                    </MensagemBloco>
                )
            }

        })
        return(
            <InputMensagemContainer>
                {conversas}
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