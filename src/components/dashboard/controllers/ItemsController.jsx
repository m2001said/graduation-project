import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItems } from "../../../features/templateData/templateSlice";
import UploadWidget from "../cloudinary/UploadWidget";
import Shared from "./subControllers/Shared";

const ItemsController = () => {
  const { items } = useSelector((state) => state.template);
  const fields = Object.keys(items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function handleOnUpload(error, result, widget) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(updateItems({ variable: "imgUrl", value: result?.info?.secure_url }));
  }
  return (
    <div className="controller">
      <div className="flex-between" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">articles section</h3>
        {open ? (
          <img src="/assets/icons/up.svg" width={18} alt="down" style={{ cursor: "pointer" }} />
        ) : (
          <img src="/assets/icons/down.svg" width={18} alt="down" style={{ cursor: "pointer" }} />
        )}
      </div>
      {open && (
        <>
          {fields.map((field) => {
            console.log(field)
            console.log(items[field])
            if (field === "cards") {
              return items.cards.map((_, index) => {
                return <Shared cardIndex={index} sectionName="items" blockName="cards"  dispatchRef={updateItems} key={index} />;
              });
            }
            return (
              <div className="controller-field" key={field}>
                <label className=" controller-label">{field}</label>
                {field === "imgUrl" ? (
                  <div className="input-controller flex flex-between">
                    <img src={items[field]} alt="img" width={50} height={50} />
                    <UploadWidget onUpload={handleOnUpload}>
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
                  </div>
                ) : (
                  <textarea
                    className="input-controller"
                    wrap="hard"
                    value={items[field]}
                    onChange={(e) => dispatch(updateItems({ variable: field, value: e.target.value }))}
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

export default ItemsController;
