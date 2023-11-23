import "./complain.css"
import NavBar from "../../components/navbar.component"
import FirstForm from "../../components/form-1.complain"

export default function RequestsForm() {
    return (
        <div className="general-container">
            <NavBar/>
            <div>
                <FirstForm/>
            </div>
        </div>
    )
}