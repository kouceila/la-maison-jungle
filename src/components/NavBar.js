import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import {useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';

function NavBar () {
    const [key, handleSelectKey] = useState("home")

    function handleSelect (key){
        handleSelectKey(key)

        alert(`selected ${key}`)
    }

    return (
        <Navbar bg="primary" variant="dark" activeKey="1"  onSelect={handleSelect}   >
            <Container>
                <Navbar.Brand href="#home" > <img src={logo} alt="La maison jungle" className="lmj-logo" /> La maison jungle </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home" eventKey="home">HOME</Nav.Link>
                <Nav.Link href="#features" eventKey="features">Features</Nav.Link>
                <Nav.Link href="#ABOUT US" eventKey="ABOUT US" >ABOUT US</Nav.Link>

                <NavDropdown title="Pricing" id="nav-dropdown">
                    <NavDropdown.Item eventKey="Basic pricing">Basic</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Corporates</NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item eventKey="Enterprise Pricing">Enterprise</NavDropdown.Item>
                </NavDropdown>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar