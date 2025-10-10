import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Route, Routes} from "react-router";
import PlayerWins from "./components/cases/player-wins";
import PlayerLoses from "./components/cases/player-loses";
import MasterMindProvider from "./providers/mastermind-provider";
const routing = <Routes>
    <Route path="/" element={<MasterMindProvider />} exact/>
    <Route path="/wins" element={<PlayerWins/>} />
    <Route path="/loses" element={<PlayerLoses/>} />
</Routes>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {routing}
    </BrowserRouter>
);
