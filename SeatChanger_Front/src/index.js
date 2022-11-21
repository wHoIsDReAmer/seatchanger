import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './components/App';
import NavBar from "./components/NavBar";
import Raffle from "./components/Raffle";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/raffle" element={<Raffle/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </>
);