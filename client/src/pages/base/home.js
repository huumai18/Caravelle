import NavBg from "../../images/nav-background.png";
import Logo from "../../assets/caravelle.svg";
import { Nav } from "../../components";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div>
          <img
            src={NavBg}
            className="home bg"
            height="100%"
            alt="home page background"
          />
        </div>

        <img src={Logo} className="logo" alt="logo" />
      </div>
    </section>
  );
};
