import { Link } from "react-router-dom";
import "./css/Linkto.css";

export default function Linkto(props) {
    const { link, title, img, date } = props;
  return (
    <div className="linkto">
        <Link to={link} target="_blank" className="linkto-link">
            <img src={img} className="linkto-img" alt=""></img>
            <div className="linkto-content">
                <h2>{title}</h2>
                <h6>{date}</h6>
            </div>
        </Link>
    </div>
  )
}
