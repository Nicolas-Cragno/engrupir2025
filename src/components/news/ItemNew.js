import "./css/ItemNew.css";
import ImgDefault from "../../statics/img/Predio.svg";

export default function ItemNew({ noticia, modo = "big", onClick }) {
  return (
    <div className="item-new"> {/* 👈 aquí agregamos onClick */}
      <div
        className="item-new-img"
        style={{ backgroundImage: `url(${noticia.imagen || ImgDefault})` }}
      >
        <div className="item-new-text">
          {modo === "big" ? (
            <>
              <div className="item-new-text-header">
                <h5>{noticia.franquicia ? "GF " + noticia.franquicia : null}</h5>
                <p>{noticia.subtitulo}</p> 
              </div>
              <div className="item-new-text-content">
                <h1>{noticia.titulo}</h1>
                <button className="open-btn" onClick={onClick}>Ver nota completa</button>
              </div>
            </>
          ) : (
            <>
              <div className="view-on">
                <p>{noticia.franquicia ? "GF " + noticia.franquicia : null}</p>
                <h4>{noticia.titulo}</h4>
              </div>
              <div className="view-off" onClick={onClick}>
                <h4>Ver nota completa</h4>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
