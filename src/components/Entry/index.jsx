import { useEffect, useState } from "react";
import { LAPTOP } from "../../constants/images";

import "./style.scss";

const Entry = () => {
  const [state, setState] = useState("visible");

  useEffect(() => {
    const id = setTimeout(
      () =>
        setState((prevState) =>
          prevState === "visible" ? "hidden" : "visible"
        ),
      650
    );
    return () => clearTimeout(id);
  }, [state]);

  return (
    <section className="entry" style={{ backgroundImage: `url(${LAPTOP})` }}>
      <div className="wrapper">
        <div>
          <p>Exploring development...</p>
          <p>
            Writing the <b>{"{code}"}</b>
            <span style={{ visibility: state }}>_</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Entry;
