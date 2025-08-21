import "./css/InfoCard.css";
import { Link } from "react-router-dom";

export default function InfoCard(props) {
  const { img, title, txt, link } = props;
  return (
      <>
        <div className='info-card'>
            <Link to={link} className="link">
            <div className="info-card-img">
                <img src={img} alt=""></img>
            </div>
            </Link>
            <div className="info-card-content">
              <h1>{title}</h1>
              <p>{txt}</p>  
            </div>
        </div>
      </>
  )
}
