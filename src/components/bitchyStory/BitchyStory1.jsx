import Bottom from "../../assets/bottom.png";
import BitchyBg from "../../assets/bitchy_background.png";
import { BlueBox } from "./BlueBox";
import { YellowBox } from "./YellowBox";
const BitchyStory1 = () => {
  return (
    <>
      <section className="w-full flex flex-col bg-[#39C6CB]">
        <div className="w-full h-fit">
          <img src={Bottom} alt="" className="object-cover" />
        </div>
        <div
          className="font-primaryRegular w-full flex flex-row justify-center items-center py-5 text-3xl text-center text-[#EBE235]"
          style={{
            textShadow: "4px 4px 18px rgba(255, 255, 255, 0.6)", // White glow
            WebkitTextStroke: "1px #F39734", // White outline outside text
          }}
        >
          THE BITCHY STORY
        </div>
        <div
          className={` bg-center bg-no-repeat w-full`}
          style={{
            backgroundImage: `url(${BitchyBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex flex-row ">
              <div className="md:w-2/5">
              <BlueBox />
              </div>
            {/* <div className="w-2/4">
              <YellowBox />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BitchyStory1;
