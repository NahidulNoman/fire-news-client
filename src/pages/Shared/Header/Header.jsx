import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import toast from "react-hot-toast";
import './header.css';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  console.log(user)
  const signOut = () => {
    logOut()
    .then( () => {
      toast.success('Successfully Sign Out !')
    })
    .catch(error => console.log(error))
  }
    return (
        <Navbar className='mb-3' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to='/'>Fire-News-App</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {
                  user?.uid ?
                  <>
                  <span>{user?.displayName}</span>
                  <button onClick={signOut} className='btn btn-primary ms-3 fw-semibold'>Log Out</button>
                  </>
                  :
                  <>
                  <span className='list'>
                  <Link to='/login'>Login</Link>
                  <Link to='/signUp'>SignIn</Link>
                  </span>
                  </>
                }
                
                </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {
                  user?.photoURL ?
                  <Image style={{height : '40px'}} roundedCircle src={user.photoURL}></Image>
                  : <FaUser></FaUser>
                }
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;