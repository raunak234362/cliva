/* eslint-disable no-unused-vars */
import ButterflyImg from "../../../public/rb_21.png";
import Cloud from "../../../public/cloud1.png";
import Cloud2 from "../../../public/cloud2.png";
import block1 from "../../../public/group11.png";
import cloudBG from "../../../public/frame45.png";
import VoteCloud1 from "../../../public/votecloud1.png";
import VoteCloud2 from "../../../public/votecloud2.png";
import VoteCloud3 from "../../../public/votecloud3.png";
import VoteCloud4 from "../../../public/votecloud4.png";
import Cliva from "../cliva/Cliva";
import XImg from "../../../public/vector.png";
import Telegram from "../../../public/telegram-alt_svgrepo.com.png";

export default function Hero() {
  return (
    <div className="bg-[#5CBBFF] w-full">
      <div>
        <img
          src={ButterflyImg}
          alt="Butterfly"
          className="md:xl:hidden sm:md:block w-full z-0 opacity-70 absolute object-contain h-96 object-left-top"
        />
        <img
          src={Cloud2}
          alt="Cloud"
          className="block md:hidden w-full z-0 opacity-70 absolute object-contain h-96 object-left-top"
        />
        <div className="z-10 flex flex-col py-20 items-center justify-center">
          {/* Heading Text */}
          <div
            className="flex flex-col justify-center items-center text-center text-[10px] md:text-[12px] lg:text-[15px] xl:text-[20px] tracking-[2px] md:tracking-[8px] z-10 gap-5"
            style={{
              color: "#228EFD",
              borderRadius: "10px",
              textShadow:
                "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
            }}
          >
            {/* Text for Desktop */}
            <h1 className="hidden md:block font-primaryRegular">
              BITCHY CLIVA&apos;S COIN: DECENTRALIZED,
            </h1>
            <h1 className="hidden md:block font-primaryRegular">
              LIKE HER ATTITUDE!
            </h1>

            {/* Text for Mobile */}
            <h1 className="block md:hidden font-primaryRegular">
              $CLIVA - BELIEVERS&apos; COIN IS HERE!
            </h1>
          </div>

          {/* Supporting Text */}
          <div className="mt-10 text-[#fff] md:text-[15px] lg:text-[20px] text-sm text-center justify-center items-center flex flex-col gap-3 z-20">
            <p className="tracking-wide font-secondRegular">
              <span className="font-primaryRegular">
                EMPOWERING
              </span>{" "}
              the true believers of decentralization.
            </p>
            <p className="tracking-wide font-secondRegular">
              <span className="font-primaryRegular">BITCHY CLIVA</span> brings
              back the revolutionary spirit that sparked blockchain and web3
              adoption.
            </p>
          </div>
        </div>
      </div>

      {/* Image and Button Section */}
      <div className="flex flex-col-reverse gap-5 z-50 md:flex-row md:justify-between">
        <div className=" md:hidden flex flex-col-reverse justify-center items-center z-10">
          <div className="sm:max-md:flex sm:max-md:flex-col gap-3 my-12">
            <div
              className="md:absolute md:max-xl:-translate-y-20 md:translate-x-32 md:max-xl:h-96 md:max-xl:w-44 h-32 w-64"
              style={{
                backgroundImage: `url(${VoteCloud2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular tracking-widest translate-y-20 text-center sm:md:text-[6px] text-[8px] text-[#fff]">
                UNITE GLOBALLY <br /> WITH NO-BARRIERS
              </div>
            </div>
            <div
              className="md:absolute md:translate-y-32 md:w-28 h-32 w-64 text-center"
              style={{
                backgroundImage: `url(${VoteCloud1})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular md:translate-y-20 translate-y-16 md:-translate-x-5 text-[10px] text-[#14589D]">
                VOTE FOR <br /> DECISION-MAKING
              </div>
            </div>

            <div
              className="md:absolute md:translate-x-64 md:w-28 h-32 w-64"
              style={{
                backgroundImage: `url(${VoteCloud3})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular absolute md:translate-y-20 translate-y-16 text-center translate-x-12 md:translate-x-7 text-[10px] text-[#fff]">
                THE POWER IS IN <br /> YOUR HAND
              </div>
            </div>
            <div
              className="md:absolute md:translate-y-52 md:translate-x-28 md:w-28 h-32 w-64"
              style={{
                backgroundImage: `url(${VoteCloud4})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular md:translate-y-20 translate-y-16 translate-x-16 md:translate-x-16 text-[10px] text-[#14589D]">
                AND MORE...
              </div>
            </div>
          </div>
          <div className="z-50 md:absolute sm:md:hidden">
            <Cliva />
          </div>
        </div>
        <div
          className="w-96 h-96 z-50 md:flex hidden md:justify-center md:items-center"
          style={{
            backgroundImage: `url(${cloudBG})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute h-16 translate-x-3 z-50">
            <Cliva className=""/>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div
            className="flex justify-center items-end h-96 w-96 py-4 z-50"
            style={{
              backgroundImage: `url(${block1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute flex gap-6 md:gap-8 lg:gap-10 xl:gap-8">
              <a href="">
                <img src={XImg} alt="" className="w-6 md:w-8" />
              </a>

              <a href="">
                <img src={Telegram} alt="" className="w-6 md:w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="block lg:hidden md:hidden xl:hidden">
          <img src={Cloud} alt="Cloud1" />
          <img src={Cloud2} alt="Cloud2" />
        </div>

        <div className="absolute xl:translate-y- lg:-translate-y- md:translate-y-48 hidden md:block">
          <img src={Cloud} alt="Cloud" />
        </div>
      </div>
    </div>
  );
}
