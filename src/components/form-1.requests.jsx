import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./form-1.requests.css";
import { SendFill } from 'react-bootstrap-icons';

export default function Form1Requests() {

    return (
        <div>
            <Form className='form-container mt-5 p-5'>
                <div className='text-center'>
                    <h1>Cuentanos un poco más</h1>
                    <h1>¿Qué le gustaria solicitar?</h1>
                </div>
                <div>
                    <Form.Group className="margin-rut mb-2" controlId="rut">
                        <Form.Label className='custom-label'>Ingrese su rut:</Form.Label>
                        <Form.Control className='input rut' type="text" maxLength={12} placeholder="ej: 12.123.123-1" />
                    </Form.Group>
                    <div className='d-flex justify-content-center select-container gap-5'>
                        <Form.Group className="mt-5" controlId="category">
                            <Form.Label className='custom-label'>Seleccione la categoria:</Form.Label>
                            <Form.Select className="input rut" aria-label="Default select example">
                                <option>Categoria</option>
                                <option value="Nutrition">Alimentación</option>
                                <option value="Health">Salud</option>
                                <option value="Education">Educación</option>
                                <option value="Housing">Vivienda</option>
                                <option value="Employment">Empleo</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mt-5" controlId="category">
                            <Form.Label className='custom-label'>Seleccione la subcategoria:</Form.Label>
                            <Form.Select className="input rut" aria-label="Default select example">
                                <option>Subcategoria</option>
                                <option value="Nutrition">Alimentación</option>
                                <option value="Health">Salud</option>
                                <option value="Education">Educación</option>
                                <option value="Housing">Vivienda</option>
                                <option value="Employment">Empleo</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>


                <Button className='custom-form-button' type="submit">
                    Confirmar <SendFill />
                </Button>
            </Form>
        </div>
    )
}