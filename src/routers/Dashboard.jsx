

import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'
import { Carrousel } from '../Carrusel-Principal/carrousel'
import { SeccioPaquetes } from '../Paquetes/SeccioPaquetes'
import { SeccionReservas } from '../Seccion de Reservas/Reservas/SeccionReservas'
import { ServicioSeccion } from '../Servicios/Servicios'


export const Dashboard = () => {
    return (
        <>
            <Navbar />
            
            

            <Carrousel />
            
            <Routes>
                <Route path="/" element={<SeccionReservas />} />
                <Route path="/Reservas" element={<SeccionReservas />} />
                <Route path="/Servicios" element={<ServicioSeccion/>} />
                <Route path="/Paquetes" element={<SeccioPaquetes />} />

                
                
            </Routes>
        </>
    )

}




