import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import View from '../../views/view.jsx';
import RequestsView from '../../views/requests/requests-form.jsx'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<View/>} />
                <Route path="/solicitud" element={<RequestsView/>}></Route>
            </Routes>
        </Router>
    );
}