import "../assets/css/Footer.css";
import Logo from "../assets/logos/EngrupirLogo.png";
import LogoInstagram from "../assets/logos/LogoInstagram.png";
import LogoSoundcloud from "../assets/logos/LogoSoundCloud.png";

export default function Footer() {
  return (
    <div className="footer section">
            <img src={Logo} alt="" className="logo-footer"></img>
            <h2 className="red"><img src={LogoInstagram} alt="" className="red-footer"></img>/engrupir_</h2>
            <h2 className="red"><img src={LogoSoundcloud} alt="" className="red-footer"></img>/briimartinez</h2>
    </div>
  )
}
