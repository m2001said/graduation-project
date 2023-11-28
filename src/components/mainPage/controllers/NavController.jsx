import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSectionName, updateSectionTitle, updateSectionSubTitle, updateSectionDescription } from "../../../features/heroData/heroSlice";
import { FaCaretDown } from "react-icons/fa";

const NavController = () => {
  const heroData = useSelector((state) => state.heroData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

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
        </>
      )}
    </div>
  );
};

export default NavController;
