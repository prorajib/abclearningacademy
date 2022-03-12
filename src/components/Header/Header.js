import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <NavLink to="/home" className="navbar-brand">
                    <img src={logo} alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form  className="d-flex ms-auto me-4 search-bar">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav className="nav">
                        <NavLink   style={({ isActive }) => {
                                return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "#ff6700" : "",
                                   };
                              }}
                         to="/home" className=" nav-link">
                            Home
                        </NavLink>
                        <NavLink
                         style={({ isActive }) => {
                            return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "#ff6700" : "",
                               };
                          }}
                            to="/courses"
                            className="nav-link"
                        >
                            Courses
                        </NavLink>
                        <NavLink
                        style={({ isActive }) => {
                            return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "#ff6700" : "",
                               };
                          }}
                         to="/about" className="nav-link">
                            About
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => {
                            return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "#ff6700" : "",
                               };
                          }}
                            to="/contact"
                            className="nav-link"
                        >
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;