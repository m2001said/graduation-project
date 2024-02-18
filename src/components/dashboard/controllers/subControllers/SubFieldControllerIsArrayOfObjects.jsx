import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeImageController from "../ChangeImageController";

const SubFieldControllerIsArrayOfObjects = ({ targetSection, cardIndex, sectionName, blockName, subBlockName, subIndex, dispatchRef ,showSection }) => {
  // const targetSection = useSelector((state) => state.template[sectionName]);
  const subName = subBlockName.slice(0, subBlockName.length - 1);
  const dispatch = useDispatch();
  const dispatchedRefForImg = (target, result) =>
    dispatchRef({
      section: sectionName,
      variable: target,
      value: result?.info?.secure_url,
      i: cardIndex,
      blockName: blockName,
      subBlockName: subBlockName,
      subIndex: subIndex,
    });

  const fields = Object.keys(targetSection[blockName][cardIndex][subBlockName][subIndex]);
  const pattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i;
  return showSection? (
    <div className="controller-field my-1">
      <label className=" controller-label">
        {subName}
        {subIndex + 1}
      </label>
      {fields.map((field) => {
        if (field === "id") {
          return null;
        }
        return (
          <div className="subController" key={field}>
            <label className="text-[16px]  capitalize">{field}</label>
            {/* {field === "imgUrl" || field === "icon" ? ( */}
            {pattern.test(targetSection[blockName][cardIndex][subBlockName][subIndex][field]) ? (
              <ChangeImageController field={field} src={targetSection[blockName][cardIndex][subBlockName][subIndex][field]} dispatchRef={dispatchedRefForImg} />
            ) : (
              <textarea
                className="input-controller"
                style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                wrap="hard"
                value={targetSection[blockName][cardIndex][subBlockName][subIndex][field]}
                onChange={(e) =>
                  dispatch(
                    dispatchRef({
                      section: sectionName,
                      variable: field,
                      value: e.target.value,
                      i: cardIndex,
                      blockName: blockName,
                      subBlockName: subBlockName,
                      subIndex: subIndex,
                    })
                  )
                }
              />
            )}
          </div>
        );
      })}
    </div>
  ):<></>;
};
export default SubFieldControllerIsArrayOfObjects;
