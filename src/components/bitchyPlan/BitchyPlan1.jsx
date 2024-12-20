import Header from "./Header";
import LeaveBg from "../../assets/leave_bg.png";
import Grass from "../../assets/grass.png";
import TopBox from "./TopBox";
import MiddleBox from "./MiddleBox";
import PinkBox from "./PinkBox";
const BitchyPlan1 = () => {
  return (
    <>
      <section className="bg-[#4BB149] w-full relative h-fit">
        {/* background Leave image */}
        <div
          className=" absolute max-sm:w-full md:w-[50%] h-full "
          style={{
            backgroundImage: `url(${LeaveBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: "0",
          }}
        ></div>
        <div>
          <Header /> {/* Header Component */}
        </div>


        <div className="w-full flex flex-col gap-0">
        <div className="md:hidden">
          <img src={Grass} alt="" />
        </div>
          <TopBox />
          <MiddleBox />
          <div className="w-full md:px-32 lg:px-36 xl:px-80">
            <PinkBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default BitchyPlan1;
