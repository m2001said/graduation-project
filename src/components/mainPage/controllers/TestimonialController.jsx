import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTestimonialSection } from "../../../features/templateData/templateSlice";
import UploadWidget from "../cloudinary/UploadWidget";
const TestimonialController = () => {
  const { testimonialSection } = useSelector((state) => state.template);
  const fields = Object.keys(testimonialSection);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function handleOnUpload(error, result, widget) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(updateTestimonialSection({ variable: "imgUrl", value: result?.info?.secure_url }));
  }

  return (
    <div className="controller">
      <div className="flex-between" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">testimonial section</h3>
        {open ? (
          <img src="/assets/icons/up.svg" width={18} alt="down" style={{ cursor: "pointer" }} />
        ) : (
          <img src="/assets/icons/down.svg" width={18} alt="down" style={{ cursor: "pointer" }} />
        )}
      </div>
      {open && (
        <>
          {fields.map((field) => {
            return (
              <div className="controller-field" key={field}>
                <label className=" controller-label">{field}</label>
                {field === "imgUrl" ? (
                  <div className="input-controller flex flex-between">
                    <img src={testimonialSection[field]} alt="img" width={50} height={50} />
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
                    value={testimonialSection[field]}
                    onChange={(e) => dispatch(updateTestimonialSection({ variable: field, value: e.target.value }))}
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

export default TestimonialController;
