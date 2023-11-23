import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import RequestsServices from '../adapters/api/requests.services';
import './functionary-table-component.css';
import { SortUp } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function CustomTable() {
    const [requests, setRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        async function fetchRequests() {
            try {
                const requestsData = await RequestsServices.getRequests();
                setRequests(requestsData || []);
                console.log("requests",requestsData);
            } catch (error) {
                console.error(error);
                setRequests([]);
            }
        }

        fetchRequests();
    }, []);

    useEffect(() => {
        // Filtrar los reclamos basados en la entrada del usuario
        const filtered = requests.filter((request) =>
            Object.values(request).some((value) =>
                value.toString().toLowerCase().includes(searchInput.toLowerCase())
            )
        );
        setFilteredRequests(filtered);
    }, [requests, searchInput]);

    return (
        <div className="table-container mx-auto mt-4 p-4">
            <div>
                <label htmlFor="searchInput">Buscar en la tabla: </label>
                <input
                    
                    type="text"
                    id="searchInput"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <h1 className='mt-2' >Solicitudes</h1>
            <Table bordered hover responsive="sm" className="rounded mt-3">
                <thead>
                <tr>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Subcategoría</th>
                        <th>Estado</th>
                        <th>Rut</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRequests.length > 0 ? (
                        filteredRequests.map((request) => (
                            <tr key={request._id}>
                                <td>{request.description}</td>
                                <td>{request.category}</td>
                                <td>{request.subcategory}</td>
                                <td>{request.status}</td>
                                <td>
                                   {request.userRut}
                                </td>
                                <td>
                                <Link to={`/detail-solicitud/${request._id}`}>Detalle</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No hay quejas disponibles.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}
