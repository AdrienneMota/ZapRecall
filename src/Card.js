import CardRecall from './CardRecall';
import { useState } from "react";
import styled from 'styled-components';
import setaplay from './assets/img/seta_play.png';

export default function Card({questao, setProgresso, progresso}) {

    const [cardPergunta, setcardPergunta] = useState(false)
    const [icone, setIcone] = useState(setaplay)
    const [respondido, setRespondido] = useState(false)
    const [cor, setCor] = useState('cinza')

    if (cardPergunta) {
        return (
            <CardRecall questao={questao} setcardPergunta={setcardPergunta} setIcone={setIcone} setRespondido={setRespondido} setCor={setCor} setProgresso={setProgresso} progresso={progresso} />
        )
    }
    else {
        return (
            <PerguntaFechada respondido={respondido} cor={cor}>
                <p >Pergunta {questao.id}</p>
                <img src={icone} onClick={() => setcardPergunta(true)} alt="botao resolver card" />
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
        text-decoration: ${(prop) => prop.respondido? "line-through" : "none"};
        color: ${(prop) => (prop.cor === 'verde')? "#2FBE34" : (prop.cor === "vermelho")? "#FF3030": (prop.cor === "amarelo")? "#FF922E" : "#333333"};
    }
    img{
        pointer-events: ${(prop) => prop.respondido? "none" : ""}
    }
`

