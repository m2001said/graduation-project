import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAll } from "../../../features/templateData/templateSlice";
import UploadWidget from "../cloudinary/UploadWidget";
import SharedArr from "./subControllers/SharedArr";
import Shared from "./subControllers/Shared";
import SharedObj from "./subControllers/SharedObj";
const AllControllers = ({ controllerSection }) => {
  const targetSection = useSelector((state) => state.template[controllerSection]);
  const fields = Object.keys(targetSection);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  function handleOnUpload(error, result, widget, target) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(updateAll({ section: controllerSection, variable: target, value: result?.info?.secure_url }));
  }
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
                  return <Shared cardIndex={index} sectionName={controllerSection} blockName={field} subName={subName} dispatchRef={updateAll} key={index} />;
                });
              } else if (typeof targetSection[field][0] === "undefined") {
                return <SharedObj sectionName={controllerSection} blockName={field} subName={subName} dispatchRef={updateAll} key={field} />;
              } else return <SharedArr sectionName={controllerSection} blockName={field} subName={subName} dispatchRef={updateAll} key={field} />;
            }
            return (
              <div className="controller-field" key={field}>
                <label className=" controller-label">{field}</label>
                {field === "imgUrl" || field === "icon" ? (
                  <div className="input-controller flex flex-between">
                    {field === "imgUrl" ? (
                      <>
                        <img src={targetSection[field]} alt="img" width={50} height={50} />
                        <UploadWidget onUpload={(error, result, widget) => handleOnUpload(error, result, widget, "imgUrl")}>
                          {({ open }) => {
                            function handleOnClick(e) {
                              e.preventDefault();
                              open();
                            }
                            return (
                              <button className="border p-2 border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                                Change Image
                              </button>
                            );
                          }}
                        </UploadWidget>
                      </>
                    ) : (
                      <>
                        <img src={targetSection[field]} alt="img" width={14} height={14} />
                        <UploadWidget onUpload={(error, result, widget) => handleOnUpload(error, result, widget, "icon")}>
                          {({ open }) => {
                            function handleOnClick(e) {
                              e.preventDefault();
                              open();
                            }
                            return (
                              <button className="border p-2 border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                                Change Icon
                              </button>
                            );
                          }}
                        </UploadWidget>
                      </>
                    )}
                  </div>
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
