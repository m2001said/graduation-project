import React from "react";
import Img1 from "../../../../assets/images/img10/product/p-1.jpg";
import Img2 from "../../../../assets/images/img10/product/p-2.jpg";
import Img3 from "../../../../assets/images/img10/product/p-3.jpg";
import Img4 from "../../../../assets/images/img10/product/p-4.jpg";
import Img5 from "../../../../assets/images/img10/product/p-5.jpg";
import Img6 from "../../../../assets/images/img10/product/p-9.jpg";
import Img7 from "../../../../assets/images/img10/product/p-7.jpg";



const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed ",
    price: "220",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
  },
  {
    id: 6,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
  },
  {
    id: 7,
    img: Img7,
    title: "Goggles",
    price: "320",
  },
  {
    id: 8,
    img: Img5,
    title: "Printed ",
    price: "220",
  },
];

const Projects14_1 = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
          <p className="text-xs text-gray-400">Explore Our Products</p>
        </div>
        {/* Body section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {/* card section */}
            {ProductsData.map((data) => (
              <div className="group" key={data.id}>
                <div className="relative">
                  <img src={data.img} alt="" className="h-[180px] w-[260px] object-cover rounded-md" />
                  {/* hover button */}
                  <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                    <button className={`bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="leading-7">
                  <h2 className="font-semibold">{data.title}</h2>
                  <h2 className="font-bold">${data.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects14_1;
