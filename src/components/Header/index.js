import './style.css'
import { Navbar, Nav } from 'react-bootstrap'

// TODO: Burada react router dom kullancaz o yuzden her bir yonlendirme icin Link kullanmayi ogrenecegiz
const index = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="true">
      <Navbar.Brand href="/">POKEDEX APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/fav" disabled>
            Favorites
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default index
