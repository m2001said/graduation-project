import { useSelector } from "react-redux";

const Services9 = () => {
  const services = useSelector((state) => state.template9.services);

  return (
    <main className="bg-[var(--bg-color)] mt-20 lg:py-20 service-9">
      <div className="container mx-auto px-3 text-center" service-9-div>
        <p className="uppercase text-xl py-8">Our services</p>

        <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
          {services.blocks.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--white-9)] rounded-[var(--border-radius-lg-9)] lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl"
            >
              <button className="bg-[var(--primary-text-color)]  text-[var(--primary-text-color)] rounded-full flex justify-center items-center w-20 h-20 shadow-2xl">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-2/3 h-1/2 m-auto bg-[var(--primary-text-color-9)] hover:bg-[var(--icon-hover-color-9)] active:bg-[var(--icon-active-color-9)]"
                />
              </button>
              <p className="text-lg font-medium py-4">{service.title}</p>
              <p className="w-2/3 mx-auto text-[var(--secondary-text-color-9)]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services9;
