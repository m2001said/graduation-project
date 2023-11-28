import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSectionTitle, updateSectionSubTitle, updateSectionDescription, updateSectionImgUrl } from "../../../features/heroData/heroSlice";
import { FaCaretDown } from "react-icons/fa";
import UploadWidget from "../cloudinary/UploadWidget";
import { IoCheckmarkDone } from "react-icons/io5";

const HeroController = () => {
  const heroData = useSelector((state) => state.heroData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function handleOnUpload(error, result, widget) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(updateSectionImgUrl(result?.info?.secure_url));
  }

  return (
    <div className="controller">
      <div className="flex-between" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">{heroData.sectionName}</h3>
        <FaCaretDown fontSize={23} cursor={"pointer"} />
      </div>
      {open && (
        <>
          <div className="controller-field">
            <label className=" controller-label">title</label>
            <input type="text" className="input-controller" value={heroData.sectionTitle} onChange={(e) => dispatch(updateSectionTitle(e.target.value))} />
          </div>
          <div className="controller-field">
            <label className=" controller-label">sub title</label>
            <input
              type="text"
              className="input-controller"
              value={heroData.sectionSubTitle}
              onChange={(e) => dispatch(updateSectionSubTitle(e.target.value))}
            />
          </div>
          <div className="controller-field">
            <label className=" controller-label">description</label>
            <input
              type="text"
              className="input-controller"
              value={heroData.sectionDescription}
              onChange={(e) => dispatch(updateSectionDescription(e.target.value))}
            />
          </div>
          <div className="controller-field">
            <label className=" controller-label">Background Image</label>
            <div className="input-controller flex flex-between">
              <img src={heroData.sectionImgUrl} alt="img" width={50} height={50} />
              <UploadWidget onUpload={handleOnUpload}>
                {({ open }) => {
                  function handleOnClick(e) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <button className="border p-2 border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                      Change Image
                    </button>
                  );
                }}
              </UploadWidget>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroController;
