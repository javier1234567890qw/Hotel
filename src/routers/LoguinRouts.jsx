import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Loguin } from "../Loguin/Loguin"
import { Dashboard } from "./Dashboard"





export const LoguinRouts = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/Loguin" element={<Loguin />} />

                <Route path="*" element={<Dashboard/>} /> 

            </Routes>
        </BrowserRouter>
    )
}
