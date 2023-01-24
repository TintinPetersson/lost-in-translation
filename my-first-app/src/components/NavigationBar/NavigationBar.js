import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
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
                            <Dropdown>
                                <Dropdown.Toggle className="btn btn-dark" id="dropdown-basic">{user.username}&nbsp;&nbsp;
                                    <i className="bi bi-person-circle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item><NavLink className="nav-link dd-item" to="/profile">Profile</NavLink></Dropdown.Item>
                                    <Dropdown.Item><NavLink className="nav-link dd-item" onClick={handleLogoutClick}>Log Out</NavLink></Dropdown.Item>
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



