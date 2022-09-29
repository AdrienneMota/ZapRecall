import styled from "styled-components";

export default function Botoes(){
    return(
    <ContainerBotoes>    
        <button className="vermelho">Não Lembrei</button>
        <button className="amarelo">Quase não lembrei</button>
        <button className="verde">Zap!</button>
    </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;

    .vermelho, .amarelo, .verde{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid #333333;
        padding:5px;
    }

    .vermelho{
        background: #FF3030;
    }

    .amarelo{
        background: #FF922E;
    }

    .verde{
        background: #2FBE34;
    }
`