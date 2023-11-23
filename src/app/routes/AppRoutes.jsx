import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import View from '../../views/main-view/view.jsx';
import RequestsView from '../../views/requests/requests-form.jsx'
import RequestsConfirmView from '../../views/requests/requests-confirmation.jsx'
import ComplainView from '../../views/complain/complain.jsx'
import FunctionaryView from '../../views/functionary-views/functionary-view-main.jsx'
import ComplainConfirmView from '../../views/complain/complain-confirmation.jsx'
import ShowDetail from '../../views/functionary-views/show-detail.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<View/>} />
                <Route path="/solicitud" element={<RequestsView/>}></Route>
                <Route path="/reclamo" element={<ComplainView/>}></Route>
                <Route path="/funcionario-reclamos" element={<FunctionaryView/>}></Route>
                <Route path="/confirmacion-solicitud" element={<RequestsConfirmView/>} />
                <Route path="/confirmacion-reclamo" element={<ComplainConfirmView/>} />
                <Route path="/detail" element={<ShowDetail/>} />
            </Routes>
        </Router>
    );
}