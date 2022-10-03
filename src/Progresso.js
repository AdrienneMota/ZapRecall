import styled from "styled-components";

export default function Progresso({progresso}){
    
    return(
        <ContainerProgresso>
            <p>{progresso}/4 CONCLUÍDOS</p>
        </ContainerProgresso>
    )
}

const ContainerProgresso = styled.div`
    margin: 10px 0 10px 0;
`