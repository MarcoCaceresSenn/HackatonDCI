import axios from 'axios';

class RequestsServices {

    async getRequests() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/requests/all`);
            return response.data.requests;
        } catch (error) {
            console.error(error);
        }
    }

    async getRequestById(idSolicitud) {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/requests/${idSolicitud}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async updateRequestStatus(idSolicitud, estado) {
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/requests/updateStatus/${idSolicitud}`, { estado });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async createRequest(request) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/requests/new-request`, request);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RequestsServices();