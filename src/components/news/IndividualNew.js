import "./css/IndividualNew.css";
import ImgDefault from "../../statics/img/Predio.svg";
import obtenerDiaSemana from "../../functions/data-functions";
import NoteNew from "./NoteNew";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";


export default function IndividualNew({ noticia, onClose }) {
  if (!noticia) return null; // seguridad si no hay noticia

  const fecha = noticia.fecha ? noticia.fecha.toDate() : null;
  const dia = obtenerDiaSemana(fecha);


  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
            <img src={noticia.imagen || ImgDefault} alt="" className="modal-img"/>
        </div>
        <h2 className="modal-title">{noticia.titulo}</h2>
        <h6 className="modal-subtitle">{noticia.subtitulo}</h6>
        <div className="modal-body container">
          <div className="row">
            <div className={noticia.declaracion ? "col-md-6 modal-text-info" : "modal-text-info"}>
                <p className="modal-text">{noticia.texto}</p>
                {noticia.autor && <p className="modal-autor">Por: {noticia.autor}</p>}
            </div>
            {noticia.declaracion ? (
                <div className="col-md-6 modal-text-data">
                    <NoteNew txt={noticia.declaracion} img={noticia.imgDeclarante} person={noticia.declarante}/>
                </div>
                
            ) : null}
          </div>
        </div>
        <div className="modal-footer">
            <span>{fecha ? dia.toUpperCase() + " " + fecha.toLocaleDateString("es-AR") : null}</span>
            <div className="modal-footer-redes">
            <FaInstagram className="modal-footer-logo"/>
            <RiYoutubeLine  className="modal-footer-logo"/>
            </div>
        </div>
      </div>
    </div>
  );
}
