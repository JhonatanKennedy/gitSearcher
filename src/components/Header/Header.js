import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){

    return(
        <nav>
            <Navbar bg='dark' expand='lg' variant='dark'>
                <Navbar.Brand href='#home'>GitSearcher</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-bar'/>
                <Navbar.Collapse id='basic-navbar-bar'>
                <Nav className='mr-auto'>
                    <Nav.Link href='#Search'>Busca</Nav.Link>
                    <Nav.Link href='#Últimas buscas'>Últimas buscas</Nav.Link>
                    <Nav.Link href='#Ranking'>Ranking</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}