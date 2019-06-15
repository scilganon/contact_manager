import * as React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export type HeaderProps = {
    isLoggedIn: boolean;
    onLogout: () => void;
};

export const Header: React.FunctionComponent<HeaderProps> = ({ isLoggedIn, onLogout }) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Contact Manager</Navbar.Brand>
        <div className="mr-sm-2">
            {!isLoggedIn
                ? (<Link to='/login'>Login</Link>)
                : (<Button onClick={onLogout} type="button" >Logout</Button>)
            }
        </div>
    </Navbar>
);