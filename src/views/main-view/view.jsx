import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./view-css.css";
import LogoTraiguen from "../../assets/Logo-traiguen-Celeste-1024x411_1.png";
import LogoMarcas from "../../assets/Logos-marcas.png";
import { useNavigate } from "react-router-dom";

export default function View() {
  const navigate = useNavigate();
  const handleRequests = () => {
    navigate('/solicitud');
  }

  const handleComplains = () => {
    navigate('/reclamo');
  }

  return (
    <div className="principal-view">
      <img className="imagen" src={LogoTraiguen} alt="" />

      <div className="texto-contacto">
        <h4>
          <strong>
            <h1><strong>Contáctanos</strong></h1>
          </strong>
        </h4>
      </div>
      <div>
        <h4 className="texto-contacto-numero">
          (+5645) 2 885514 (+5645) 2 885517
        </h4>
      </div>
      <div className="texto-contacto-horario">
        <h3>
          Horario de atención al público:
          <h4>Lunes a Viernes 8:30 a 14:00 hrs</h4>
        </h3>
      </div>
      <div className="logo-marcas">
        <img src={LogoMarcas} alt="" />
      </div>

      <div className="card-container">
        <Card className="text-center size mt-2 radius shadow">
          <Card.Header className="p-3">
            <Card.Title className="type40">
              ¿Tienes una solicitud o reclamo?
            </Card.Title>
            <Card.Text className="type24">
              Queremos ayudarte en lo que nos sea posible
            </Card.Text>
            <Card.Title className="type28">
              Por favor, seleccione el motivo del contacto
            </Card.Title>
          </Card.Header>
          <Card.Body className="m-3">
            <div className="mb-2">
              {" "}
              <Button variant="Light type40 button-600x120 button-blue mb-3 shadow" onClick={handleRequests}>
                SOLICITUD
              </Button>
            </div>
            <div>
              <Button variant="Light type40 button-600x120 button-sea shadow" onClick={handleComplains}>
                RECLAMO
              </Button>
            </div>
          </Card.Body>
          <br />
          <br />
        </Card>
      </div>
    </div>
  );
}
