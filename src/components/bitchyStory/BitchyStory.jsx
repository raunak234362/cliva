import Bottom from "../../assets/bottom.png";
import BitchyBg from "../../assets/bitchy_background.png";
import BlueShape from "../../assets/blueShape.png";
import YellowShape from "../../assets/yellowShape.png";
import RedShape from "../../assets/redShape.png";
import Logo from "../../assets/logo_wingo.png";
import BitchyInsect from "../../assets/bitchyInsect.png";
import Cliva from "../cliva/Cliva";
import BitchyBgMobile from "../../assets/bitchy_mobile.png";
import BlueShapeMd from "../../assets/blueShape_md.png";
import YellowShapeMd from "../../assets/yellowShape_md.png";
import RedShapeMd from "../../assets/redShape_md.png";
import BitchyGrass from "../../assets/bitchy_grass.png";

const BitchyStory = () => {
  return (
    <div className=" relative bg-[#39C6CB] text-sm">
      {/*website view */}
      <div>
        <img src={Bottom} alt="" />
      </div>

      <div
        className="text-[#EBE235] font-primaryRegular text-center md:text-2xl uppercase text-[1rem] font-bold mt-2 bg-[#39C6CB] p-5 pb-10"
        style={{
          textShadow: "4px 4px 18px rgba(255, 255, 255, 0.6)", // White glow
          WebkitTextStroke: "1px #F39734", // White outline outside text
        }}
      >
        THE BITCHY STORY
      </div>

      <div className="hidden md:block">
        <div className="bg-img">
          <img src={BitchyBg} alt="" />
        </div>
        <div className="absolute top-5 md:mt-20 md:ml-[70%] ">
          <img src={Logo} alt="" className=" w-[80%]" />
        </div>
        <div className="absolute z-50 bottom-0 left-0 md:mb-36 md:ml-24 lg:ml-48 lg:mb-48 xl:mb-72 2xl:mb-96 2xl:ml-72">
          <img
            src={BitchyInsect}
            alt=""
            className="w-[20%] md:w-[20%] lg:w-[15%] xl:w-[20%] 2xl:w-[30%] "
          />
          <div className="absolute bottom-0 left-0 z-50 md:mb-6 md:ml-28 lg:mb-5 2xl:mb-24 2xl:ml-44">
            <Cliva />
          </div>
        </div>

        <div>
          <img
            src={BlueShape}
            alt=""
            className=" w-[60%] absolute top-5 md:mt-32 lg:mt-44"
          />
          <div className=" absolute top-0 xl:top-0 left-3 md:left-5 font-secondRegular text-left md:mt-40 lg:mt-56 lg:mr-2 lg:leading-8">
            <div
              className=" font-primaryRegular w-full flex justify-start uppercase text-white"
              style={{ WebkitTextStroke: "1px #228EFD" }}
            >
              <div className=" md:text-[10px] lg:text-[13px] xl:text-[16px]">
                NEW ARENA IS AT THE FRONTIER
              </div>
            </div>

            <div className="text-white text-wrap w-full flex justify-start md:text-sm absolute lg:leading-6 right-2 lg:mt-5">
              <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-full md:text-[12px] lg:text-[14px] xl:text-[18px] leading-6 lg:leading-6 xl:leading-8">
                ...Until she flew deeper into the forest. Shattered by the view
                of disparity, exclusion, greed, and corruption. so on.
                Selfishness reigned, and flowers drooped from the weight of
                indifference. 
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src={YellowShape}
            alt=""
            className=" w-[70%] h-[40%] absolute top-0 xl:top-6 right-0 md:mt-44 lg:mt-56"
          />
          <div className=" absolute top-0 xl:top-5 right-3 md:right-5  font-secondRegular text-right md:mt-48 lg:mt-64 lg:mr-2 lg:leading-8">
            <div
              className=" font-primaryRegular w-full flex justify-end uppercase text-white"
              style={{ WebkitTextStroke: "1px #228EFD" }}
            >
              <div className="w-11/12 md:w-9/12 lg:w-9/12 xl:w-11/12 md:text-[13px] lg:text-[13px] xl:text-[16px]">
                NO LONGER SHE WILL BE A PASSIVE OBSERVER
              </div>
            </div>

            <div className="text-[#FF0A0A] text-wrap w-full flex justify-end md:text-sm absolute lg:leading-6 right-2 lg:mt-5">
              <div className="w-11/12 md:w-8/12 lg:w-10/12 xl:w-11/12 2xl:w-full md:text-[12px] lg:text-[14px] xl:text-[22px] lg:leading-6 xl:leading-8">
                Cliva has to become bitchy Cliva to guide the promised gains to
                the world from decentralisation tech. True change could come
                without a system, without a structure where all voices could be
                heard. So, Cliva set to work to build a network, a governance,
                one where the suffering, the poor, and the innocent would have a
                place. Where no one would be ignored. Where greed would be
                replaced by generosity where cruelty would give way to
                compassion
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center">
          <img
            src={RedShape}
            alt=""
            className=" w-[60%] absolute bottom-0 md:mb-6 "
          />
          <div className=" absolute bottom-0 lg:bottom-5 text-white  font-secondRegular text-center">
            <p
              className=" font-primaryRegular md:text-[12px]  uppercase xl:text-xl "
              style={{ WebkitTextStroke: "1px #228EFD" }}
            >
              NEW ARENA IS AT THE FRONTIER{" "}
            </p>
            <div className=" text-center pt-4  md:mb-12 lg:mb-14 lg:text-lg xl:mb-24 xl:text-2xl">
              <p>As she gazed over the land she had planned to </p>
              <p>Reshape, Cliva smiled.</p>
            </div>
          </div>
        </div>
      </div>

      {/*mobile view */}
      <div className="block md:hidden relative">
        <div>
          <img src={BitchyBgMobile} alt="" />
        </div>

        <div
          className=" absolute top-0 z-10"
          style={{ marginTop: "40%", marginLeft: "55%" }}
        >
          <img src={BitchyInsect} alt="" className=" max-sm:w-[80%]" />
        </div>

        <div className=" absolute top-0 ">
          <img src={BlueShapeMd} alt="" />
          <div className=" absolute top-4 text-white   font-secondRegular">
            <p
              className=" font-primaryRegular uppercase text-sm leading-6 ml-3"
              style={{ WebkitTextStroke: "1px #228EFD" }}
            >
              SHE WAS A DELICATE AND INNOCENT BUTTERFLY{" "}
            </p>
          </div>
          <div className=" absolute top-0 text-white font-secondRegular text-sm capitalize mt-20 ml-5">
            <div className="w-3/4 text-wrap">
              ...Until she flew deeper into the Forest. shattered by the view of
              Disparity, Exclusion, Greed, and Corruption. So on. Selfishness
              Reigned, and Flowers Drooped from the Weight of Indifference.
            </div>
          </div>
        </div>

        <div className=" absolute top-0 " style={{ marginTop: "70%" }}>
          <img src={YellowShapeMd} alt="" />
          <div
            className=" absolute top-0 right-0  font-secondRegular text-right text-sm"
            style={{ marginTop: "12%", marginRight: "4%" }}
          >
            <div
              className=" font-primaryRegular text-wrap text-[12px] w-full flex justify-end uppercase text-white"
              style={{ WebkitTextStroke: "1px #228EFD", lineHeight: "2" }}
            >
              <div className="w-3/4">
                NO longer SHE WILL BE A PASSIVE OBSERVER
              </div>
            </div>

            <div className="text-[#FF0A0A] max-sm:text-base w-full flex justify-end pt-4 capitalize leading-6">
              <div className=" ">
                Cliva has to become bitchy Cliva to guide the promised gains to
                the world from decentralisation tech. True change could come
                without a system, without a structure where all voices could be
                heard. So, Cliva set to work to build a network, a governance,
                one where the suffering, the poor, and the innocent would have a
                place. Where no one would be ignored. Where greed would be
                replaced by generosity where cruelty would give way to
                compassion
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={RedShapeMd} alt="" />
          <div
            className=" absolute bottom-0 text-white  font-secondRegular text-center"
            style={{ marginBottom: "100%" }}
          >
            <div
              className=" font-primaryRegular "
              style={{ WebkitTextStroke: "1px #228EFD", lineHeight: "2" }}
            >
              NEW ARENA IS AT THE FRONTIER{" "}
            </div>
            <div className=" text-center pt-4 ">
              As she gazed over the land she had planned to Reshape, Cliva
              smiled.
            </div>
          </div>
        </div>

        <div className="relative ">
          <img src={BitchyGrass} alt="" className=" h-[20%]" />
          <div className="absolute bottom-0 inset-0 flex items-center justify-center">
            <Cliva className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitchyStory;
