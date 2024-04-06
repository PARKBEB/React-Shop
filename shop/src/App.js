import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Detail from './routes/detail.js';
import Card from './routes/main.js';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function App() {

  let [ices, setIces] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
       <Navbar bg="light" data-bs-theme="light" className="">
        <Container>
          <Navbar.Brand href="#home">ICES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ 
        <>
        <div className="main-bg"></div>
        <div className="container" key="">
          <Button onClick={() => {
            let sortedIces = [...ices];
            sortedIces.sort((a, b) => a.title.localeCompare(b.title));
            setIces(sortedIces);
          }}>순서 정렬 버튼</Button>
          <div className="row">
            {
              ices.map(function(a, i){
                return (
                  <Card ices = {a} /> 
                )
              })
            }
          </div>
        </div>
        </>
      } />
        <Route path="/detail/:id" element={<Detail ices = {ices}/>} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>

        <Route path="/*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

