import logo from './logo.svg';
import styled from "styled-components"
import {Mensagem} from "./components/Mensagem/Mensagem"
import React from 'react';


const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  border: 1px solid black; 
  height: 95vh;
  width: 95vw;
  margin: auto;
  margin-bottom:0px;
  flex:1;
`

const MesnagemContainer = styled.div`
  display:flex;
  background-color: #e5ddd5;
  flex:1;
  flex-direction:column;
  justify-content: flex-end;
`

class App extends React.Component {

  render(){

    return (

    <AppContainer>
      <MesnagemContainer>
          <Mensagem/>
      </MesnagemContainer>
    </AppContainer>        


      )
  }

  
}

export default App;
