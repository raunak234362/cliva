import GreenBox from "./GreenBox";
import Earth from "../../assets/earth.png";
import RightFlower from "../../assets/flower_right.png";
const TopBox = () => {
  return (
    <div className="relative">
      <div className="flex flex-row max-sm:flex-col items-center">
        <div className="w-full">
          <GreenBox />
          <div className="w-full flex justify-end ">
            <img src={RightFlower} alt="" className="max-sm:hidden absolute top-20 left-[33%] w-96"/>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={Earth}
            alt=""
            className="max-sm:w-10/12
             w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBox;
