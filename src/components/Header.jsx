import React, { useState } from "react";
import logo from "../assests/image/8982.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "./Header.module.css";

const Header = () => {
  const [menutitle, setMenutitle] = useState([{}]);
  return (
    <>
      <div className={styles.desktop_view}>
        <div
          className="d-flex flex-column flex-shrink-0 p-3"
          style={{ width: "280px" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img className={styles.desktop_view_logo} src={logo} alt="LOGO" />
          </a>
          <hr />
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" className={styles.navigation_links}>
              Active
            </Nav.Link>
            <Nav.Link eventKey="link-1" className={styles.navigation_links}>
              Link
            </Nav.Link>
            <Nav.Link eventKey="link-2" className={styles.navigation_links}>
              Link
            </Nav.Link>
          </Nav>
          <hr />
          <div className="dropdown">
            <div className={`row ${styles.dropdown_row}`}>
              <div className="col-3">
                <img
                  className={styles.profile_pic}
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  alt="Profile_pics"
                />
              </div>
              <div className="col-3">
                <DropdownButton id="dropdown-basic-button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_moblie_view}>
        {[false].map(expand => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid>
              <img
                className={styles.sidebar_moblie_view_logo}
                src={logo}
                alt="LOGO"
              />
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <div className="dropdown">
                      <div className={`row ${styles.dropdown_row}`}>
                        <div className="col-3">
                          <img
                            className={styles.profile_pic}
                            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                            alt="Profile_pics"
                          />
                        </div>
                        <div className="col-3">
                          <DropdownButton id="dropdown-basic-button">
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default Header;
