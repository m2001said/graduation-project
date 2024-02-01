import styles from "../../../sections/heros/hero7/styles7/style";
import Button7 from "../../features/feature7/feature71/Button7";
import { Ctas7 } from "../../../../features/templateData/templateSlice7";

const Cta7 = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>{Ctas7[0].title.titleA}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{Ctas7[0].title.titleB}</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button7 styles={`px-4 py-5 mt-6 bg-green-500 text-white rounded-full hover:bg-green-700 `} />
    </div>
  </section>
);

export default Cta7;
