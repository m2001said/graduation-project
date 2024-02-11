import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeImageController from "../ChangeImageController";
const SubFieldControllerIsArray = ({ targetSection, cardIndex, sectionName, blockName, subBlockName, dispatchRef }) => {
  // const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  const pattern = /\.(jpg|gif|png|svg)$/i;

  const fields = targetSection[blockName][cardIndex][subBlockName];
  console.log(fields);
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
            {pattern.test(field) ? (
              <ChangeImageController
                field={field}
                src={field}
                dispatchRef={(target, result) =>
                  dispatchRef({
                    section: sectionName,
                    variable: null,
                    value: result?.info?.secure_url,
                    i: cardIndex,
                    blockName: blockName,
                    subBlockName: subBlockName,
                    subIndex: index,
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
            )}
          </div>
        );
      })}
    </div>
  );
};
export default SubFieldControllerIsArray;
