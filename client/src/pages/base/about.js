import { about } from "../../images";
import About_Infor from "../components/about_infor";

export const About = () => {
  return (
    <div className="container">
      <div className="about-container">
        <div className="about background ">
          <img src={about} alt="about caravelle" />
        </div>
        <About_Infor />
      </div>
    </div>
  );
};
