import React from 'react'
import './Header.css'
import * as Icon from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <>
    <Container fluid className='bg-bold-blue' >
      <Navbar className="navbar navbar-expand-lg navbar-light bg-bold-blue">
        <Col className="col-xl-8">
          <Navbar.Brand  href="homepage.html">
            LOGO
          </Navbar.Brand>
          
        </Col>
        <Col className="col-xl-4">
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="homepage.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <Dropdown className="nav-item dropdown ">
                <Dropdown.Toggle variant="bg-bold-blue" id="dropdown-autoclose-true ">
                  Blog
                </Dropdown.Toggle>

              <Dropdown.Menu>
                    <Dropdown.Item href="blog.html">Blog</Dropdown.Item>
                    <Dropdown.Item href="#">Noodle</Dropdown.Item>
                    <Dropdown.Item href="#"> Rice</Dropdown.Item>
              <Dropdown.Item href="add_catogery.html">Add new catogery</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="sign_in.html">
                  Sign in
                </a>
              </li>
              <i className="bi bi-search" style={{ fontSize: 20 }} />
              
              <Dropdown className="dropdown">
                <Dropdown.Toggle variant="bg-bold-blue" id="dropdown-autoclose-true">
                  <i className="bi bi-person-circle" style={{ fontSize: 20 }} />
                </Dropdown.Toggle>

            <Dropdown.Menu className='text-center'>
                  <i className="bi bi-person-circle" style={{ fontSize: 50 }}>
                                <i className="bi bi-camera" style={{ fontSize: 20 }} />
                          </i>
                            <li
                                className="mb-3 dropdown-item"
                                data-toggle="modal"
                                data-target="#editProfileInfoModal"
                              >
                                <button>
                                  <a href="#">Edit profile info</a>
                                </button>
                              </li>
                              <li
                                className=" mb-3 dropdown-item"
                                data-toggle="modal"
                                data-target="#changePasswordModal"
                              >
                                <button>
                                  <a href="#">Change password</a>
                                </button>
                              </li>
                              <div className="dropdown-divider" />
                              <button>
                                <a className="dropdown-item" href="#">
                                  SIGN OUT
                                </a>
                              </button>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </Col>
      </Navbar>
    </Container>             
</>
  )
}
