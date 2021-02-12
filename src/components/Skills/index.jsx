import {
  HTML,
  CSS,
  SASS,
  JAVASCRIPT,
  REACT,
  REDUX,
  REACT_ROUTER,
  MATERIALUI,
  WEBPACK,
  BABEL,
  ESLINT,
  PRETTIER,
  GIT,
  GITHUB,
  TABLE,
} from "../../constants/images";
import Item from "./Item";
import "./style.scss";

const Skills = () => (
  <section className="skills" style={{ backgroundImage: `url(${TABLE})` }}>
    <div className="wrapper">
      <h2>SKILLS</h2>
      <div>
        <div className="ItemWrapper">
          <Item logo={HTML} />
          <Item logo={CSS} />
          <Item logo={SASS} />
        </div>
        <div className="ItemWrapper">
          <Item logo={JAVASCRIPT} />
          <Item logo={REACT} />
          <Item logo={REDUX} />
          <Item logo={REACT_ROUTER} />
          <Item logo={MATERIALUI} />
        </div>
        <div className="ItemWrapper">
          <Item logo={WEBPACK} />
          <Item logo={BABEL} />
          <Item logo={ESLINT} />
          <Item logo={PRETTIER} />
          <Item logo={GIT} />
          <Item logo={GITHUB} />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
