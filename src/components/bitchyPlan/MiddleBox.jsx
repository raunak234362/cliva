import BlueBox from "./BlueBox";
import Branch from "../../assets/branch.png";

const MiddleBox = () => {
  return (
    <div className="relative">
      <div className="w-full flex flex-row max-sm:flex-col-reverse items-center">
        <div className="max-sm:w-full w-3/4 flex justify-start">
          <img
            src={Branch}
            alt=""
            className="object-cover max-sm:w-full w-3/4"
          />
        </div>
        <div className="w-full flex justify-end">
          <div className="max-sm:w-full  w-3/4">
            <BlueBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBox;
