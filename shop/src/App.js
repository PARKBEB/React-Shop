import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [icecreams] = useState(data)

  return (
    <div className="App">
       <Navbar bg="light" data-bs-theme="light" className="">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + 'img/icecream1.png'} style={{width: '80%'}} />
            <h4>{icecreams[0].title}</h4>
            <p>{icecreams[0].content}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + 'img/icecream2.png'} style={{width: '80%'}} />
            <h4>{icecreams[1].title}</h4>
            <p>{icecreams[1].content}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + 'img/icecream3.png'} style={{width: '80%'}} />
            <h4>{icecreams[2].title}</h4>
            <p>{icecreams[2].content}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
