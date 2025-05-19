import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import Linkto from "../components/Linkto";
import LogoSoundcloud from "../assets/logos/soundCloudOrange.avif";

export default function Home() {
  return (
    <div className="home">
      <div className="presentation"></div>
      <div className="soundcloud-section">
        <h3>Entrevista</h3>
        <Linkto 
        link="https://soundcloud.com/brii-martinez/vertigo-entrevista?ref=clipboard&p=a&c=1&si=c6878d736a664abda1119002e352f8e1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        title="Diego Lugano, dueño de Vértigo."
        txt="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaRepasamos aspectos determinantes en la historia de la movida under y nos compartió su visión sobrel a escena actual."
        img={LogoSoundcloud}
        />
      </div>
    </div>
  )
}
