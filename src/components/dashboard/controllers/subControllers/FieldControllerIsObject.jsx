import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeImageController from "../ChangeImageController";
const FieldControllerIsObject = ({ targetSection, sectionName, blockName, dispatchRef }) => {
  // const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  const fields = Object.keys(targetSection[blockName]);
  const pattern = /\.(jpg|gif|png|svg)$/i;
  const dispatchedRefForImg = (target, result) =>
  dispatchRef.updateTemplate({ section: sectionName, variable: null, value: result?.info?.secure_url, blockName: blockName, objKey: target });

  return (
    <div className="controller-field">
      <label className=" controller-label">{blockName}</label>
      {fields.map((field, index) => {
        if (field === "id") {
          return null;
        }

        return (
          <div className="subController " key={index}>
            <label className="text-[16px]  capitalize">{field}</label>
            {/* {field === "imgUrl" || field === "icon" ? ( */}
            {pattern.test(targetSection[blockName][field]) ? (
              <ChangeImageController field={field} src={targetSection[blockName][field]} dispatchRef={dispatchedRefForImg} />
            ) : (
              <textarea
                className="input-controller"
                style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                wrap="hard"
                value={targetSection[blockName][field]}
                onChange={(e) =>
                  dispatch(dispatchRef.updateTemplate({ section: sectionName, variable: null, value: e.target.value, blockName: blockName, objKey: field }))
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FieldControllerIsObject;
