import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SubFieldControllerIsArrayOfObjects from "./SubFieldControllerIsArrayOfObjects";
import SubFieldControllerIsArray from "./SubFieldControllerIsArray";
import ChangeImageController from "../ChangeImageController";
import SubFieldControllerIsObject from "./SubFieldControllerIsObject";
import { Reorder } from "../shared/Reorder";
const FieldControllerIsArrayOfObjects = ({ targetSection, cardIndex, sectionName, subName, blockName, dispatchRef, numOfFields }) => {
  const dispatch = useDispatch();
  const dispatchedRefForImg = (target, result) =>
    dispatchRef.updateTemplate({ section: sectionName, variable: target, value: result?.info?.secure_url, i: cardIndex, blockName: blockName });

  // add new card to section for example if i have 3 services and i need to add one else
  const addNewElement = (subBlockName) => {
    dispatch(dispatchRef.addNewSubElement({ section: sectionName, blockName: blockName, cardIndex: cardIndex, subBlockName: subBlockName }));
  };
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
    <div className="flex justify-between items-center gap-1 ">
      <div className={`flex-grow ${show ? "controller-field" : "controller-field_without-padding"}`}>
        <label className={`cursor-pointer flex-between ${show ? "controller-label " : "controller-label_without-border"}`} onClick={handleShowSection}>
          {subName}
          {cardIndex + 1}
          {show ? <img src="/assets/icons/down.svg" width={14} alt="down" /> : <img src="/assets/icons/up.svg" width={14} alt="down" />}
        </label>
        {show && (
          <>
            {fields.map((field) => {
              if (typeof targetSection[blockName][cardIndex][field] === "object") {
                if (typeof targetSection[blockName][cardIndex][field][0] === "object") {
                  const _t = [...targetSection[blockName][cardIndex][field]];
                  _t.push("add new");
                  return _t.map((ele, _index) => {
                    if (ele === "add new") {
                      return (
                        <div key={_index}>
                          <button className="controller-btn-add inner capitalize" onClick={() => addNewElement(field)}>
                            Add {field.slice(0, -1)}
                          </button>
                        </div>
                      );
                    }
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
                        showSection={show}
                        numOfFields={_t.length - 1}
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
                      dispatchRef={dispatchRef}
                      key={field}
                      showSection={show}
                      numOfFields={targetSection[blockName][cardIndex][field].length}
                    />
                  );
              }
              if (field === "id" || field === "_id") {
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
                        dispatch(
                          dispatchRef.updateTemplate({ section: sectionName, variable: field, value: e.target.value, i: cardIndex, blockName: blockName })
                        )
                      }
                    />
                  )}
                </div>
              ) : null;
            })}
          </>
        )}
      </div>
      {show ? null : (
        <Reorder isFirstFiled={isFirstFiled} isLastFiled={isLastFiled} deleteItem={deleteItem} handleReorder={handleReorder} componentType={"branch"} />
      )}
    </div>
  );
};
export default FieldControllerIsArrayOfObjects;
