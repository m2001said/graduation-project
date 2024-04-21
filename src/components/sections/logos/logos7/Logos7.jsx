import { useLocation } from "react-router";
import styles from "../../heros/hero7/styles7/style";
import { useSelector } from "react-redux";

const Clients7 = () => {
  // const { logos } = useSelector((state) => state.template7);
  const { pathname } = useLocation();
  const logos = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.logos;
    } else {
      return state.template7.logos;
    }
  });
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full`} style={{ color: "var(--color-dim-white)", display: "flex", flexWrap: "wrap" }}>
        {logos.companies.map((company, index) => (
          <div key={index} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`} style={{ minWidth: "120px", maxWidth: "192px" }}>
            <img src={company.imgUrl} alt={`client_logo_${index}`} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients7;
