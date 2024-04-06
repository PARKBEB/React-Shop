import { useParams } from "react-router-dom";



// import styled from 'styled-components';

// let YellowBtn = styled.button `
//     background: ${ props => props.bg};
//     color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
//     padding: 10px;
// `

// // YellowBtn 속성 복사
// let NewBtn = styled.button(YellowBtn)`

// `;

function Detail(props) {

    let {id} = useParams();

    if (props.ices[id] !== undefined) {
        return (
            <div className="container">
            {/* <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="orange">버튼</YellowBtn> */}

            <div className="row">
                <div className="col-md-6">
                <img src={props.ices[id].img} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.ices[id].title}</h4>
                <p>{props.ices[id].content}</p>
                <p>{props.ices[id].price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            </div> 
        )
    } else if(props.ices[id] === undefined){
        return (
            <div>상세 페이지 없음</div>
        )
    }
}

export default Detail;