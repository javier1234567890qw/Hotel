import { ServiciosCard } from "./serviciosCard/ServiciosCard"


const Servicios = [
    {
        id: 'Buceo',
        Horarios: '12pm-4pm',

    },
    {
        id: 'Masaje y aromaterapia',
        Horarios: '2pm-3pm',
    }
]

export const ServicioSeccion = () => {
    return (

        <div>
            <div className='d-flex justify-content-evenly mt-5 '>
                <p className='fs-4 fst-italic'>Nuestros Servicios</p>
            </div>
            <div className='d-flex justify-content-evenly flex-wrap'>
            </div>

            <div className='d-flex justify-content-evenly flex-wrap'>

                {
                    Servicios.map((ser) => {
                        return (

                            <ServiciosCard key={ser.id} {...ser} />

                        )

                    })
                }


            </div>
        </div>
    )
}