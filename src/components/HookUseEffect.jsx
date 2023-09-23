import { useEffect, useState } from "react"




export const HookUseEffect = () => {

    const [personajes, setPersonajes] = useState()



    useEffect(() => {
        const getApi = async () => {
            let response = await fetch("https://rickandmortyapi.com/api/character")
            let personajes = await response.json()
            setPersonajes(personajes.results)
            return personajes
        }
        getApi()
    }, [])



    console.log(personajes)
    return (
        <div>
            <h1>ESTE ES EL HOOK USEEFFECT</h1>
            <p>Hace tareas secundarias, se va lanzar cuando todo el componente se renderize</p>

            {
                personajes && (
                    personajes.map((personaje) => (
                        <div>
                            <img src={personaje.image} alt="" />
                            <p>{personaje.name}</p>
                            <p>{personaje.species}</p>
                        </div>
                    ))
                )
            }

        </div>
    )
}