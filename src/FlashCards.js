import Card from './Card'
//a props é o array que foi passado por parametro na função flashcards em ContainerZap

export default function FlashCards(props) {

    const {perguntas, setProgresso, progresso} = props // props agora pode representar todos as propriedades dos objetos

    return (
        <div className='containerperguntas'>
            {perguntas.map(
                (p, i) => <Card key={i} questao={p} setProgresso={setProgresso} progresso={progresso} />
            )}
        </div>
    )
}
