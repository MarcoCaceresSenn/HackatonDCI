import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import "./functionary-table-component.css";

export default function CustomTable() {
    return (
        <div className="table-container mx-auto mt-4 p-4">
            <Table bordered hover responsive="sm" className="rounded">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Tipo</th>
                        <th>Estado</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Asunto 1</td>
                        <td>Tipo 1</td>
                        <td>Estado 1</td>
                        <td>
                            <Link to="/detalles/1">Detalles 1</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Asunto 2</td>
                        <td>Tipo 2</td>
                        <td>Estado 2</td>
                        <td>
                            <Link to="/detalles/2">Detalles 2</Link>
                        </td>
                    </tr>
                    {/* ... Puedes agregar más filas según sea necesario */}
                </tbody>
            </Table>
        </div>
    );
}
