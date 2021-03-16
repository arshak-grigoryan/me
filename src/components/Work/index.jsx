import { PICSART } from "../../constants/images";
import "./style.scss";

const Work = () => (
  <section className="work">
    <div className="wrapper">
      <h2>WORK</h2>
      <div className="workInfo">
        <div className="workItem">
          <div>
            <div
              className="logo"
              style={{ backgroundImage: `url(${PICSART})` }}
            ></div>
          </div>
          <div className="ww">
            <p>Junior Software Engineer </p>
            <p>2021 March - Present</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Work;
