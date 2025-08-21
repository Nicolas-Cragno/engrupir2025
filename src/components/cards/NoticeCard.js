import "./css/NoticeCard.css";

export default function NoticeCard(props) {
    const { img, title, txt } = props;

  return (
    <div className="notice-card">
      <img src={img} alt={title} className="notice-img" />
      <div className="notice-text">
        <h1>{title}</h1>
        <p>{txt}</p>
      </div>
    </div>
  );
}
