const PortfolioItem = ({name, link, image_url, tech}) => (
  <li>
    <a
      rel="noopener"
      href={link}
      target="_blank"
    >
      <div>{name}</div>
      <div
        className="projpic restaurants"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <div>
        {tech.map((t) => `${t} `)}
      </div>
    </a>
  </li>
);

export default PortfolioItem;
