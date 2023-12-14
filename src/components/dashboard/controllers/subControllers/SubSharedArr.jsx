import React from "react";
import { useDispatch, useSelector } from "react-redux";
const SubSharedArr = ({ cardIndex, sectionName, blockName, subBlockName, dispatchRef }) => {
  const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  const fields = targetSection[blockName][cardIndex][subBlockName];
  return (
    <div className="controller-field my-1">
      <label className=" controller-label">{subBlockName}</label>
      {fields.map((field, index) => {
        return (
          <div className="subController " key={index}>
            <label className="text-[16px]  capitalize">
              {subBlockName.slice(0, subBlockName.length - 1)}
              {index + 1}
            </label>
            <textarea
              className="input-controller"
              style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
              wrap="hard"
              value={field}
              onChange={(e) =>
                dispatch(
                  dispatchRef({
                    section: sectionName,
                    variable: null,
                    value: e.target.value,
                    i: cardIndex,
                    blockName: blockName,
                    subBlockName: subBlockName,
                    subIndex: index,
                  })
                )
              }
            />
          </div>
        );
      })}
    </div>
  );
};
export default SubSharedArr;
