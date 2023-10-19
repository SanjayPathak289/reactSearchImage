import React from "react";
import { Route, Routes,Redirect, Navigate } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error"
import Navbar from "./Navbar";
import Search from "./Search";
const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/contact" Component={Contact} />
                <Route path="/about" Component={About} />
                <Route path="/search" Component={Search} />
                <Route path="*" Component={Error} />
                {/* <Route path="*" element={<Navigate to={"/"} />}/> */}
            </Routes>
        </>
    )
}
export default App;