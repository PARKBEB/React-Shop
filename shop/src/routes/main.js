import { Link, useNavigate } from 'react-router-dom';

// useNavigate는 컴포넌트의 최상위 레벨에서 호출되어야 함
function Card(props) {
    return (
        <div className="col-md-4">
            <Link to={'/detail/' + props.ices.id}>
                <img src={props.ices.img} style={{width: '60%'}} />
                <h4>{props.ices.title}</h4>
                <p>{props.ices.content}</p>
            </Link>
        </div>
    )
  }

export default Card;
