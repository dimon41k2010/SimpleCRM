import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    console.log(user)
    return (
        <Navbar>
        <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                {user ? (
                    <Link to="/login" onClick={logoutUser}>Logout</Link>
                ) : (
                    <>
                    <Link to="/login" >Login</Link>  

                    <span> | </span>     
                    <Link to="/signup" >Sign Up</Link>
                    </>
                )}
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    )
}

export default Header
