import "./functionary-view-complaints.css"
import NavBar from "../../components/functionary-navbar.jsx"
import Table from "../../components/functionary-table-requests.jsx"
export default function RequestsForm() {
    return (
        <div className="general-container">
            <NavBar/>
            <div className="requests-container">
                <Table/>
            </div>
        </div>
    )
}