import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
function TopBar() {
  let { pathname } = useLocation();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary topbox">
        <Container>
          <Navbar.Brand className="brand">
            <PeopleAltIcon
              // fontSize="medium"
              sx={{ fontSize: 30 }}
              className="userlogo"
            />
            Business Blogs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                className={`text-decoration-none mr-10 ${
                  pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                <Nav.Item>
                  <HomeIcon sx={{ fontSize: 20 }} className="topicon" />
                  Home
                </Nav.Item>
              </Link>
              <Link
                className={`text-decoration-none mr-10 ${
                  pathname === "/dashboard" ? "active" : ""
                }`}
                to="/dashboard"
              >
                <Nav.Item>
                  <DashboardCustomizeIcon
                    sx={{ fontSize: 18 }}
                    className="topicon"
                  />
                  Dashboard
                </Nav.Item>
              </Link>
              <Link
                className={`text-decoration-none mr-10 ${
                  pathname === "/create-user" ? "active" : ""
                }`}
                to="/create-user"
              >
                <Nav.Item>
                  <GroupAddIcon sx={{ fontSize: 20 }} className="topicon" />
                  Create
                </Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
