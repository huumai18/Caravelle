import NavBg from "../../images/nav-background.png";
import Logo from "../../assets/caravelle.svg";
import { Roll } from "react-reveal";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="bg">
          <img src={NavBg} alt="home page background" />
        </div>
        <Roll left>
          <img src={Logo} className="logo" alt="logo" />
        </Roll>
      </div>
    </section>
  );
};
