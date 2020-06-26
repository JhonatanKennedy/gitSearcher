import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Header(){

    return(
        <nav>
            <Navbar bg='dark' expand='lg' variant='dark'>
                <Navbar.Brand as={Link} to='/'>GitSearcher</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-bar'/>
                <Navbar.Collapse id='basic-navbar-bar'>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/'>Buscar</Nav.Link>
                    <Nav.Link as={Link} to='/lastSearches'>Últimas buscas</Nav.Link>
                    <Nav.Link as={Link} to='/ranking'>Ranking</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}