import "./index.css";
import image1 from "./assets/1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="container">
      <div className="first">
        <img src={image1} alt="Moustafa Emad-image" />
      </div>

      <div className="second">
        <div>
          <h1 style={{ fontSize: "2.5rem" }}> Moustafa Emad Dawood</h1>
        </div>
        <div>
          <h2 style={{ fontSize: "1.5rem" }}>Mobile : 01096688747</h2>
        </div>
        <div>
          <a href="https://wa.me/+201096688747">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ fontSize: "4rem", margin: "0.4rem" }}
            />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100004980244806">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: "4rem", margin: "0.4rem" }}
            />
          </a>
          <a href="https://www.instagram.com/moustafa_3mad99">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              style={{ fontSize: "4rem", margin: "0.4rem" }}
            />
          </a>
          <a href="https://www.google.com.eg">
            <FontAwesomeIcon
              icon={faSnapchatGhost}
              style={{ fontSize: "4rem", margin: "0.4rem" }}
            />
          </a>

          <p style={{ marginTop: "4rem", fontSize: "1.2rem" }}>
            @ created by Mohamed Dawood
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
