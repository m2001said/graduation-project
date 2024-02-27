import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";


const Hero10 = ({ handleOrderPopup }) => {
  const { hero10 } = useSelector((state) => state.template10);

  let defaultImage = hero10.defaultImage; ;
  let defaultTitle = hero10.defaultTitle; ;
  let defaultDescription = hero10.defaultDescription; ;

  const [imageId, setImageId] = useState(defaultImage);

  const [title, setTitle] = useState(defaultTitle);

  const [description, setDescription] = useState(defaultDescription);
  
  

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={{
          backgroundImage: `url(${hero10.backGroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
          <div className="items-center p-10 sm:p-30 pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* txt sec */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{title}</h1>
                <p className="text-sm mt-4">{description}</p>
                <div>
                  <button onClick={handleOrderPopup} className="btnBg btnTxt px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 ">
                    {hero10.buttonText}
                  </button>
                </div>
              </div>
              {/* image sec */}
              <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                {/* main img */}
                <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                  <img src={imageId} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" />
                </div>
                {/* other image list */}
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                  {hero10.ImageList.map((data) => (
                    <img
                      src={data.imgUrl}
                      alt=""
                      className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                      onClick={() => {
                        setImageId(data.imgNum === "1" ? `${data.imgUrl}` : data.imgNum === "2" ? `${data.imgUrl}` : `${data.imgUrl}`);
                        setTitle(data.title);
                        setDescription(data.description);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Hero10;
