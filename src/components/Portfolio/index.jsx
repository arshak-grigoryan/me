import PortfolioList from "./components/PortfolioList";
import "./style.scss";

const Portfolio = () => (
  <section className="portfolio">
    <div className="wrapper">
      <h2>Portfolio</h2>
      <PortfolioList />
    </div>
  </section>
);

export default Portfolio;
