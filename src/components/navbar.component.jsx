import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LogoImage from '../assets/Logo-traiguen-Celeste.png';
import { Link } from 'react-router-dom';
import "./navbar.component.css"

export default function NavBarComponent() {
    return (
        <Navbar className="bg-body-tertiary principal">
            <Container className='nav-size'>
                <Navbar.Brand>
                    <img
                        src={LogoImage}
                        alt="Logo"
                        className="image-config"
                    />
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/">
                            <Button className='custom-button'>Inicio</Button>
                        </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}