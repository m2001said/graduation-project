import { useEffect, useRef } from "react";

let cloudinary;

const UploadWidget = ({ children, onUpload }) => {
  const widget = useRef();
  useEffect(() => {
    // Store the Cloudinary window instance to a ref when the page renders

    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }

    function onIdle() {
      if (!widget.current) {
        widget.current = createWidget();
      }
    }

    "requestIdleCallback" in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);

    return () => {
      widget.current?.destroy();
      widget.current = undefined;
    };
    // eslint-disable-next-line
  }, []);

  /**
   * createWidget
   * @description Creates a new instance of the Cloudinary widget and stores in a ref
   */

  function createWidget() {
    const cloudName = "duc04fwdb";
    const uploadPreset = "jammal_preset";

    if (!cloudName || !uploadPreset) {
      console.warn(`Kindly ensure you have the cloudName and UploadPreset 
      setup in your .env file at the root of your project.`);
    }
    const options = {
      cloudName, // Ex: mycloudname
      uploadPreset, // Ex: myuploadpreset
      maxFiles: 1,
      clientAllowedFormats: ["jpg", "png", "gif", "svg"], // Only allow these formats
      clientMaxFileSize: 10 * 1024 * 1024, // Optional: limit file size to 10MB
      resourceType: "auto", // Detect resource type automatically
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if ((error || result.event === "success") && typeof onUpload === "function") {
        onUpload(error, result, widget);
      }
    });
  }

  /**
   * open
   * @description When triggered, uses the current widget instance to open the upload modal
   */

  function open() {
    if (!widget.current) {
      widget.current = createWidget();
    }
    widget.current && widget.current.open();
  }

  return <>{children({ cloudinary, widget, open })}</>;
};

export default UploadWidget;
