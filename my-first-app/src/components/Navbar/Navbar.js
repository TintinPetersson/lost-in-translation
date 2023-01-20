import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav>
            <ul>
                <li>Lost in Translation</li>
            </ul>
            {user !== null &&
                <ul>
                    <li>
                        <NavLink to="/translation">Translations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        {user.username}
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navbar