import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ComplaintsServices from '../adapters/api/complaints.service';
import './functionary-table-component.css';
import { SortUp } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function CustomTable() {

    const [complaints, setComplaints] = useState([]);
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        async function fetchComplaints() {
            try {
                const complaintsData = await ComplaintsServices.getComplaints();
                setComplaints(complaintsData || []);
                console.log("complaints",complaintsData);
            } catch (error) {
                console.error(error);
                setComplaints([]);
            }
        }

        fetchComplaints();
    }, []);

    useEffect(() => {
        // Filtrar los reclamos basados en la entrada del usuario
        const filtered = complaints.filter((complaint) =>
            Object.values(complaint).some((value) =>
                value.toString().toLowerCase().includes(searchInput.toLowerCase())
            )
        );
        setFilteredComplaints(filtered);
    }, [complaints, searchInput]);

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
                    {filteredComplaints.length > 0 ? (
                        filteredComplaints.map((complaint) => (
                            <tr key={complaint._id}>
                                <td>{complaint.description}</td>
                                <td>{complaint.category}</td>
                                <td>{complaint.subcategory}</td>
                                <td>{complaint.status}</td>
                                <td>
                                   {complaint.userRut}
                                </td>
                                <td>
                                <Link to={`/detail/${complaint._id}`}>Detalle</Link>
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
