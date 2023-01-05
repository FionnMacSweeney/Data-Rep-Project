import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Read} from './components/read';
import { Create } from './components/create';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Edit } from './components/edit';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: "linear-gradient(to top, #000046, #1cb5e0)", height: "100vh" }}>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Video Game App</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link" href="/read">Games info</Nav.Link>
                <Nav.Link className="nav-link" href="/create">Submit Game</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
            <Route path='/read' element={<Read></Read>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

