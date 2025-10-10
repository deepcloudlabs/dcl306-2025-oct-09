import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import MastermindHooks from "./MastermindHooks";
import {BrowserRouter, Route, Routes} from "react-router";
import PlayerWins from "./components/cases/player-wins";
import PlayerLoses from "./components/cases/player-loses";
const routing = <Routes>
    <Route path="/" element={<MastermindHooks />} exact/>
    <Route path="/wins" element={<PlayerWins/>} />
    <Route path="/loses" element={<PlayerLoses/>} />
</Routes>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {routing}
    </BrowserRouter>
);
