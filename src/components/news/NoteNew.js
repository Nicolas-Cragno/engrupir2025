import "./css/NoteNew.css";
import NoImg from "../../statics/img/noperson.png";

const NoteNew = ({ txt, img, person }) => {
  return (
    <div className="note-item">
      <div className="note-left">
        <p>" {txt} "</p>
      </div>
      <div className="note-right">
        <img src={img || NoImg} alt={person} className="note-img" />
        <span className="note-person">{person}</span>
      </div>
    </div>
  );
};

export default NoteNew;
