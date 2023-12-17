import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeImageController from "../ChangeImageController";
const FieldControllerIsObject = ({ sectionName, blockName, dispatchRef }) => {
  const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  const fields = Object.keys(targetSection[blockName]);

  const dispatchedRefForImg = (target, result) =>
    dispatchRef({ section: sectionName, variable: null, value: result?.info?.secure_url, blockName: blockName, objKey: target });
  return (
    <div className="controller-field">
      <label className=" controller-label">{blockName}</label>
      {fields.map((field, index) => {
        return (
          <div className="subController " key={index}>
            <label className="text-[16px]  capitalize">{field}</label>
            {field === "imgUrl" || field === "icon" ? (
              <ChangeImageController field={field} src={targetSection[blockName][field]} dispatchRef={dispatchedRefForImg} />
            ) : (
              <textarea
                className="input-controller"
                style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                wrap="hard"
                value={targetSection[blockName][field]}
                onChange={(e) => dispatch(dispatchRef({ section: sectionName, variable: null, value: e.target.value, blockName: blockName, objKey: field }))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FieldControllerIsObject;
