import styles, { layout } from "../../heros/hero7/styles7/style";
import Button7 from "../feature7/Button7";
import { useSelector } from "react-redux";

const CardDeal = () => {
  const { feature } = useSelector((state) => state.template7);
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {feature.title.titleG} <br className="sm:block hidden" /> {feature.title.titleH}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color-dim-white)" }}>
          {feature.title.titleK}{" "}
        </p>
        <Button7 styles={`px-4 py-5 mt-6 bg-green-500 text-white rounded-full hover:bg-green-700 `} />
      </div>
      <div className={layout.sectionImg}>
        <img src={feature.imgUrl[3]} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};
export default CardDeal;
