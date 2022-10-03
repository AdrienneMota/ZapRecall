import styled from "styled-components";
import Perguntas from "./Perguntas.js"
export default function Progresso({progresso}){
       
    return(
        <ContainerProgresso>
            <p>{progresso}/{Perguntas.length} CONCLUÍDOS</p>
        </ContainerProgresso>
    )
}

const ContainerProgresso = styled.div`
    margin: 10px 0 10px 0;
`