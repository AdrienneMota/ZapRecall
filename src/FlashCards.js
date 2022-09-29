import styled from 'styled-components'
import setaplay from './assets/img/seta_play.png'

function FlashCard() {
    return (
        <>
            <PerguntaFechada>
                <p>Pergunta 1</p>
                <img src={setaplay} alt="botao resolver card" />
            </PerguntaFechada>
            <PerguntaFechada>
                <p>Pergunta 2</p>
                <img src={setaplay} alt="botao resolver card"/>
            </PerguntaFechada>
            <PerguntaFechada>
                <p>Pergunta 3</p>
                <img src={setaplay} alt="botao resolver card"/>
            </PerguntaFechada>
            <PerguntaFechada>
                <p>Pergunta 4</p>
                <img src={setaplay} alt="botao resolver card"/>
            </PerguntaFechada>
        </>
    )
}

export default function FlashCards() {
    return (
        <FlashCard />
    )
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