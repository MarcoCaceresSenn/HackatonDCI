import NavBar from "../../components/navbar.component"
import { useLocation } from "react-router-dom";
import "./requests-confirmation.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SendFill } from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import RequestsServices from "../../adapters/api/requests.services";



export default function RequestsConfirmationForm() {
    const { state } = useLocation();
    const rut = state?.rut;
    const solicitud = state?.solicitud;
    const category = state?.category;
    const subCategory = state?.subCategory;
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        console.log(phone)
    }

    const backToRequests = () => {
        window.history.back();
    }
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

    }

    const user = {
        "rut": rut,
        "description": solicitud,
        "category": category,
        "subcategory": subCategory,
        "phone": phone
    }
    console.log(user)

    return (
        <div className="general-container">
            <NavBar />
            <div className="requests-container">
                <div className="custom-width d-flex justify-content-between">
                    <div>
                        <h2>Rut:</h2>
                        <h2>Tipo:</h2>
                        <h2>Solicitud:</h2>
                        <h2>Categoría:</h2>
                        <h2>Subcategoría:</h2>
                    </div>
                    <div>
                        <h2>{rut}</h2>
                        <h2>Solicitud</h2>
                        <h2>{solicitud}</h2>
                        <h2>{category}</h2>
                        <h2>{subCategory}</h2>
                    </div>
                </div>
                <h3 className="mt-3">Si quiere conocer el estado de su solicitud ingrese su número de celular(opcional):</h3>
                <Form>
                    <InputGroup className="mb-2">
                        <InputGroup.Text id="phone-prefix">+569</InputGroup.Text>
                        <Form.Control
                            className='input-asunto'
                            type="text"
                            minLength={8}
                            maxLength={8}
                            placeholder="Número de teléfono"
                            aria-label="Número de teléfono"
                            aria-describedby="phone-prefix"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </InputGroup>
                    <div className="d-flex justify-content-between mt-3">
                        <Button onClick={backToRequests} className="custom-back" >Volver</Button>
                        <Button
                            className='custom-confirm-button'
                            type="submit"
                            onClick={handleRequests}
                        >
                            Enviar Solicitud <SendFill />
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    )
}