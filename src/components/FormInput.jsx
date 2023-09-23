import { useState } from "react"

export const FormInput = () => {
    const [valores, setValores] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        sexo: "",
        selectUniversidad: "",
        checkboxInput: true
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const onChangeInputs = (event) => {
        const {name, value, type, checked} = event.target
        const newValor = type === 'checkbox' ? checked : value
        setValores({
            ...valores,
            [name] : newValor
        })
    }
    
    return (
        <h1>
            <form action="" onSubmit={onSubmitForm}>
                <input type="text" name="nombre" onChange={onChangeInputs} />
                <input type="text" name="apellido" onChange={onChangeInputs} />
                <input type="text" name="edad" onChange={onChangeInputs} />
                <input type="text" name="sexo" onChange={onChangeInputs} />
                <select name="selectUniversidad" onChange={onChangeInputs}>
                    <option value="CERTUS">CERTUS</option>
                    <option value="UTP">UTP</option>
                    <option value="UCV">UCV</option>
                </select>

                <input type="checkbox" name="checkboxInput" onChange={onChangeInputs}  />


                <button disabled={valores.checkboxInput === false}>ENVIAR</button>


            </form>
        </h1>
    )
}