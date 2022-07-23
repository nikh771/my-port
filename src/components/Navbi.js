import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbi() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Project">Project </Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbi;