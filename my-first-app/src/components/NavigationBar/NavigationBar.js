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
                            <NavDropdown title={<i class="bi bi-person-circle"> {user.username} </i>}>
                                <NavLink className="nav-link text-dark dd-item" to="/profile">Profile</NavLink>
                                <NavLink className="nav-link text-dark dd-item" onClick={handleLogoutClick}>Log Out</NavLink>
                            </NavDropdown>
                            {/* 
                            <div class="dropdown">
                                <button
                                    class="btn btn-primary dropdown-toggle hidden-arrow"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="bi bi-person-circle">Profile</i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"> <i class="fas fa-user-alt pe-2"></i>My Profile</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="fas fa-cog pe-2"></i>Settings</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="fas fa-door-open pe-2"></i>Logout</a></li>
                                </ul>
                            </div> */}
                        </Nav>

                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar



