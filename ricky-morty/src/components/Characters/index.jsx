import ChardCard from '../CharCard'
import './style.css'
const Character = ({charactersList}) =>{
    const personagens = charactersList.results
    console.log(personagens)
    return(
        <>
            <h1>Meus personagens</h1>
            <section>
            {personagens.map((personagem)=>(
                <ChardCard personagem={personagem} key={personagem.id} ></ChardCard>
                ))}
            </section>
        </>
    )
}

export default Character