import React from "react";
import UploadWidget from "../../cloudinary/UploadWidget";
import { useDispatch, useSelector } from "react-redux";

const SubShared = ({ cardIndex, sectionName, blockName, subBlockName, subIndex, dispatchRef }) => {
  const targetSection = useSelector((state) => state.template[sectionName]);
  const subName = subBlockName.slice(0, subBlockName.length - 1);
  const dispatch = useDispatch();
  function handleOnUpload(error, result, widget, target) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(
      dispatchRef({
        section: sectionName,
        variable: target,
        value: result?.info?.secure_url,
        i: cardIndex,
        blockName: blockName,

        subBlockName: subBlockName,
        subIndex: subIndex,
      })
    );
  }
  const fields = Object.keys(targetSection[blockName][cardIndex][subBlockName][subIndex]);
  return (
    <div className="controller-field my-1">
      <label className=" controller-label">
        {subName}
        {subIndex + 1}
      </label>
      {fields.map((field) => {
        return (
          <div className="subController" key={field}>
            <label className="text-[16px]  capitalize">{field}</label>
            {field === "imgUrl" || field === "icon" ? (
              <div className="input-controller flex flex-between flex-row ">
                {field === "imgUrl" ? (
                  <>
                    <img src={targetSection[blockName][cardIndex][subBlockName][subIndex][field]} alt="img" width={50} height={50} />
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
                    <img src={targetSection[blockName][cardIndex][subBlockName][subIndex][field]} alt="img" width={14} height={14} />
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
  );
};
export default SubShared;
