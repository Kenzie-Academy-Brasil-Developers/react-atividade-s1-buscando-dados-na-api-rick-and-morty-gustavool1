import ChardCard from '../CharCard'
import './style.css'
const Character = ({charactersList}) =>{
    const personagens = charactersList.results
    
    return(
        <> 
            <section>
            {personagens.map((personagem)=>(
                <ChardCard personagem={personagem} key={personagem.id} ></ChardCard>
                ))}
            </section>
        </>
    )
}

export default Character