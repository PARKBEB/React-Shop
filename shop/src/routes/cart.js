import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { changeName, oldAge } from '../store/userSlice.js';
import { NumAdd, ItemDelete } from '../store.js';
import { useState, memo, useMemo } from "react";

// 필요할 떄만 랜더링 하기 위해 memo 사용 > props가 변할떄만 재랜더링됨
// let Child = memo (function() {
//     return <div>자식임</div>
// })

// function 함수() {
//     return console.log("반복문 10억번 돌린 결과");
// }

function Cart() {

    // let result = 함수();
    // useMemo(() => { return 함수() }, [state])

    let state = useSelector((state)=>{ return state })
    let item = state.items
    // store.js로 요청보내주는 함수
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);

    return (
        <div>
            {/* <Child></Child> */}
            {/* <button onClick={() => setCount(count+1)}>+</button> */}
            <h6>{state.user.name}의 장바구니</h6>
            {/* <h6>{state.user.age}의 나이</h6>
            
            <button onClick={() => {
                dispatch(oldAge(10));
            }}>+</button> */}

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>이름</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {/* return문 중괄호 동시 생략 가능 */}
                    {item.map((k, i) => 
                        <tr>
                            <td>{k.id}</td>
                            <td>{k.name}</td>
                            <td>{k.count}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(NumAdd(k.id))
                                }}>+</button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    dispatch(ItemDelete(k.id))
                                }}
                                >삭제</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;