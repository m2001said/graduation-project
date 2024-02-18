import React from "react";

export const Reorder = ({ isLastFiled, isFirstFiled, handleReorder, deleteItem, componentType }) => {
  const isMainComp = componentType === "main";
  return (
    <div className={`flex-center px-2  ${isMainComp ? " gap-1" : "gap-2 py-1"} border rounded-xl `} style={{ paddingTop: `${isMainComp ? "1px" : ""}`,paddingBottom: `${isMainComp ? "1px" : ""}`, marginTop:0 }}>
      <div className={`${isMainComp ? "0" : "0"}`}>
        <img
          src="/assets/icons/arrow-small-up.svg"
          alt="delete"
          style={{ width: `${isMainComp ? "28px" : "20px"}`, cursor: `${isFirstFiled ? "auto" : "pointer"}`, opacity: `${isFirstFiled ? "0.3" : "1"}` }}
          onClick={() => handleReorder("up")}
        />
      </div>
      <div style={{ marginTop: "0px" }}>
        <img src="/assets/icons/trash.svg" alt="delete" style={{  width: `${isMainComp ? "25px" : "18px"}`, cursor: "pointer" }} onClick={deleteItem} />
      </div>
      <div >
        <img
          src="/assets/icons/arrow-small-up.svg"
          alt="delete"
          style={{
            width: `${isMainComp ? "28px" : "20px"}`,
            cursor: `${isLastFiled ? "auto" : "pointer"}`,
            opacity: `${isLastFiled ? "0.3" : "1"}`,
            transform: "rotate(180deg)",
          }}
          onClick={() => handleReorder("down")}
        />
      </div>
    </div>
  );
};
