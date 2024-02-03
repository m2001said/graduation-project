import styles from "../../../../components/sections/heros/hero7/styles7/style";
import { Serv7 } from "../../../../features/templateData/templateSlice7";

const Services7 = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-black-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">{Serv7[1].text.textA}</span>
        </p>
        <img src={Serv7[0].imgUrlA} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient ">{Serv7[1].text.textB}</span>
      </p>
    </div>
  </div>
);

export default Services7;
