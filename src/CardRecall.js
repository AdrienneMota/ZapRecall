import styled from "styled-components";
import { useState } from "react";
import setavirar from './assets/img/seta_virar.png';
import Botoes from "./Botoes";

export default function CardRecall({questao, setcardPergunta, setIcone, setRespondido, setCor, setProgresso, progresso}){
    const {pergunta, resposta} = questao
    const [cardResposta, setcardResposta] = useState(false)

        return(
            <PerguntaAberta>
                <p>{cardResposta? resposta : pergunta}</p>
                <div onClick={() => {setcardResposta(true)}}>
                    <RevelaResposta isOff={cardResposta} src={setavirar} alt="botao viras card"/>
                </div>
                <Botoes aparece={cardResposta} setcardPergunta={setcardPergunta}
                setIcone={setIcone}
                setRespondido={setRespondido}
                setCor={setCor}
                setProgresso={setProgresso}
                progresso={progresso}/>
            </PerguntaAberta>
        )
  
}

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
        font-family: 'Righteous', 'Recursive';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`
const RevelaResposta = styled.img`
    display: ${(prop) => prop.isOff? "none" : ""};
    position: absolute;
    bottom: 10px;
    right: 10px;
   
`