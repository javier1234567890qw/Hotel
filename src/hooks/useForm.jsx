import { useState } from 'react'

export const useForm = (inicialState = {}) => {

    const [Values, setValues] = useState(inicialState)

    ////////////////////////////////
    //se pueden agregar validaciones
    ////////////////////////////////

    const handleInputChanges = (e) => {

        setValues({
            ...Values,//se hace asi para solo elegir una 
            [e.target.name]: e.target.value
        });


    }

    return [ Values, handleInputChanges ]

}