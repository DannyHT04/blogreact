import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogPage from "./components/BlogPage";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import AccountPage from "./components/AccountPage";
import CreatePage from "./components/CreatePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand href="/"></Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="Blog">Blog</Nav.Link>
                <Nav.Link href="Dashboard">Dashboard</Nav.Link>
                <Nav.Link href="Login">Login</Nav.Link>
                {/* <Nav.Link href="Register">Register</Nav.Link> */}
                <Nav.Link href="Account">Account</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="Blog" element={<BlogPage />}></Route>
          <Route path="Dashboard" element={<DashboardPage />}></Route>
          <Route path="Login" element={<LoginPage />}></Route>
          {/* <Route path="Register" element={<CreatePage />}></Route> */}
          <Route path="Account" element={<AccountPage />}></Route>
          <Route path="/" element={<BlogPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
