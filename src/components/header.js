import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({href}) => (
  <Navbar
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
    sticky="top"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
    <Navbar.Brand href="#home">/anushkasaxena/{href}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#intro">/intro</Nav.Link>
          <Nav.Link href="#education">/education</Nav.Link>
          <Nav.Link href="#experience">/experience</Nav.Link>
          <Nav.Link href="#projects">/selected_projects</Nav.Link>
        </Nav>
      </h1>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
