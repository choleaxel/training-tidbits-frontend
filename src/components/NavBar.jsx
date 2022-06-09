import { Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand>
          <h1 className="title">Chole's Critter Clinic Training Tidbits</h1>
        </Navbar.Brand>
        <div className="submit-new">
          <a href="/Form">
            <h4>Submit New!</h4>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
