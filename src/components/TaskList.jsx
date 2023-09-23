import { useState } from "react"

export const TaskList = () =>{
    const TaskListMartin = [{
        id: 1,
        tarea: "Lavar los platods",
        completado: true
    }, {
        id: 2,
        tarea: "Sacar al Perro",
        completado: false
    }, {
        id: 3,
        tarea: "Secar los platos",
        completado: false
    }]

    const [tareas, setTareas] = useState(TaskListMartin)

    const [newTarea, setNewTarea] = useState({
        id: "",
        tarea: "",
        completado: false
    })

    const onEliminarTarea = (id) =>{
        const eliminarTarea = tareas.filter((tarea)=>(
            tarea.id !== id
        ))
        setTareas(eliminarTarea)
    }
    const onActualizarTarea = (id) => {
        const actulizarTarea = tareas.map((tarea)=>(
            tarea.id === id ? {...tarea, completado: true} : tarea
        ))
        setTareas(actulizarTarea)
    }
    
    const onChangeInput = (event) =>{
        setNewTarea({
            id: tareas.length + 1,
            tarea: event.target.value,
            completado: false
        })
    }

    const onAgregarTarea = (event) =>{
        event.preventDefault()
        setTareas([...tareas, newTarea])
        return alert("Tarea agrega")
    }

    return(
        <div>
            <h2>EJERCICIO CON USESTATE</h2>

            <form action="" onSubmit={onAgregarTarea}>
                <input type="text" onChange={onChangeInput}  />
                <input type="submit" />
            </form>

            <button onClick={()=>setTareas(TaskListMartin)}>Restablecer Tareas</button>
            {
                tareas.map((tarea)=>(
                    <div>
                        <p style={{background: `${tarea.completado === true ? "green" : "red"}` , color: "white"}}>{tarea.tarea} - { tarea.completado === true ? "COMPLETADO" : "FALTA" }-</p>
                        <button onClick={()=>onActualizarTarea(tarea.id)}>Completar Tarea</button>
                        <button onClick={()=>onEliminarTarea(tarea.id)}>Eliminar Tarea</button>
                    </div>
                ))
            }

        </div>
    )
}