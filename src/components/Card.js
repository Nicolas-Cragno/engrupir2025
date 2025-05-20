import "../assets/css/Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { img, title, txt, link } = props;
  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
  };
  return (
      <Link to="/" className="link">
        <div className='card' style={cardStyle}>
            <div className="card-content">
              <h2>{title}</h2>
              <p>{txt}</p>  
            </div>
        </div>
      </Link>
  )
}
