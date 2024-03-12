import styles from "../../heros/hero7/styles7/style";
import { useSelector } from "react-redux";

const Clients7 = () => {
  const { images } = useSelector((state) => state.template7);
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter}  w-full`} style={{ color: "var(--color-dim-white)" }}>
        {Object.keys(images).map((clientId) => (
          <div key={clientId} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <img src={images[clientId].imgUrl} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients7;
