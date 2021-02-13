import {
  CODE_EDITOR,
  FOOD_ONLINE_ORDER,
  G2048,
  QUOTES,
  SINGLE_PAGE_MARKUP,
  TABLE_REACT,
  WEATHER_FORECAST,
} from "./images";

const MY_GITHUB_URL = "https://arshak-grigoryan.github.io"

const PORTFOLIO = [
  {
    name: "Food online order",
    link: `${MY_GITHUB_URL}/food-online-order/`,
    image_url: FOOD_ONLINE_ORDER,
    tech: [
      "HTML",
      "SASS",
      "ReactJS",
      "ReduxJS",
      "React-Router",
      "Immer",
      "Eslint",
      "Prettier",
      "Husky",
    ],
  },
  {
    name: "Table",
    link: `${MY_GITHUB_URL}/table-react/`,
    image_url: TABLE_REACT,
    tech: [
      "HTML",
      "SASS",
      "ReactJS",
      "Eslint",
      "Prettier",
      "Husky",
    ],
  },
  {
    name: "Weather forecast",
    link: `${MY_GITHUB_URL}/weather-now/`,
    image_url: WEATHER_FORECAST,
    tech: ["HTML", "CSS", "JS"],
  },
  {
    name: "2048",
    link: `${MY_GITHUB_URL}/2048/`,
    image_url: G2048,
    tech: ["HTML", "CSS", "JS"],
  },
  {
    name: "Quotes",
    link: `${MY_GITHUB_URL}/quotes/`,
    image_url: QUOTES,
    tech: ["HTML", "CSS", "JS"],
  },
  {
    name: "Code editor",
    link: `${MY_GITHUB_URL}/codeEditor/`,
    image_url: CODE_EDITOR,
    tech: ["HTML", "CSS", "JS"],
  },
  {
    name: "Single page markup",
    link: `${MY_GITHUB_URL}/single_page_markup/`,
    image_url: SINGLE_PAGE_MARKUP,
    tech: ["HTML", "CSS", "JS"],
  },
];

export default PORTFOLIO