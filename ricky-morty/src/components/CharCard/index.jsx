import './style.css'

const ChardCard = ({personagem}) =>{
    console.log(personagem)
    return(
        <>
            {personagem.status === 'Alive' ?(
                <div className='alive-personagem' key={personagem.id}>
                    <p>{personagem.name}</p>
                    <img src={personagem.image} alt=''></img>
                    <p>{personagem.species}</p>

                </div>
            ):(
                <div className='dead-personagem' key={personagem.id}>
                    <p>{personagem.name}</p>
                    <img src={personagem.image} alt=''></img>
                    <p>{personagem.species}</p>
                </div>
            ) }  
            
        </>
    )
}

export default ChardCard