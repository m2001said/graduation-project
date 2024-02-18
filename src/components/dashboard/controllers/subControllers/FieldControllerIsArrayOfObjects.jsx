import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubFieldControllerIsArrayOfObjects from "./SubFieldControllerIsArrayOfObjects";
import SubFieldControllerIsArray from "./SubFieldControllerIsArray";
import ChangeImageController from "../ChangeImageController";
import SubFieldControllerIsObject from "./SubFieldControllerIsObject";
import { Reorder } from "../shared/Reorder";
const FieldControllerIsArrayOfObjects = ({ targetSection, cardIndex, sectionName, subName, blockName, dispatchRef, numOfFields }) => {
  // const targetSection = useSelector((state) => state.template6[sectionName]);
  const dispatch = useDispatch();
  const dispatchedRefForImg = (target, result) =>
    dispatchRef.updateTemplate({ section: sectionName, variable: target, value: result?.info?.secure_url, i: cardIndex, blockName: blockName });

  const fields = Object.keys(targetSection[blockName][cardIndex]);
  const pattern = /\.(jpg|gif|png|svg)$/i;

  const [show, setShow] = useState(false);
  const handleShowSection = () => {
    setShow(!show);
  };
  const deleteItem = () => {
    dispatch(dispatchRef.deleteElement({ section: sectionName, i: cardIndex, blockName: blockName }));
  };
  const isLastFiled = cardIndex === numOfFields - 1;
  const isFirstFiled = cardIndex === 0;
  const handleReorder = (type) => {
    if ((isLastFiled && type === "down") | (isFirstFiled && type === "up")) {
      return;
    } else dispatch(dispatchRef.reorder({ section: sectionName, i: cardIndex, blockName: blockName, type: type }));
  };

  return (
    <div className="flex justify-between items-start gap-1">
      <div className={`flex-grow ${show ? "controller-field" : "controller-field_without-padding"}`}>
        <label className={`cursor-pointer flex-between ${show ? "controller-label " : "controller-label_without-border"}`} onClick={handleShowSection}>
          {subName}
          {cardIndex + 1}
          {show ? <img src="/assets/icons/down.svg" width={14} alt="down" /> : <img src="/assets/icons/up.svg" width={14} alt="down" />}
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
                    dispatchRef={dispatchRef.updateTemplate}
                    key={_index}
                    showSection={show}
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
                  dispatchRef={dispatchRef.updateTemplate}
                  key={field}
                  showSection={show}
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
                  dispatchRef={dispatchRef.updateTemplate}
                  key={field}
                  showSection={show}
                />
              );
          }
          if (field === "id") {
            return null;
          }
          return show ? (
            <div className="subController" key={field}>
              <label className="text-[16px]  capitalize">{field.replace("_", " ")}</label>
              {pattern.test(targetSection[blockName][cardIndex][field]) ? (
                <ChangeImageController field={field} src={targetSection[blockName][cardIndex][field]} dispatchRef={dispatchedRefForImg} />
              ) : (
                <textarea
                  className="input-controller"
                  style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                  wrap="hard"
                  value={targetSection[blockName][cardIndex][field]}
                  onChange={(e) =>
                    dispatch(dispatchRef.updateTemplate({ section: sectionName, variable: field, value: e.target.value, i: cardIndex, blockName: blockName }))
                  }
                />
              )}
            </div>
          ) : null;
        })}
      </div>
      <Reorder isFirstFiled={isFirstFiled} isLastFiled={isLastFiled} deleteItem={deleteItem} handleReorder={handleReorder} componentType={"branch"}/>
      {/* <div className="flex-center border rounded-xl" style={{ marginTop: "6px" }}>
        <div className="px-2 py-1 ">
          <img
            src="/assets/icons/arrow-small-up.svg"
            alt="delete"
            style={{ width: 20, cursor: `${cardIndex === 0 ? "auto" : "pointer"}`, opacity: `${cardIndex === 0 ? "0.3" : "1"}` }}
            onClick={() => handleReorder("up")}
          />
        </div>
        <div className="px-2 py-1 " style={{ marginTop: "0px" }}>
          <img src="/assets/icons/trash.svg" alt="delete" style={{ width: 16, cursor: "pointer" }} onClick={deleteItem} />
        </div>
        <div className="px-2 py-1 ">
          <img
            src="/assets/icons/arrow-small-up.svg"
            alt="delete"
            style={{
              width: 20,
              cursor: `${isLastFiled ? "auto" : "pointer"}`,
              opacity: `${isLastFiled ? "0.3" : "1"}`,
              transform: "rotate(180deg)",
            }}
            onClick={() => handleReorder("down")}
          />
        </div>
      </div> */}
    </div>
  );
};
export default FieldControllerIsArrayOfObjects;
