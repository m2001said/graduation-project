import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeImageController from "../ChangeImageController";
import { Reorder } from "../shared/Reorder";
const FieldControllerIsArray = ({ targetSection, sectionName, subName, blockName, dispatchRef, numOfFields }) => {
  // const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const fields = targetSection[blockName];
  const _targetSection = [...fields];
  _targetSection.push("add new element"); //3
  const handleShowSection = () => {
    setOpen(!open);
  };
  const pattern = /\.(jpg|gif|png|svg)$/i;
  // const dispatchedRefForImg = (target, result) =>
  // dispatchRef({ section: sectionName, variable: null, value: result?.info?.secure_url, i: index, blockName: blockName });

  // add new future to section for example if i have 3 services and i need to add one else
  const addNewElement = () => {
    dispatch(dispatchRef.addElementToArray({ section: sectionName, blockName: blockName }));
  };

  const deleteItem = (cardIndex) => {
    dispatch(dispatchRef.deleteElement({ section: sectionName, i: cardIndex, blockName: blockName }));
  };

  const handleReorder = (isFirstFiled, isLastFiled, cardIndex, type) => {
    if ((isLastFiled && type === "down") | (isFirstFiled && type === "up")) {
      return;
    } else dispatch(dispatchRef.reorder({ section: sectionName, i: cardIndex, blockName: blockName, type: type }));
  };

  return !open ? (
    <div className="flex justify-between items-start gap-1">
      <div className={`flex-grow ${open ? "controller-field" : "controller-field_without-padding"}`}>
        <label className={`cursor-pointer flex-between ${open ? "controller-label " : "controller-label_without-border"}`} onClick={handleShowSection}>
          {blockName}
          {open ? <img src="/assets/icons/down.svg" width={14} alt="down" /> : <img src="/assets/icons/up.svg" width={14} alt="down" />}
        </label>
      </div>
    </div>
  ) : (
    <div className="flex justify-between items-start gap-1">
      <div className={`flex-grow ${open ? "controller-field" : "controller-field_without-padding"}`}>
        <label className={`cursor-pointer flex-between ${open ? "controller-label " : "controller-label_without-border"}`} onClick={handleShowSection}>
          {blockName}
          {open ? <img src="/assets/icons/down.svg" width={14} alt="down" /> : <img src="/assets/icons/up.svg" width={14} alt="down" />}
        </label>

        {_targetSection.map((field, index) => {
          const isLast = index === numOfFields - 1;
          const isFirst = index === 0;
          if (field === "add new element") {
            return (
              <div key={index}>
                <button className="controller-btn-add capitalize" onClick={() => addNewElement()}>
                  Add {blockName.slice(0, blockName.length - 1)}
                </button>
              </div>
            );
          }
          return (
            <div className="subController " key={index}>
              <div className="flex justify-between items-center my-1">
                <label className="text-[16px]  capitalize">
                  {subName}
                  {index + 1}
                </label>
                {numOfFields === 1 ? null : (
                  <Reorder
                    isFirstFiled={isFirst}
                    isLastFiled={isLast}
                    deleteItem={() => deleteItem(index)}
                    handleReorder={(type) => handleReorder(isFirst, isLast, index, type)}
                    componentType={"branch"}
                  />
                )}
              </div>
              {pattern.test(field) ? (
                <ChangeImageController
                  field={field}
                  src={field}
                  dispatchRef={(target, result) =>
                    dispatchRef.updateTemplate({
                      section: sectionName,
                      variable: null,
                      value: result?.info?.secure_url,
                      i: index,
                      blockName: blockName,
                      objKey: target,
                    })
                  }
                />
              ) : (
                <textarea
                  className="input-controller"
                  style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                  wrap="hard"
                  value={field}
                  onChange={(e) =>
                    dispatch(dispatchRef.updateTemplate({ section: sectionName, variable: null, value: e.target.value, i: index, blockName: blockName }))
                  }
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FieldControllerIsArray;
