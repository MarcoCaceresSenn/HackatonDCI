import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SendFill } from 'react-bootstrap-icons';
import "./form-1.complain.css";

export default function Form1Requests() {
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubCategory('');
    };

    const handleSubCategoryChange = (e) => {
        const selectedSubCategory = e.target.value;
        setSubCategory(selectedSubCategory);
    };

    return (
        <div>
            <Form className='form-container mt-5 p-5'>
                <div className='text-center'>
                    <h1>Cuéntanos un poco más</h1>
                    <h1>¿Por qué estás realizando este reclamo?</h1>
                </div>
                <div>
                    <Form.Group className="margin-rut mb-2" controlId="rut">
                        <Form.Label className='custom-label'>Ingrese su rut:</Form.Label>
                        <Form.Control className='input rut' type="text" maxLength={12} placeholder="ej: 12.123.123-1" />
                    </Form.Group>
                    <div className='d-flex justify-content-center select-container gap-5'>
                        <Form.Group className="mt-5" controlId="category">
                            <Form.Label className='custom-label'>Seleccione la categoría:</Form.Label>
                            <Form.Select className="input rut" aria-label="Default select example" onChange={handleCategoryChange} value={category}>
                                <option>Categoría</option>
                                <option value="Vial">Vial</option>
                                <option value="Servicios Públicos">Servicios Públicos</option>
                                <option value="Vivienda">Vivienda</option>
                                <option value="Salud">Salud</option>
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

                <Button className='custom-form-button' type="submit">
                    Confirmar <SendFill />
                </Button>
            </Form>
        </div>
    );
}

function renderSubCategoryOptions(category) {
    switch (category) {
        case 'Vial':
            return (
                <>
                    <option>Choque automovilístico</option>
                    <option>Estado de la vía</option>
                    <option>Señalización deficiente</option>
                    <option>Problemas de tráfico</option>
                </>
            );
        case 'Servicios Públicos':
            return (
                <>
                    <option>Suministro de agua</option>
                    <option>Servicio eléctrico</option>
                    <option>Recolección de basura</option>
                    <option>Transporte público</option>
                </>
            );
        case 'Vivienda':
            return (
                <>
                    <option>Reparaciones necesarias</option>
                    <option>Problemas de vecindario</option>
                    <option>Inquilinos ruidosos</option>
                    <option>Condiciones de vivienda insatisfactorias</option>
                </>
            );
        case 'Salud':
            return (
                <>
                    <option>Atención médica deficiente</option>
                    <option>Problemas en el hospital</option>
                    <option>Acceso a servicios médicos</option>
                    <option>Problemas con medicamentos</option>
                </>
            );
        default:
            return null;
    }
}
