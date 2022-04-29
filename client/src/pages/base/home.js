import { Nav_Background } from "../components/home_nav_background";
import { Nav } from "../../components";

export const Home = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <Nav_Background />
        <Nav />
      </div>
    </div>
  );
};
