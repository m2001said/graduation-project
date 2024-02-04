import styles, { layout } from "../../../heros/hero7/styles7/style";
import { features3 } from "../../../../../features/templateData/templateSlice7";
import Button7 from "../feature7_1/Button7";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {features3[0].title.titleA} <br className="sm:block hidden" /> {features3[0].title.titleB}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color-dim-white)" }}>
        {features3[0].title.titleC}{" "}
      </p>

      <Button7 styles={`px-4 py-5 mt-6 bg-green-500 text-white rounded-full hover:bg-green-700 `} />
    </div>

    <div className={layout.sectionImg}>
      <img src={features3[1].imgUrl.imgUrlA} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
