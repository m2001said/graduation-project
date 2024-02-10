import { useSelector } from "react-redux";

const ResumeData11 = () => {
  const resume11 = useSelector((state) => state.template11.resume11);

  return resume11;
};

export default ResumeData11;
