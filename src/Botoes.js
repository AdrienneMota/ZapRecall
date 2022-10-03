import styled from "styled-components";
import certo from './assets/img/icone_certo.png'
import erro from './assets/img/icone_erro.png'
import quase from './assets/img/icone_quase.png'

export default function Botoes({aparece, setcardPergunta, setIcone, setRespondido, setCor, setProgresso, progresso}){
    return(
    <ContainerBotoes aparece={aparece}>    
        <button 
            className="vermelho" 
            onClick={() => {
                setcardPergunta(false); 
                setIcone(erro);
                setRespondido(true);
                setCor('vermelho');
                setProgresso(progresso + 1)
            }
            }
        >
            Não Lembrei
        </button>
        
        <button className="amarelo" 
            onClick={() => {
                setcardPergunta(false);
                setIcone(quase);
                setRespondido(true);
                setCor('amarelo');
                setProgresso(progresso + 1)
            }}
        >
            Quase não lembrei
        </button>
        
        <button className="verde"
            onClick={() => {
                setcardPergunta(false); 
                setIcone(certo);
                setRespondido(true);
                setCor('verde');
                setProgresso(progresso + 1)
                }}
        >
            Zap!
        </button>
    </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
    display: ${(prop)=> prop.aparece? "flex" : "none"};
    width: 100%;
    justify-content: space-between;
    margin: 0 auto 1px auto;

    .vermelho, .amarelo, .verde{
        width: 90px;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding:5px;
        font-family: 'Righteous', 'Recursive';
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