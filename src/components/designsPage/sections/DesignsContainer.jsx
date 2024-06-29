import React from "react";
import "./designsContainer.css";
import { useTranslation } from "react-i18next";
import DesignCard from "./designsCard/DesignCard";
import design1 from "../../../assets/images/designs/design1.jpg";
import design2 from "../../../assets/images/designs/design2.jpg";
import design3 from "../../../assets/images/designs/design3.jpg";
import design4 from "../../../assets/images/designs/design4.jpg";
import design5 from "../../../assets/images/designs/design5.jpg";
import design6 from "../../../assets/images/designs/design6.jpg";
import design7 from "../../../assets/images/designs/design7.jpg";
import design8 from "../../../assets/images/designs/design8.jpg";
import design9 from "../../../assets/images/designs/design9.jpg";
import design10 from "../../../assets/images/designs/design10.jpg";
import design11 from "../../../assets/images/designs/design11.jpg";
import design13 from "../../../assets/images/designs/design13.jpg";
import design14 from "../../../assets/images/designs/design14.jpg";
import design16 from "../../../assets/images/designs/design16.jpg";
import design18 from "../../../assets/images/designs/design18.jpg";
import websites from "../../../assets/images/websites.jpg";

const DesignsContainer = () => {
  const { t } = useTranslation("main");

  const designsData = [
    {
      title: t("DESIGNS.TITLE_1"),
      description: t("DESIGNS.DESCRIPTION_1"),
      imageUrl: websites,
    },
    {
      title: t("DESIGNS.TITLE_2"),
      description: t("DESIGNS.DESCRIPTION_2"),
      imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709490323/create-with-you-self.jpg",
    },
    {
      title: t("DESIGNS.TITLE_3"),
      description: t("DESIGNS.DESCRIPTION_3"),
      imageUrl: design1,
    },
    {
      title: t("DESIGNS.TITLE_4"),
      description: t("DESIGNS.DESCRIPTION_4"),
      imageUrl: design2,
    },
    {
      title: t("DESIGNS.TITLE_5"),
      description: t("DESIGNS.DESCRIPTION_5"),
      imageUrl: design3,
    },
    {
      title: t("DESIGNS.TITLE_6"),
      description: t("DESIGNS.DESCRIPTION_6"),
      imageUrl: design4,
    },
    {
      title: t("DESIGNS.TITLE_7"),
      description: t("DESIGNS.DESCRIPTION_7"),
      imageUrl: design5,
    },
    {
      title: t("DESIGNS.TITLE_8"),
      description: t("DESIGNS.DESCRIPTION_8"),
      imageUrl: design6,
    },
    {
      title: t("DESIGNS.TITLE_9"),
      description: t("DESIGNS.DESCRIPTION_9"),
      imageUrl: design7,
    },
    {
      title: t("DESIGNS.TITLE_10"),
      description: t("DESIGNS.DESCRIPTION_10"),
      imageUrl: design8,
    },
    {
      title: t("DESIGNS.TITLE_11"),
      description: t("DESIGNS.DESCRIPTION_11"),
      imageUrl: design9,
    },
    {
      title: t("DESIGNS.TITLE_12"),
      description: t("DESIGNS.DESCRIPTION_12"),
      imageUrl: design10,
    },
    {
      title: t("DESIGNS.TITLE_13"),
      description: t("DESIGNS.DESCRIPTION_13"),
      imageUrl: design11,
    },
    {
      title: t("DESIGNS.TITLE_14"),
      description: t("DESIGNS.DESCRIPTION_14"),
      imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
    },
    {
      title: t("DESIGNS.TITLE_15"),
      description: t("DESIGNS.DESCRIPTION_15"),
      imageUrl: design13,
    },
    {
      title: t("DESIGNS.TITLE_16"),
      description: t("DESIGNS.DESCRIPTION_16"),
      imageUrl: design14,
    },
    {
      title: t("DESIGNS.TITLE_17"),
      description: t("DESIGNS.DESCRIPTION_17"),
      imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
    },
    {
      title: t("DESIGNS.TITLE_18"),
      description: t("DESIGNS.DESCRIPTION_18"),
      imageUrl: design16,
    },
    {
      title: t("DESIGNS.TITLE_19"),
      description: t("DESIGNS.DESCRIPTION_19"),
      imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
    },
    {
      title: t("DESIGNS.TITLE_20"),
      description: t("DESIGNS.DESCRIPTION_20"),
      imageUrl: design18,
    },
  ];
  return (
    <>
      <div className="designs-section">
        <div className="container mx-auto px-4  py-4">
          <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Our Designs</h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center">Explore our latest and greatest designs.</p>
          <div className="designs-container flex flex-wrap gap-8 justify-center">
            {designsData.map((design, index) => (
              <DesignCard key={index} Designdata={design} index={index}></DesignCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignsContainer;
