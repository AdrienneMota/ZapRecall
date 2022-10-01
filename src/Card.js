import { useState } from 'react'
import Cardnatela from './Cardnatela'

export default function Card(props) {

    const [cardPergunta, setcardPergunta] = useState(false)

    return (
            <div className='Card' onClick={() => setcardPergunta(true)}>
                <Cardnatela cardPergunta={cardPergunta} questao={props.questao}/>               
            </div>
    )
}

