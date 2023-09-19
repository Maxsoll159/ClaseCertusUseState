import { useState } from "react"

export const HookUseSate = () =>{

    const [counter, setCounter] = useState(5)
    const [nombre, setNombre] = useState("Juan")
  


    return(
        <div>
            <h2>Este es el Hook useState</h2>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>SUMAR</button>
            <button onClick={() => setCounter(counter - 1)}>RESTAR</button>
            <button onClick={() => setCounter(5)}>RESTABLECER VALOR</button>
            {nombre}
            <button onClick={() => setNombre("Pepe")}>Cambiar Nombre</button>
        </div>
    )
}