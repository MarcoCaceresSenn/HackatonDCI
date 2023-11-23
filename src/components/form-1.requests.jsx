import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SendFill } from 'react-bootstrap-icons';
import "./form-1.requests.css";
import { useNavigate } from "react-router-dom";

export default function Form1Requests() {
    const navigate = useNavigate();
    const [rut, setRut] = useState('');
    const [solicitud, setSolicitud] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');

    const handleRutChange = (e) => {
        setRut(e.target.value);
    };

    const handleSolicitudChange = (e) => {
        setSolicitud(e.target.value);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubCategory('');
    };

    const handleSubCategoryChange = (e) => {
        const selectedSubCategory = e.target.value;
        setSubCategory(selectedSubCategory);
    };

    const handleContinue = (event) => {
        event.preventDefault();
        console.log("EL RUT:", rut,"LA SOLI: ", solicitud,"LA CATEGORY: ", category,"LA SUBCA:", subCategory);
        navigate('/confirm-request', {
            state: { rut, solicitud, category, subCategory }
        })
    }

    return (
        <div>
            <Form className='form-container mt-5 p-5'>
                <div className='text-center'>
                    <h1>Cuéntanos un poco más</h1>
                    <h1>¿Qué te gustaría solicitar?</h1>
                </div>
                <div>
                    <Form.Group className="margin-rut mb-2" controlId="rut">
                        <Form.Label className='custom-label'>Ingrese su rut:</Form.Label>
                        <Form.Control className='input rut' type="text" maxLength={12} placeholder="ej: 12.123.123-1" onChange={handleRutChange} />
                    </Form.Group>
                    <Form.Group className="margin-rut mb-2" controlId="rut">
                        <Form.Label className='custom-label'>Describanos un poco su solicitud(opcional):</Form.Label>
                        <Form.Control className='input-asunto' type="text" maxLength={40} placeholder="ej: Necesito apoyo alimenticio con una canasta familiar" onChange={handleSolicitudChange} />
                    </Form.Group>
                    <div className='d-flex justify-content-center select-container gap-5 little-top'>
                        <Form.Group className="mt-5" controlId="category">
                            <Form.Label className='custom-label'>Seleccione la categoría:</Form.Label>
                            <Form.Select className="input rut" aria-label="Default select example" onChange={handleCategoryChange} value={category}>
                                <option>Categoría</option>
                                <option value="Nutrition">Alimentación</option>
                                <option value="Health">Salud</option>
                                <option value="Education">Educación</option>
                                <option value="Housing">Vivienda</option>
                                <option value="Employment">Empleo</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mt-5" controlId="subCategory">
                            <Form.Label className='custom-label'>Seleccione la subcategoría:</Form.Label>
                            <Form.Select className="input rut" aria-label="Default select example" onChange={handleSubCategoryChange} value={subCategory}>
                                <option>Subcategoría</option>
                                {renderSubCategoryOptions(category)}
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>

                <Button className='custom-request-button' type="submit" onClick={handleContinue}
                    disabled={!rut || !solicitud || !category || !subCategory}
                >
                    Confirmar <SendFill />
                </Button>
            </Form>
        </div>
    );
}

function renderSubCategoryOptions(category) {
    switch (category) {
        case 'Nutrition':
            return (
                <>
                    <option>Canasta Básica</option>
                    <option>Asistencia con Comestibles</option>
                    <option>Cupones de Alimentos</option>
                    <option>Programas de Comedores Comunitario</option>
                </>
            );
        case 'Health':
            return (
                <>
                    <option>Atención Básica de Salud</option>
                    <option>Servicios de Salud Mental</option>
                    <option>Atención Preventiva</option>
                    <option>Asistencia Médica Especializada</option>
                </>
            );
        case 'Education':
            return (
                <>
                    <option>Apoyo Académico</option>
                    <option>Becas y Subvenciones</option>
                    <option>Recursos Educativos</option>
                    <option>Programas de Formación Profesional</option>
                </>
            );
        case 'Housing':
            return (
                <>
                    <option>Programas de Vivienda Asequible</option>
                    <option>Asistencia para Reparaciones en el Hogar</option>
                    <option>Servicios de Refugio Temporal</option>
                    <option>Subsidios de Vivienda</option>
                </>
            );
        case 'Employment':
            return (
                <>
                    <option>Servicios de Colocación Laboral</option>
                    <option>Oportunidades de Formación Profesional</option>
                    <option>Asesoramiento Laboral</option>
                    <option>Programas de Desarrollo de Habilidades</option>
                </>
            );
        default:
            return null;
    }
}
