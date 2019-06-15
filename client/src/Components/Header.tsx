import * as React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export type HeaderProps = {
    isLoggedIn: boolean;
    isAdmin: boolean;
    onLogout: () => void;
};

export const Header: React.FunctionComponent<HeaderProps> = ({ isLoggedIn, isAdmin, onLogout }) => (
    <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">Contact Manager</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {isLoggedIn && (
                    <Nav.Link href="/users">Users</Nav.Link>
                )}
            </Nav>
        </Navbar.Collapse>
        <div className="mr-sm-2">
            {!isLoggedIn
                ? (<Link to='/login'>Login</Link>)
                : (<Button variant={isAdmin ? "danger" : "info"} onClick={onLogout} type="button" >Logout</Button>)
            }
        </div>
    </Navbar>
);