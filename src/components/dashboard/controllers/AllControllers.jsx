import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FieldControllerIsArray from "./subControllers/FieldControllerIsArray";
import FieldControllerIsArrayOfObjects from "./subControllers/FieldControllerIsArrayOfObjects";
import FieldControllerIsObject from "./subControllers/FieldControllerIsObject";
import ChangeImageController from "./ChangeImageController";
import { Reorder } from "./shared/Reorder";
const AllControllers = ({ controllerSection, targetTemplate, updateAll, sectionIndex, numOfSections }) => {
  // const targetSection = useSelector((state) => state.template6[controllerSection]);
  const targetSection = targetTemplate[controllerSection];

  const fields = Object.keys(targetSection);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const dispatchedRefForImg = (target, result) => updateAll.updateTemplate({ section: controllerSection, variable: target, value: result?.info?.secure_url });
  const pattern = /\.(jpg|gif|png|svg)$/i;

  // add new future to section for example if i have 3 services and i need to add one else
  const addNewElement = (blockName) => {
    dispatch(updateAll.addNewElement({ section: controllerSection, blockName: blockName }));
  };

  const isFirstSection = sectionIndex === 2;
  const isLastSection = numOfSections - 2 - sectionIndex === 0;
  const isPrevLastSection = numOfSections - 3 - sectionIndex === 0;

  const deleteSection = () => {
    dispatch(updateAll.deleteSection({ section: controllerSection }));
  };
  const handleReorder = (type) => {
    if ((isPrevLastSection && type === "down") | (isFirstSection && type === "up")) {
      return;
    } else dispatch(updateAll.reorderSection({ section: controllerSection, type: type }));
  };



  return (
    <div className="controller">
      {/* <div className="flex justify-between items-start gap-1">  */}
      <div className="flex-between cursor-pointer " >
        <h3 className="controller-name w-full" onClick={() => setOpen(!open)}>{controllerSection} section</h3>

        {(sectionIndex <= 1) | isLastSection ? (
          <></>
        ) : (
          <Reorder
            isFirstFiled={isFirstSection}
            isLastFiled={isPrevLastSection}
            deleteItem={deleteSection}
            handleReorder={handleReorder}
            componentType={"main"}
          />
        )}
        {open ? (
          <img src="/assets/icons/down.svg" style={{ width: 18, marginLeft: "6px" }} alt="down" onClick={() => setOpen(!open)}/>
        ) : (
          <img src="/assets/icons/up.svg" style={{ width: 18, marginLeft: "6px" }} alt="down" onClick={() => setOpen(!open)}/>
        )}
      </div>
      {open && (
        <>
          {fields.map((field) => {
            const subName = field.slice(0, field.length - 1);
            if (typeof targetSection[field] === "object") {
              if (typeof targetSection[field][0] === "object") {
                const _targetSection = [...targetSection[field]];
                _targetSection.push("add"); //3
                return _targetSection.map((ele, index) => {
                  return ele === "add" ? (
                    <div key={index}>
                      <button className="controller-btn-add" onClick={() => addNewElement(field)}>
                        Add
                      </button>
                    </div>
                  ) : (
                    <FieldControllerIsArrayOfObjects
                      cardIndex={index} // 1
                      numOfFields={_targetSection.length - 1} //2 numOfFields
                      sectionName={controllerSection}
                      targetSection={targetSection}
                      blockName={field}
                      subName={subName}
                      dispatchRef={updateAll}
                      key={index}
                    />
                  );
                });
              } else if (typeof targetSection[field][0] === "undefined") {
                return (
                  <FieldControllerIsObject
                    targetSection={targetSection}
                    sectionName={controllerSection}
                    blockName={field}
                    subName={subName}
                    dispatchRef={updateAll.updateTemplate}
                    key={field}
                  />
                );
              } else
                return (
                  <FieldControllerIsArray
                    targetSection={targetSection}
                    sectionName={controllerSection}
                    blockName={field}
                    subName={subName}
                    dispatchRef={updateAll.updateTemplate}
                    key={field}
                  />
                );
            }
            return (
              <div className="controller-field" key={field}>
                <label className=" controller-label">{field}</label>
                {/* {field === "imgUrl" || field === "icon" ? ( */}
                {pattern.test(targetSection[field]) ? (
                  <ChangeImageController field={field} src={targetSection[field]} dispatchRef={dispatchedRefForImg} />
                ) : (
                  <textarea
                    className="input-controller"
                    wrap="hard"
                    value={targetSection[field]}
                    onChange={(e) => dispatch(updateAll.updateTemplate({ section: controllerSection, variable: field, value: e.target.value }))}
                  />
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default AllControllers;
