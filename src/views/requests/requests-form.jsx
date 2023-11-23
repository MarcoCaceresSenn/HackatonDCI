import "./requests.css"
import NavBar from "../../components/navbar.component"
import FirstForm from "../../components/form-1.requests"

export default function RequestsForm() {
    return (
        <div className="general-container">
            <NavBar/>
            <div className="requests-container">
                <FirstForm/>
            </div>
        </div>
    )
}