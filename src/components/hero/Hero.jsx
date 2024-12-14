/* eslint-disable no-unused-vars */
import ButterflyImg from "../../assets/rb_21.png";
import JoinClivaImg from "../../assets/Frame44.png";
import Cloud from "../../assets/cloud1.png";
import Cloud2 from "../../assets/cloud2.png";

import VoteCloud1 from "../../assets/Votecloud1.png";
import VoteCloud2 from "../../assets/Votecloud2.png";
import VoteCloud3 from "../../assets/Votecloud3.png";
import VoteCloud4 from "../../assets/Votecloud4.png";
import Cliva from "../cliva/Cliva";

export default function Hero() {
  return (
    <div className="bg-[#5CBBFF] h-fit md:h-[120vh] w-[100vw]">
      <div>
        <img
          src={ButterflyImg}
          alt="Butterfly"
          className="hidden md:block w-full z-0 opacity-70 absolute object-contain h-96 object-left-top"
        />
        <img
          src={Cloud2}
          alt="Cloud"
          className="block md:hidden w-full z-0 opacity-70 absolute object-contain h-96 object-left-top"
        />
        <div className="z-10 flex flex-col py-20 items-center justify-center">
          {/* Heading Text */}
          <div
            className="flex flex-col justify-center items-center text-center text-sm md:text-4xl tracking-[2px] md:tracking-[8px] z-10 gap-5"
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
          <div className="mt-10 text-[#fff] md:text-[25px] text-sm text-center justify-center items-center flex flex-col gap-3 z-20">
            <p className="tracking-wide font-secondRegular">
              <span className="font-primaryRegular text-[12px] md:text-2xl">
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
        <div className="flex flex-col-reverse md:flex-col md:justify-normal justify-center items-center md:items-start z-10">
          <div>
            <div
              className="md:absolute md:translate-y-28 md:h-44 h-36 w-64 text-center"
              style={{
                backgroundImage: `url(${VoteCloud1})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular absolute translate-y-20 translate-x-7 text-[10px] text-[#14589D]">
                VOTE FOR <br /> DECISION-MAKING
              </div>
            </div>
            <div
              className="md:absolute md:translate-y-16 md:translate-x-52 md:h-44 h-32 w-64"
              style={{
                backgroundImage: `url(${VoteCloud2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular  md:translate-y-20 md:translate-x-7 text-[10px] text-[#14589D]">
                UNITE GLOBALLY <br /> WITH NO-BARRIERS
              </div>
            </div>
            <div
              className="md:absolute  md:translate-y-44 md:translate-x-96 md:h-44 h-32 w-64"
              style={{
                backgroundImage: `url(${VoteCloud3})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular absolute translate-y-20 translate-x-7 text-[10px] text-[#14589D]">
                THE POWER IS IN <br /> YOUR HAND
              </div>
            </div>
            <div
              className="md:absolute md:translate-y-56 md:translate-x-36 md:h-44 h-32 w-64"
              style={{
                backgroundImage: `url(${VoteCloud4})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="font-primaryRegular absolute translate-y-20 translate-x-7 text-[10px] text-[#14589D]">
                AND MORE...
              </div>
            </div>
          </div>
          <div className="z-50 md:pt-0 pt-10 md:translate-x-52 p-[4px] md:translate-y-48 md:absolute text-[10px] md:text-[15px] font-primaryRegular">
           <Cliva/>
          </div>
        </div>
        <div className="md:pr-24 px-5 pb-6 z-50">
          <img
            src={JoinClivaImg}
            alt="Voting"
            className="object-right-bottom w-full"
          />
        </div>
        <div className="absolute translate-y-60 hidden md:block">
          <img src={Cloud} alt="Cloud" />
        </div>
      </div>
    </div>
  );
}
