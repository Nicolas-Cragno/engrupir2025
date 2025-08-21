import "./css/Home.css";
import LogoSoundcloud from "../assets/logos/soundCloudOrange.avif";
import AcidGrooveImg1 from "../assets/images/carajo.jpg";
import AcidGrooveImg2 from "../assets/images/acidhouse.jpg";
import VanguartImg1 from "../assets/images/ophelia.jpg";
import VanguartImg2 from "../assets/images/toto.jpg";
import Card from "../components/cards/Card";
import Footer from "../components/Footer";
import InfoCard from "../components/cards/InfoCard";
import NoticeCard from "../components/cards/NoticeCard";

export default function Home() {
  return (
    <div className="home">
      <div className="presentation">
        <InfoCard img={LogoSoundcloud} title="Diego Lugano" txt="Escuchá nuestra charla con el dueño de Vértigo" link="https://soundcloud.com/brii-martinez/vertigo-entrevista?ref=clipboard&p=a&c=1&si=c6878d736a664abda1119002e352f8e1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"/>
      </div>
      
      <div className="notes section container">
  <div className="notes-left">
    <NoticeCard 
      img={AcidGrooveImg1} 
      title="Sin anestesia" 
      txt="Repasamos la trayectoria de Carajo, desde su nacimiento en plena crisis hasta la actualidad."
    />
  </div>
  <div className="notes-right">
    <Card 
      img={AcidGrooveImg2}
      title="Acid House"
      txt="Conoce la historia de este movimiento under surgido en los 80s."
      link="/"
    />
    <Card 
      img={VanguartImg1}
      title="Ophelia Liu Mua"
      txt="Conoce la obra de esta artista oriunda de Hong Kong."
      link="/"
    />
    <Card 
      img={VanguartImg2}
      title="Toto Tatuer"
      txt="De tatuar pieles a tallar vidrios. Te mostramos la obra de este gran artista argentino."
      link="/"
    />
  </div>
</div>

      <Footer></Footer>
    </div>
  )
}
