import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { changeName, oldAge } from '../store/userSlice.js';

function Cart() {

    let state = useSelector((state)=>{ return state })
    let item = state.items
    // store.js로 요청보내주는 함수
    let dispatch = useDispatch();

    return (
        <div>
            <h6>{state.user.name}의 장바구니</h6>
            <h6>{state.user.age}의 나이</h6>
            <button onClick={() => {
                dispatch(oldAge(10));
            }}>+</button>
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
                    {item.map((k) => 
                        <tr>
                            <td>{k.name}</td>
                            <td>{k.count}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(changeName())
                                }}>+</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;