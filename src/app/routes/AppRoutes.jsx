import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import View from '../../views/main-view/view.jsx';
import RequestsView from '../../views/requests/requests-form.jsx'
import RequestsConfirmView from '../../views/requests/requests-confirmation.jsx'
import ComplainView from '../../views/complain/complain.jsx'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<View/>} />
                <Route path="/solicitud" element={<RequestsView/>}></Route>
                <Route path="/reclamo" element={<ComplainView/>}></Route>
                <Route path="/confirmacion-solicitud" element={<RequestsConfirmView/>} />
            </Routes>
        </Router>
    );
}