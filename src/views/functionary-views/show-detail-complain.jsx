import React, { useState } from "react";
import NavBar from "../../components/navbar.component";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ArrowClockwise } from "react-bootstrap-icons";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import RequestsServices from "../../adapters/api/requests.services";
import "./show-detail.css";

export default function ShowDetailCom() {
  const { state } = useLocation();
  const rut = state?.rut;
  const solicitud = state?.solicitud;
  const category = state?.category;
  const subCategory = state?.subCategory;

  const [selectedStatus, setSelectedStatus] = useState("Pendiente");

  const backToAll = () => {
    window.history.back();
  };

  const handleNextRequest = () => {
    // Lógica para ir a la siguiente solicitud
    console.log("Ir a la siguiente solicitud");
  };

  const handlePreviousRequest = () => {
    // Lógica para volver a la solicitud anterior
    console.log("Volver a la solicitud anterior");
  };

  const handleChangeStatus = () => {
    // Lógica para cambiar el estado de la solicitud
    console.log("Cambiar estado a:", selectedStatus);
  };

  const handleRequests = async (event) => {
    event.preventDefault();
    console.log("ELuser:", user);
    const response = await RequestsServices.createRequest(user);
    console.log(response);
    if (response.status === 200) {
      alert("Solicitud enviada correctamente");
      window.location.href = "/";
    } else {
      alert("Error al enviar la solicitud");
    }
  };

  const user = {
    rut: rut,
    description: solicitud,
    category: category,
    subcategory: subCategory,
  };

  return (
    <div className="general-container">
      <NavBar />
      <div className="requests-container">
        <div className="custom-width d-flex justify-content-between">
          <div>
            <h2>Rut:</h2>
            <h2>Teléfono:</h2>
            <h2>Tipo:</h2>
            <h2>Descripción:</h2>
            <h2>Categoría:</h2>
            <h2>Subcategoría:</h2>
          </div>
          <div>
            <h2>{rut}</h2>
            <h2>9 88888821</h2>
            <h2>Solicitud</h2>
            <h2>{solicitud}</h2>
            <h2>{category}</h2>
            <h2>{subCategory}</h2>
          </div>
        </div>
        <Form>
          <div className="d-flex justify-content-between mt-3">
            <Button onClick={handlePreviousRequest} className="custom-button">
              Anterior
            </Button>


            <InputGroup>
              <FormControl
                as="select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="custom-select large-select"
              >
                <option value="Pendiente">Pendiente</option>
                <option value="Aceptado">Aceptado</option>
                <option value="Rechazado">Rechazado</option>
                <option value="En proceso">En proceso</option>
              </FormControl>

              <Button
                onClick={handleChangeStatus}
                className="custom-confirm-button large-new"
              >
                Cambiar Estado&nbsp;&nbsp;&nbsp;
                <ArrowClockwise />
              </Button>
            </InputGroup>

            <Button onClick={handleNextRequest} className="custom-button">
              Siguiente
            </Button>


            <Button onClick={backToAll} className="custom-button">
              Volver
            </Button>
        


          </div>
        </Form>
      </div>
    </div>
  );
}
