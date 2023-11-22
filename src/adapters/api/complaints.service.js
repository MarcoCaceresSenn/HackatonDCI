import axios from 'axios';

class ComplaintsServices {
    async getComplaints() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/complaints/all`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async getComplaintById(idReclamo) {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/complaints/${idReclamo}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async updateComplaintStatus(idReclamo, estado) {
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/complaints/${idReclamo}`, {estado});
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

}