import { Link } from "react-router-dom";
import "../assets/css/Linkto.css";

export default function Linkto(props) {
    const { link, title, txt, img, date } = props;
  return (
    <div className="linkto">
        <Link to={link} target="_blank" className="linkto-link">
            <img src={img} className="linkto-img" alt=""></img>
            <div className="linkto-content">
                <h2>{title}</h2>
                <p>{txt}</p>
                <h6>{date}</h6>
            </div>
        </Link>
    </div>
  )
}
