import { CardReserva } from "./card-Hotel-reserva/cardReserva";


const Reservas = [

  {
    'id': 'Habitación Simple',
    'personas': "Esta habitación permite un máximo de 2 personas",

  },
  {
   'id': 'Habitación Doble',
    'personas': "Esta habitación permite un máximo de 3-4 personas",

  },
  {
    'id': 'Habitación Suite',
    'personas': "Esta habitación permite un máximo de 2 personas",

  }
  


]


export const SeccionReservas = () => {
  return (

    <div>
      <div className='d-flex justify-content-evenly mt-5 '>
      <p className='fs-4 fst-italic'>Nuestras Habitaciones</p>
      </div>
      <div className='d-flex justify-content-evenly flex-wrap'>
</div>

    <div className='d-flex justify-content-evenly flex-wrap'>

      {
        Reservas.map((hab) => {
          return(
            
            <CardReserva  key={hab.id} {...hab} />
            
            )
            
          })
        }


    </div>
        </div>
  )
}
