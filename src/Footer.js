import styled from "styled-components"
import Botoes from "./Botoes"
import Progresso from "./Progresso"
//import Progresso from "./Progresso"

export default function Footer(){
    return(
        <>
            <ContainerFooter>
                <Botoes/>
                <Progresso/>
            </ContainerFooter>
        </>
    )
}

const ContainerFooter = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`