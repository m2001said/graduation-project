import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeImageController from "../ChangeImageController";
import { Reorder } from "../shared/Reorder";

const SubFieldControllerIsArrayOfObjects = ({
  targetSection,
  cardIndex,
  sectionName,
  blockName,
  subBlockName,
  subIndex,
  dispatchRef,
  showSection,
  numOfFields,
}) => {
  // const targetSection = useSelector((state) => state.template[sectionName]);
  const [open, setOpen] = useState(false);
  const handleShowSection = () => {
    setOpen(!open);
  };
  const subName = subBlockName.slice(0, subBlockName.length - 1);
  const dispatch = useDispatch();
  const dispatchedRefForImg = (target, result) =>
    dispatchRef.updateTemplate({
      section: sectionName,
      variable: target,
      value: result?.info?.secure_url,
      i: cardIndex,
      blockName: blockName,
      subBlockName: subBlockName,
      subIndex: subIndex,
    });

  const fields = Object.keys(targetSection[blockName][cardIndex][subBlockName][subIndex]);
  const pattern = /\.(png|jpg|jpeg|gif|webp|svg)$/i;

  const isLastFiled = subIndex === numOfFields - 1;
  const isFirstFiled = subIndex === 0;
  const handleReorder = (type) => {
    if ((isLastFiled && type === "down") | (isFirstFiled && type === "up")) {
      return;
    } else
      dispatch(dispatchRef.reorder({ section: sectionName, i: cardIndex, blockName: blockName, type: type, subBlockName: subBlockName, subIndex: subIndex }));
  };

  const deleteItem = () => {
    dispatch(dispatchRef.deleteElement({ section: sectionName, i: cardIndex, blockName: blockName, subBlockName: subBlockName, subIndex: subIndex }));
  };

  return showSection ? (
    !open ? (
      <div className="flex justify-between items-center gap-1 m-1">
        <div className={`flex-grow ${open ? "controller-field" : "controller-field_without-padding"}`}>
          <label className={`cursor-pointer flex-between ${open ? "controller-label " : "controller-label_without-border"}`} onClick={handleShowSection}>
            {subName}
            {subIndex + 1}
            {open ? <img src="/assets/icons/down.svg" width={14} alt="down" /> : <img src="/assets/icons/up.svg" width={14} alt="down" />}
          </label>
        </div>
        {open | (numOfFields === 1) ? null : (
          <Reorder isFirstFiled={isFirstFiled} isLastFiled={isLastFiled} deleteItem={deleteItem} handleReorder={handleReorder} componentType={"branch"} />
        )}
      </div>
    ) : (
      <div className="flex justify-between items-start gap-1 m-1">
        <div className={`flex-grow ${open ? "controller-field" : "controller-field_without-padding"}`}>
          <label className={`cursor-pointer flex-between ${open ? "controller-label " : "controller-label_without-border"}`} onClick={handleShowSection}>
            {subName}
            {subIndex + 1}
            {open ? <img src="/assets/icons/down.svg" width={14} alt="down" /> : <img src="/assets/icons/up.svg" width={14} alt="down" />}
          </label>
          {fields.map((field) => {
            if (field === "id" || field === "_id") {
              return null;
            }
            return (
              <div className="subController" key={field}>
                <label className="text-[16px]  capitalize">{field}</label>
                {/* {field === "imgUrl" || field === "icon" ? ( */}
                {pattern.test(targetSection[blockName][cardIndex][subBlockName][subIndex][field]) ? (
                  <ChangeImageController
                    field={field}
                    src={targetSection[blockName][cardIndex][subBlockName][subIndex][field]}
                    dispatchRef={dispatchedRefForImg}
                  />
                ) : (
                  <textarea
                    className="input-controller"
                    style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                    wrap="hard"
                    value={targetSection[blockName][cardIndex][subBlockName][subIndex][field]}
                    onChange={(e) =>
                      dispatch(
                        dispatchRef.updateTemplate({
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
      </div>
    )
  ) : (
    <></>
  );
};
export default SubFieldControllerIsArrayOfObjects;
