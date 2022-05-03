import { about, ramen, sushi } from "../../images";
import { Zoom } from "react-reveal";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about background ">
          <Zoom left>
            <img src={about} alt="about caravelle" />
          </Zoom>
        </div>
        <div className="about infor">
          <h3>~ WHO WE ARE</h3>
          <h1>Caravelle - We are Here To Serve The Best Sushi</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div className="about features">
            <div className="icon ramen-icon">
              <img src={ramen} alt="ramen icon" />
              <div className="detail ramen">
                <h3>Lorem Ipsum </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div className="icon sushi-icon">
              <img src={sushi} alt="sushi icon" />
              <div className="detail sushi">
                <h3>Lorem Ipsum </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
