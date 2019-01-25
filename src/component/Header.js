import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';



class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">HY's Tool</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Project
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Report
                    </NavItem>
                    <NavDropdown eventKey={3} title="Other Tools" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="https://aws.amazon.com/cn/" target="_blank">AWS</MenuItem>
                        <MenuItem eventKey={3.2} href="https://testerhome.com/topics/17920" target="_blank">TesterHome</MenuItem>
                        <MenuItem eventKey={3.3} href="https://www.google.com/" target="_blank">Google</MenuItem>

                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
