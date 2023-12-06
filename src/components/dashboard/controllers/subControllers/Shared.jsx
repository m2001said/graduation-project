import React, { useState } from "react";
import UploadWidget from "../../cloudinary/UploadWidget";
import { useDispatch, useSelector } from "react-redux";

const Shared = ({ cardIndex, sectionName, blockName, dispatchRef }) => {
  const [show, setShow] = useState(false);
  const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  function handleOnUpload(error, result, widget) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(dispatchRef({ variable: "imgUrl", value: result?.info?.secure_url, i: cardIndex }));
  }
  const fields = Object.keys(targetSection[blockName][cardIndex]);
  return (
    <div className="flex flex-col gap-4  py-4 pl-2 pr-1 border rounded-lg border-cyan-500">
      <div className="flex-between" onClick={() => setShow(!show)}>
        <h3 className="controller-name">card </h3>
        {show ? (
          <img src="/assets/icons/up.svg" width={18} alt="down" style={{ cursor: "pointer" }} />
        ) : (
          <img src="/assets/icons/down.svg" width={18} alt="down" style={{ cursor: "pointer" }} />
        )}
      </div>
      {show && (
        <>
          {fields.map((field) => {
            return (
              <div className="controller-field" key={field}>
                <label className=" controller-label">{field}</label>
                {field === "imgUrl" || field === "icon" ? (
                  <div className="input-controller flex flex-between">
                    {field === "imgUrl" ? (
                      <img src={targetSection[blockName][cardIndex][field]} alt="img" width={50} height={50} />
                    ) : (
                      <img src={targetSection[blockName][cardIndex][field]} alt="img" width={14} height={14} />
                    )}
                    <UploadWidget onUpload={handleOnUpload}>
                      {({ open }) => {
                        function handleOnClick(e) {
                          e.preventDefault();
                          open();
                        }
                        return (
                          <button className="border p-2 border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                            {field === "imgUrl" ? "Change Image" : "Change Icon"}
                          </button>
                        );
                      }}
                    </UploadWidget>
                  </div>
                ) : (
                  <textarea
                    className="input-controller"
                    wrap="hard"
                    value={targetSection[blockName][cardIndex][field]}
                    onChange={(e) => dispatch(dispatchRef({ variable: field, value: e.target.value, i: cardIndex }))}
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
export default Shared;
