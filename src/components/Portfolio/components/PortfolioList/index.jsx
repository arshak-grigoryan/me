import PORTFOLIO from "../../../../constants/portfolio";
import PortfolioItem from "../PortfolioItem";
import "./style.scss";

const PortfolioList = () => (
  <ul>
    {PORTFOLIO.map((props) => (
      <PortfolioItem key={props.name} {...props} />
    ))}
  </ul>
);

export default PortfolioList;
