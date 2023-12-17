import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAll } from "../../../features/templateData/templateSlice";
import FieldControllerIsArray from "./subControllers/FieldControllerIsArray";
import FieldControllerIsArrayOfObjects from "./subControllers/FieldControllerIsArrayOfObjects";
import FieldControllerIsObject from "./subControllers/FieldControllerIsObject";
import ChangeImageController from "./ChangeImageController";
const AllControllers = ({ controllerSection }) => {
  const targetSection = useSelector((state) => state.template[controllerSection]);
  const fields = Object.keys(targetSection);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const dispatchedRefForImg = (target, result) => updateAll({ section: controllerSection, variable: target, value: result?.info?.secure_url });

  return (
    <div className="controller">
      <div className="flex-between cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">{controllerSection} section</h3>
        {open ? <img src="/assets/icons/down.svg" width={18} alt="down" /> : <img src="/assets/icons/up.svg" width={18} alt="down" />}
      </div>
      {open && (
        <>
          {fields.map((field) => {
            const subName = field.slice(0, field.length - 1);
            if (typeof targetSection[field] === "object") {
              if (typeof targetSection[field][0] === "object") {
                return targetSection[field].map((_, index) => {
                  return <FieldControllerIsArrayOfObjects cardIndex={index} sectionName={controllerSection} blockName={field} subName={subName} dispatchRef={updateAll} key={index} />;
                });
              } else if (typeof targetSection[field][0] === "undefined") {
                return <FieldControllerIsObject sectionName={controllerSection} blockName={field} subName={subName} dispatchRef={updateAll} key={field} />;
              } else return <FieldControllerIsArray sectionName={controllerSection} blockName={field} subName={subName} dispatchRef={updateAll} key={field} />;
            }
            return (
              <div className="controller-field" key={field}>
                <label className=" controller-label">{field}</label>
                {field === "imgUrl" || field === "icon" ? (
                  <ChangeImageController field={field} src={targetSection[field]} dispatchRef={dispatchedRefForImg} />
                ) : (
                  <textarea
                    className="input-controller"
                    wrap="hard"
                    value={targetSection[field]}
                    onChange={(e) => dispatch(updateAll({ section: controllerSection, variable: field, value: e.target.value }))}
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
