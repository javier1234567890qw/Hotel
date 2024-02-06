// import { SeccionReservas } from "../Seccion de Reservas/Reservas/SeccionReservas"
import { PaquetesCard } from './PaqetesCard/PaquetesCard'
const Paquetes = [
  {
    id: 'Economico',
    personas: 'Dos personas',
    Descripcion: 'Un paquete economico que ofrece nuestro hotel por 4 dias para dos personas',
  },
  {
    id: 'Medio',
    personas: 'Cuatro personas',
    Descripcion: 'Un paquete economico que ofrece nuestro hotel por 4 dias para cuatro personas',
  }
  ,
  
]

export const SeccioPaquetes = () => {
  return (
    <div >
      <div className='d-flex justify-content-evenly mt-5 '>
      <p className='fs-4 fst-italic'>Nuestros Paquetes</p>
      </div>
      <div className='d-flex justify-content-evenly flex-wrap'>

      {
        Paquetes.map((paq) => {
          return (
            
            <PaquetesCard key={paq.id} {...paq} />
            
            )
            
          })
        }
      
        </div>
    </div>
  )
}
