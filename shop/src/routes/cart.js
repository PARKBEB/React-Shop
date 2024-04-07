import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { changeName } from '../store';

function Cart() {

    let a = useSelector((state)=>{ return state })
    let item = a.items
    // store.js로 요청보내주는 함수
    let dispatch = useDispatch();

    return (
        <div>
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