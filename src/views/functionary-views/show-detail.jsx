import React, { useEffect, useState } from 'react';
import NavBar from "../../components/navbar.component";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ArrowClockwise } from "react-bootstrap-icons";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./show-detail.css";
import complaintsService from '../../adapters/api/complaints.service';
import requestsServices from '../../adapters/api/requests.services';

export default function ShowDetail() {

  const { id } = useParams();

  const [request, setRequest] = useState([]);

  useEffect(() => {
    async function fetchRequest() {
            console.log("Entró a la funcion")
            const requestData = await requestsServices.getRequestById(id);
            setRequest(requestData || []);
            console.log("request",requestData);
        
    }

    fetchRequest();
}, []);


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

  const handleChangeStatus = async () => {
    try {
      await requestsServices.updateRequestStatus(id,selectedStatus);
      console.log(`Estado cambiado a: ${selectedStatus}`);
      // Puedes realizar alguna acción adicional después de cambiar el estado
    } catch (error) {
      console.error('Error al cambiar el estado:', error);
      // Puedes manejar el error de alguna manera
    }
    
  };

  return (
    <div className="general-container">
      <NavBar />
      <div className="requests-container">
        <div className="custom-width d-flex justify-content-between">
          <div>
            <h2>Rut:</h2>
            {request.userPhone && <h2>Teléfono:</h2>}
            <h2>Tipo:</h2>
            <h2>Descripción:</h2>
            <h2>Categoría:</h2>
            <h2>Subcategoría:</h2>
            <h2>Estado:</h2>
          </div>
          <div>
            <h2>{request.userRut}</h2>
            {request.userPhone && <h2>{request.userPhone}</h2>}
            <h2>Solicitud</h2>
            <h2>{request.description}</h2>
            <h2>{request.category}</h2>
            <h2>{request.subcategory}</h2>
            <h2>{request.status}</h2>
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
