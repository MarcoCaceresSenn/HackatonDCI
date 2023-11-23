import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ComplaintsServices from '../adapters/api/complaints.service';
import './functionary-table-component.css';

export default function CustomTable() {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        async function fetchComplaints() {
                const complaintsData = await ComplaintsServices.getComplaints();
                console.log("Complaints data")
                console.log(complaintsData)
                setComplaints(complaintsData);
        }
        fetchComplaints();
        console.log(complaints);
    }, []);
    
    return (
        <div className="table-container mx-auto mt-4 p-4">
            <Table bordered hover responsive="sm" className="rounded">
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
                    {complaints && complaints.length > 0 ? (
                        complaints.map((complaint) => (
                            <tr key={complaint._id}>
                                <td>{complaint.description}</td>
                                <td>{complaint.category}</td>
                                <td>{complaint.subcategory}</td>
                                <td>{complaint.status}</td>
                                <td>
                                   {complaint.userRut}
                                </td>
                                <td>
                                   <a href="#" >Detalle</a>
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
