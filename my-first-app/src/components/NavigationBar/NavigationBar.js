import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { STORAGE_KEY_USER } from "../../const/StorageKeys";
import { storageDelete } from "../../utils/storage";


const NavigationBar = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand id="brand">Lost in Translation</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {
                        user !== null &&
                        <Nav className="ms-auto">
                            <NavLink className="nav-link" to="/translation">Translations</NavLink>
                            <NavDropdown title={<i className="bi bi-person-circle"> {user.username} </i>}>
                                <NavLink className="nav-link text-dark dd-item" to="/profile">Profile</NavLink>
                                <NavLink className="nav-link text-dark dd-item" onClick={handleLogoutClick}>Log Out</NavLink>
                            </NavDropdown>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar



