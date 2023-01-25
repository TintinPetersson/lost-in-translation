import { Link, NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import { STORAGE_KEY_USER } from "../../../utils/StorageKeys";
import { storageDelete } from "../../../utils/storage";


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
                <Navbar.Brand id="brand">Lost in Translation<img className="pb-3" id="brand-logo" src="img/Logo.png" width="45" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {
                        user !== null &&
                        <Nav className="ms-auto">
                            <NavLink className="nav-link" to="/translation">Translations</NavLink>
                            <Dropdown>
                                <Dropdown.Toggle className="btn btn-dropdown bg-transparent border-0" id="dropdown-basic">{user.username}&nbsp;&nbsp;
                                    <i className="bi bi-person-circle img-responsive"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark" className="text-center">
                                    <Dropdown.Item as={Link} className="nav-link dd-item" to="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item as={Link} className="nav-link dd-item" onClick={handleLogoutClick}>Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar



