import React from "react";
import { useDispatch, useSelector } from "react-redux";
const SharedArr = ({ sectionName, subName, blockName, dispatchRef }) => {
  const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  const fields = targetSection[blockName];
  return (
    <div className="controller-field">
      <label className=" controller-label">{blockName}</label>
      {fields.map((field, index) => {
        return (
          <div className="subController " key={index}>
            <label className="text-[16px]  capitalize">
              {subName}
              {index + 1}
            </label>
            <textarea
              className="input-controller"
              style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
              wrap="hard"
              value={field}
              onChange={(e) => dispatch(dispatchRef({ section: sectionName, variable: null, value: e.target.value, i: index, blockName: blockName }))}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SharedArr;
