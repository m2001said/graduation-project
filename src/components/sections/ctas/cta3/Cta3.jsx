import { useLocation } from "react-router";
import "./cta3.css";
import { useSelector } from "react-redux";

const Cta3 = () => {
  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template3.cta;
    }
  });
  const firstGroup = cta.title.slice(0, 2);
  const secondGroup = cta.title.slice(2);

  return (
    <div className="Join3" id="join3">
      <div className="left-c3">
        <hr />
        <div className="title3-group">
          {firstGroup.map((item, index) => (
            <span key={index} className={index % 2 === 0 ? "stroke-text" : ""}>
              {item.Subtitle}
            </span>
          ))}
        </div>
        <div className="title3-group">
          {secondGroup.map((item, index) => (
            <span key={index} className={index % 2 === 0 ? "stroke-text" : ""}>
              {item.Subtitle}
            </span>
          ))}
        </div>
      </div>
      <div className="right-c3">
        <form className="email3-container">
          <input className="email3-container-input" type="email" name="user_email" placeholder="Enter Your Email address" />
          <button className="btn3 btn3-c3">{cta.actionButton}</button>
        </form>
      </div>
    </div>
  );
};

export default Cta3;
