import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import Example from '../../views/test-example.jsx';


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Example/>} />
            </Routes>
        </Router>
    );
}