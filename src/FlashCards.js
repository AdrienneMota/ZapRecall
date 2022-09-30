import Card from './Card'
//a props é o array que foi passado por parametro na função flashcards em ContainerZap

export default function FlashCards(props) {

    const { perguntas } = props // props agora pode representar todos as propriedades dos objetos

    return (
        <>
            {perguntas.map(
                (p, i) => <Card key={i} id={p.id} />
            )}
        </>
    )
}
