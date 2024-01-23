import { Container, Nav, Navbar, NavDropdown, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
function NavBar() {
  return (
    <Navbar expand="lg" className="nav mx-auto">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Brand>
             <a href="#home">
                <Image className='main-logo' src="./mainLogo.png"/>
             </a>
            </Navbar.Brand>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">SHIRTS</Nav.Link>
            <NavDropdown title="OUTERWEAR">
              <NavDropdown.Item href="#action/3.7">HOODIES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">JACKETS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">BOMBER JACKETS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HEADWEAR" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SNAPBACK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">TRUCKER HAT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">PANEL HAT</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COLLABORATIONS">
              <NavDropdown.Item href="#action/3.7">SHOGUN X DRAGON BALL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">SHOGUN X ONE PIECE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">SHOGUN X ATACK ON TITAN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">SHOGUN X BLEACH</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">SHOGUN X BERSERK</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;