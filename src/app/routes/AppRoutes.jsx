import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import View from '../../views/view.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<View/>} />
            </Routes>
        </Router>
    );
}