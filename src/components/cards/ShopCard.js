import "./css/ShopCard.css";

export default function ShopCard({ producto, onComprar }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="shop-card">
        <img
          src={
            producto.img ||
            "https://res.cloudinary.com/dmtwxshp5/image/upload/v1755018644/Tshirt1_sbqjyc.svg"
          }
          alt={producto.nombre}
        />
        <div className="shop-card-body">
          <h5 className="shop-card-title">{producto.nombre}</h5><br/>
          <span>{producto.descripcion}</span><br/>
          <p className="shop-card-price">
            Precio AR$ {producto.precio?.toLocaleString("es-AR")}
          </p>
          <button onClick={() => onComprar(producto)} className="shop-card-button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
