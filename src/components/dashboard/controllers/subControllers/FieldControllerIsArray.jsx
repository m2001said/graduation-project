import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeImageController from "../ChangeImageController";
const FieldControllerIsArray = ({ targetSection, sectionName, subName, blockName, dispatchRef }) => {
  // const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  const fields = targetSection[blockName];
  const pattern = /\.(jpg|gif|png|svg)$/i;
  // const dispatchedRefForImg = (target, result) =>
  // dispatchRef({ section: sectionName, variable: null, value: result?.info?.secure_url, i: index, blockName: blockName });
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
            {pattern.test(field) ? (
              <ChangeImageController
                field={field}
                src={field}
                dispatchRef={(target, result) =>
                  dispatchRef({ section: sectionName, variable: null, value: result?.info?.secure_url, i: index, blockName: blockName, objKey: target })
                }
              />
            ) : (
              <textarea
                className="input-controller"
                style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                wrap="hard"
                value={field}
                onChange={(e) => dispatch(dispatchRef({ section: sectionName, variable: null, value: e.target.value, i: index, blockName: blockName }))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FieldControllerIsArray;
