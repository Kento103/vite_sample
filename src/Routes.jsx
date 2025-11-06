import { Route, Routes } from "react-router-dom"
import PageA from "./App.jsx";
import PageB from "./pages/pageB.jsx"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PageA />} />
            <Route path="/dice" element={<PageB />} />
        </Routes>
    )
}