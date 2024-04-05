import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [ices] = useState(data);
  let [iceNum, setIceNum] = useState(0);

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
          <Contain ices = {ices} iceNum = {iceNum}/>  
        </div>
      </div>

    </div>
  );
}

export default App;

function Contain(props) {
  return (
    <div className="col-md-4">
      <img src={props.ices[props.iceNum].img} style={{width: '60%'}} />
      <h4>{props.ices[props.iceNum].title}</h4>
      <p>{props.ices[props.iceNum].content}</p>
    </div>
  )
}
