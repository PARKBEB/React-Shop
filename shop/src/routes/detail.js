import { Nav } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { useState } from 'react';
import { ItemAdd } from './../store.js';
// import { Context1 } from '../App.js';

function Detail(props) {

    let dispatch = useDispatch();


    let [count, setCount] = useState(0);
    let {id} = useParams();
    let 찾은상품 = props.ices.find(x => x.id == id);
    let [write, setWrite] = useState('');
    let [msg, setMsg] = useState(true);
    let [tab, setTab] = useState(0);
    
    useEffect(() => {
        let 꺼낸거 = localStorage.getItem('watched');
        꺼낸거 = JSON.parse(꺼낸거);
        꺼낸거.push(찾은상품.id);
        // Set 자료형 < 중복 제거해줌
        꺼낸거 = new Set(꺼낸거);
        꺼낸거 = Array.from(꺼낸거);
        localStorage.setItem('watched', JSON.stringify(꺼낸거));
    }, [])

    useEffect(() => {
        let a = setTimeout(() => { setMsg(false) }, 2000)
        // 똑같이 했는데 안됨 이해안감 (입력 팝업)
        if (isNaN(write) == true){
            alert("경고")
          }

        return () => {
            clearTimeout(a);
        }
    }, [write])

    if (props.ices[id] !== undefined) {
        return (
            <div className="container">
                {
                    msg == true
                    ? <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div> 
                    : null
                }
                <div className="row">
                    <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
                    </div>
                    {/* <div>
                        <input onChange={ (e) => { setWrite(e.target.value) }} style={{width: '30%'}}></input>
                    </div> */}
                    <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(ItemAdd( {id : 찾은상품.id , name : 찾은상품.title, count : 1} ))
                        }}>주문하기</button> 
                    </div>
                </div>
                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link eventKey="link0" onClick={() => {setTab(0)}}>버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab = {tab} ices = {props.ices}/>
            </div> 
        )
    } else if(props.ices[id] === undefined){
        return (
            <div>😥상세 페이지 없음</div>
        )
    }
}

function TabContent({tab, ices}) {    
    
    // let {ices} = useContext(Context1);

    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => {setFade('end')}, 100)
        
        // useEffect 실행전 실행됨
        return () => {
            setFade('');
        }
    }, [tab])

    return <div className={`start ${fade}`}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>    
}

export default Detail;

