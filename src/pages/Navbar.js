import { HashLink } from "react-router-hash-link"
import photo from "./images/CV_p.jpg"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <HashLink to="/">
                <div className="navbar">
                    <div className="photo">
                        <img src={photo} alt="my photo" />
                    </div>
                    <h2>Salim Ege Caliskan</h2>
                </div>
            </HashLink>
        </div>

    );
}

export default Navbar;