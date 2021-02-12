import "./style.scss";

const ScrollToTop = () => {

  const totop = () => {
    window.scrollTo({top:0})
  }

  return(
  <div className="top" onClick={totop}>
    <div></div>
  </div>
)};

export default ScrollToTop