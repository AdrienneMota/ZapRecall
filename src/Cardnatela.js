import styled from "styled-components";
import { useState } from "react";
import setaplay from './assets/img/seta_play.png'
import setavirar from './assets/img/seta_virar.png'
import Botoes from "./Botoes"

export default function Cardnatela(props){
    const {questao, cardPergunta} = props
    const {id, pergunta, resposta} = questao
    const [cardResposta, setcardResposta] = useState(false)

    if(cardPergunta){
        return(
            <PerguntaAberta>
                <p>{cardResposta? resposta : pergunta}</p>
                <img onClick={() => setcardResposta(true)} src={setavirar} alt="botao viras card"/>
                <Botoes/> 
            </PerguntaAberta>
        )
    }else{
        return(
            <PerguntaFechada>
                <p>Pergunta {id}</p>
                <img  src={setaplay} alt="botao resolver card"/>            
            </PerguntaFechada>
            
        )
    }
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
`
