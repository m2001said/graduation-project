import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeImageController from "../ChangeImageController";

const SubFieldControllerIsObject = ({ targetSection, sectionName, cardIndex, blockName, subBlockName, dispatchRef, showSection }) => {
  const dispatch = useDispatch();
  const fields = Object.keys(targetSection[blockName][cardIndex][subBlockName]);
  const pattern = /\.(jpg|gif|png|svg)$/i;

  const dispatchedRefForImg = (target, result) =>
    dispatchRef({ section: sectionName, i: cardIndex, variable: target, value: result?.info?.secure_url, blockName: blockName, subBlockName: subBlockName });
  return showSection ? (
    <div className="controller-field my-1">
      <label className=" controller-label">{subBlockName}</label>
      {fields.map((field, index) => {
        if (field === "id" || field === "_id") {
          return null;
        }
        return (
          <div className="subController " key={index}>
            <label className="text-[16px]  capitalize">{field}</label>
            {pattern.test(targetSection[blockName][cardIndex][subBlockName][field]) ? (
              <ChangeImageController field={field} src={targetSection[blockName][cardIndex][subBlockName][field]} dispatchRef={dispatchedRefForImg} />
            ) : (
              <textarea
                className="input-controller"
                style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                wrap="hard"
                value={targetSection[blockName][cardIndex][subBlockName][field]}
                onChange={(e) =>
                  dispatch(
                    dispatchRef({
                      section: sectionName,
                      i: cardIndex,
                      variable: field,
                      value: e.target.value,
                      blockName: blockName,
                      subBlockName: subBlockName,
                    })
                  )
                }
              />
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default SubFieldControllerIsObject;
