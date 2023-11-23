import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from '../assets/Logo-traiguen-Celeste.png';
import { Link } from 'react-router-dom';
import "./functionary-navbar.css";

export default function NavBarComponent() {
    const handleComplaintsTable = () => {
        window.location.href = "/funcionario-reclamos";
    }

    const handleRequestsTable = () => {
        window.location.href = "/funcionario-solicitudes";
    }

    return (
        <Navbar className="bg-body-tertiary principal">
            <Container className='nav-size'>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={LogoImage}
                        alt="Logo"
                        className="image-config"
                    />
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <div className="d-flex">
                        <Link to="/reclamos" className="nav-link mx-3">
                            <Navbar.Text className="nav-text" onClick={handleComplaintsTable}><h4>Reclamos</h4></Navbar.Text>
                        </Link>

                        <Link to="/solicitudes" className="nav-link mx-3">
                            <Navbar.Text className="nav-text" onClick={handleRequestsTable} ><h4>Solicitudes</h4></Navbar.Text>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
