import { ISTC, PICSART } from "../../constants/images";
import "./style.scss";

const Education = () => (
  <section className="education">
    <div className="wrapper">
      <h2>EDUCATION</h2>
      <div className="eduInfo">
        <div className="eduItem">
          <div>
            <div
              className="logo"
              style={{ backgroundImage: `url(${PICSART})` }}
            ></div>
          </div>
          <div className="doubleCourse">
            <div className="ww">
              <span>ReactJS Advanced </span> <span>2021 February</span>
            </div>
            <div className="ww">
              <span>Intermediate JavaScript </span> <span>2020 August</span>
            </div>
          </div>
        </div>
        <div className="eduItem">
          <div>
            <div
              className="logo"
              style={{ backgroundImage: `url(${ISTC})` }}
            ></div>
          </div>
          <div className="ww">
            <span>Front End development </span> <span>2019 December</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
