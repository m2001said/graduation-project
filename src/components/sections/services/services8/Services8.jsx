import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// services data
const Services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
    link: "Learn more",
  },
];

const Services8 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });

    // Optional: Refresh AOS when the component updates
    AOS.refresh();

    // Clean up AOS when the component unmounts
    return () => AOS.refreshHard();
  }, []);

  return (
    <section className="section lg:mb-24" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & Image*/}
          <div
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-offset="300"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">I'm a Freelance Frontend Developer with over 5 years of experience.</h3>
            <button className="btn btn-sm">See my work</button>
          </div>
          {/* services */}
          <div className="flex-1 " data-aos="fade-left" data-aos-duration="1200" data-aos-offset="300">
            {/* services list */}
            <div className="">
              {Services.map((service, index) => {
                // Destructure
                const { name, link, description } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[36px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="" className="btn w-9 h-9 mb-[24px] flex justify-center items-center">
                        (/){/* Unicode arrow character */}
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services8;
