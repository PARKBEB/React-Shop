import { Button, Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import { useState, createContext } from 'react';
import Detail from './routes/detail.js';
import Card from './routes/main.js';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';
import Cart from './routes/cart.js';

// Redux 사용하면 컴포넌트 들이 props 없이 state 공유가능, 공유 필요없으면 안써도 됨

export let Context1 = createContext();

function App() {

  let [ices, setIces] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let [num, setNum] = useState(2);
  let [add, setAdd] = useState("더보기");
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
            <button className="btn" onClick={() => {
              axios.get(`https://codingapple1.github.io/shop/data${num}.json`)
              .then((결과) => {
              let copy = [...ices, ...결과.data];
              setIces(copy);
              setNum(num + 1);
              })
              .catch(()=>{
                setAdd("상품 없음");
                console.log('실패')
              })
            }}>{ add }</button>
        </div>
        </>
      } />
        <Route path="/detail/:id" element={
          // <Context1.Provider value={{ 재고, ices }}>
          //   <Detail ices = {ices}/>
          // </Context1.Provider>
          <Detail ices = {ices}/>
        } />

        <Route path="/cart" element={<Cart />} />
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

