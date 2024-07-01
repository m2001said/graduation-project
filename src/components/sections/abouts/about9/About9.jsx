import { useSelector } from "react-redux";
const About9 = ({ template }) => {
  const about = template.about;
  return (
    <main className="container mx-auto lg:flex px-3 mb-12  pt-20 about-9">
      <div className="lg:w-2/5">
        <p className="text-[var(--website-9-color-3)] md:text-xl text-lg font-medium">{about.title}!</p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">{about.description} </h1>
        <div className="lg:block hidden">
          <div className="  bg-[var(--website-9-color-1)] shadow-2xl px-4 py-6 rounded-3xl flex items-start gap-x-3 lg:w-4/5 mt-6 ">
            <span>
              <button>
                {" "}
                <img
                  src={about.icon.url}
                  alt=""
                  className="  m-auto bg-[var(--transparent)] hover:bg-[var(--icon-hover-color)] active:bg-[var(--icon-active-color) about9_logo "
                />
              </button>{" "}
              <h1 className="text-[var(--website-9-color-3)] text-lg font-medium">{about.subtitle}</h1>
              <p className="flex items-center  text-[var(--website-9-color-3)] w-4/5">{about.icon.title}</p>
            </span>
          </div>
          {/* <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <img src="home" className="text-4xl text-[#0c4f37] w-1/3" />
            <span>
              <h1 className="text-[#0c4f37] text-lg font-medium">donec porttier cusimd</h1>
              <p className="text-[#a5a5a5] w-4/5">ksldmvldskv lknmsdfkls dnsklfnsdkl , mdfks.</p>
            </span>
          </div> */}
        </div>
      </div>
      <div className="lg:w-1/2 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]">
        <img src={about.imgs[0]} alt="" className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover" />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
          <img src={about.imgs[1]} alt="ssssssss" className="w-full h-3/5 rounded-3xl shadow-md object-cover" />
          <img src={about.imgs[2]} alt="" className="w-full h-2/5 rounded-3xl shadow-md object-cover" />
          <button className="bg-gradient-to-r from-[var(--website-9-color-6)] to-[var(--website-9-color-1)] rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button>
        </div>
      </div>
      <div className="lg:hidden block pt-4 py-16 ">
        <div className=" bg-[var(--website-9-color-1)] shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <img src={about.icon} className="md:w-10 h-10 text-4xl text-[var(--website-9-color-3)]" />
          <span>
            <h1 className="text-[var(--website-9-color-3)] text-lg font-medium">{about.icon.title}</h1>
            <p className="text-[var(--website-9-color-4)]">{about.icon.subtitle} </p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default About9;
