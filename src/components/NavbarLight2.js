import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import logo from '../img/logo.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavbarLight2() {
    return (
        <Navbar bg="light" variant="light" sticky="top" expand="sm" collapseOnSelect>
            <div className="container">
                <Nav className="container-fluid">
                    <Nav.Item>
                        <Navbar.Brand to="/"><img src={logo} />{' '}</Navbar.Brand>
                    </Nav.Item>
                    <Nav.Item>
                        <input class="form-control me-3 ms-3" type="search" placeholder="Search" aria-label="Search" />
                    </Nav.Item>
                    <Nav.Item className="ms-auto">
                        <Icon path={mdiCart} size={1} />
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>


    );
}

export default NavbarLight2;