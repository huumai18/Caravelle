import NavBg from "../../images/nav-background.png";
import Logo from "../../assets/caravelle.svg";

export const Nav_Background = () => {
  return (
    <>
      <div className="nav background">
        <img src={NavBg} alt="home page background" />
      </div>

      <img src={Logo} className="logo" alt="logo" />
    </>
  );
};
