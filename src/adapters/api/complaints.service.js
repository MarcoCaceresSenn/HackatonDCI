import axios from 'axios';

class ComplaintsServices {
    async getComplaints() {
        console.log("Llegó al servicio");
        console.log(process.env.REACT_APP_BASE_URL);
        try {
            console.log("Entró a l")
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/complaints/all`);
            console.log("hola");
            console.log(response.data);
            return response.data.complaints;
        } catch (error) {
            console.error(error);
        }
    }

    async getComplaintById(idReclamo) {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/complaints/${idReclamo}`);
            return response.data.selectedComplaint;
        } catch (error) {
            console.error(error);
        }
    }

    async updateComplaintStatus(idReclamo, status) {
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/complaints/updateStatus/${idReclamo}`, { status });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    
    async createComplaint(complaint) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/complaints/new-complaint`, complaint);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ComplaintsServices();