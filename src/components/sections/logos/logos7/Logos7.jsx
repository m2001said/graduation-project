import styles from "../../heros/hero7/styles7/style";

const Clients7 = ({ template }) => {
  const logos = template.logos;

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} my-4`}>
          <div className={`${styles.flexCenter} w-full`} style={{ color: "var(--website-7-color-6)", display: "flex", flexWrap: "wrap" }}>
            {logos.companies.map((company, index) => (
              <div key={index} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`} style={{ minWidth: "120px", maxWidth: "192px" }}>
                <img src={company.imgUrl} alt={`client_logo_${index}`} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Clients7;
