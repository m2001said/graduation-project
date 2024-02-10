import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubFieldControllerIsArrayOfObjects from "./SubFieldControllerIsArrayOfObjects";
import SubFieldControllerIsArray from "./SubFieldControllerIsArray";
import ChangeImageController from "../ChangeImageController";
import SubFieldControllerIsObject from "./SubFieldControllerIsObject";

const FieldControllerIsArrayOfObjects = ({ targetSection, cardIndex, sectionName, subName, blockName, dispatchRef }) => {
  // const targetSection = useSelector((state) => state.template6[sectionName]);
  const dispatch = useDispatch();
  const dispatchedRefForImg = (target, result) =>
    dispatchRef({ section: sectionName, variable: target, value: result?.info?.secure_url, i: cardIndex, blockName: blockName });

  const fields = Object.keys(targetSection[blockName][cardIndex]);
  const pattern = /\.(jpg|gif|png|svg)$/i;

  return (
    <div className="controller-field">
      <label className=" controller-label">
        {subName}
        {cardIndex + 1}
      </label>
      {fields.map((field) => {
        if (typeof targetSection[blockName][cardIndex][field] === "object") {
          if (typeof targetSection[blockName][cardIndex][field][0] === "object") {
            return targetSection[blockName][cardIndex][field].map((_, _index) => {
              return (
                <SubFieldControllerIsArrayOfObjects
                  targetSection={targetSection}
                  cardIndex={cardIndex}
                  sectionName={sectionName}
                  blockName={blockName}
                  subBlockName={field}
                  subIndex={_index}
                  dispatchRef={dispatchRef}
                  key={_index}
                />
              );
            });
          } else if (typeof targetSection[blockName][cardIndex][field][0] === "undefined")
            return (
              <SubFieldControllerIsObject
                targetSection={targetSection}
                cardIndex={cardIndex}
                sectionName={sectionName}
                blockName={blockName}
                subBlockName={field}
                dispatchRef={dispatchRef}
                key={field}
              />
            );
          else
            return (
              <SubFieldControllerIsArray
                targetSection={targetSection}
                cardIndex={cardIndex}
                sectionName={sectionName}
                blockName={blockName}
                subName={subName}
                subBlockName={field}
                dispatchRef={dispatchRef}
                key={field}
              />
            );
        }
        if (field === "id") {
          return null;
        }
        return (
          <div className="subController" key={field}>
            <label className="text-[16px]  capitalize">{field}</label>
            {pattern.test(targetSection[blockName][cardIndex][field]) ? (
              <ChangeImageController field={field} src={targetSection[blockName][cardIndex][field]} dispatchRef={dispatchedRefForImg} />
            ) : (
              <textarea
                className="input-controller"
                style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                wrap="hard"
                value={targetSection[blockName][cardIndex][field]}
                onChange={(e) => dispatch(dispatchRef({ section: sectionName, variable: field, value: e.target.value, i: cardIndex, blockName: blockName }))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FieldControllerIsArrayOfObjects;
