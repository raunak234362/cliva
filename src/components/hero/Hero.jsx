import ButterflyImg from "../../assets/rb_21.png";
import JoinClivaImg from "../../assets/Frame44.png";
import Cloud from "../../assets/cloud1.png";

import VoteCloud1 from "../../assets/Votecloud1.png";
import VoteCloud2 from "../../assets/Votecloud2.png";
import VoteCloud3 from "../../assets/Votecloud3.png";
import VoteCloud4 from "../../assets/Votecloud4.png";

export default function Hero() {
  return (
    <div className="bg-normal h-full w-[100vw]">
      <div>
        <img
          src={ButterflyImg}
          alt="Butterfly"
          className="w-full z-0 opacity-70 absolute object-contain h-96 object-left-top"
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
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="pl-16 pt-10 z-50">
          <div className="z-50 md:translate-x-52 p-[4px] translate-y-48 absolute text-[15px] font-primaryRegular">
            <div
              className="bg-[#FFA1C6] border-[#EE0A73] border-4 px-5 py-3 rounded-3xl"
              style={{
                color: "#fff",
                borderRadius: "10px",
                textShadow:
                  "2px 2px 5px #228EFD, -2px -2px 5px #228EFD, 2px -2px 5px #228EFD, -2px 2px 5px #228EFD",
              }}
            >
              JOIN $CLIVA
            </div>
          </div>
          <div className="flex z-0">
            <div className="absolute translate-y-28">
              <div className="font-primaryRegular absolute translate-y-20 translate-x-7 text-[10px] text-[#14589D]">
                VOTE FOR <br/> DECISION-MAKING
              </div>
              <div>
                <img src={VoteCloud1} alt="Join Cliva" className=" w-72" />
              </div>
            </div>
            <div className="absolute  translate-y-16 translate-x-52">
            <div className="font-primaryRegular text-center absolute translate-y-16 translate-x-12 text-[10px]" style={{
                color: "#fff",
                borderRadius: "10px",
                textShadow:
                  "2px 2px 5px #228EFD, -2px -2px 5px #228EFD, 2px -2px 5px #228EFD, -2px 2px 5px #228EFD",
              }}>
                UNITE GLOBALLY <br/> WITH NO-BARRIERS
              </div>
              <div>
                <img
                  src={VoteCloud2}
                  alt="Join Cliva"
                  className=" w-64"
                />
              </div>
            </div>
            <div className="absolute  translate-y-44 translate-x-96">
            <div className="font-primaryRegular text-center absolute translate-y-16 translate-x-12 text-[10px]" style={{
                color: "#fff",
                borderRadius: "10px",
                textShadow:
                  "2px 2px 5px #228EFD, -2px -2px 5px #228EFD, 2px -2px 5px #228EFD, -2px 2px 5px #228EFD",
              }}>
                THE POWER IS IN <br/> YOUR HAND
              </div>
              <div>
                <img
                  src={VoteCloud3}
                  alt="Join Cliva"
                  className=" w-56"
                />
              </div>
            </div>
            <div className="absolute  translate-y-56 translate-x-44">
            <div className="font-primaryRegular text-center absolute translate-y-16 translate-x-20 text-[10px]" style={{
                color: "#fff",
                borderRadius: "10px",
                textShadow:
                  "2px 2px 5px #228EFD, -2px -2px 5px #228EFD, 2px -2px 5px #228EFD, -2px 2px 5px #228EFD",
              }}>
               AND MORE...
              </div>
              <div>
                <img
                  src={VoteCloud4}
                  alt="Join Cliva"
                  className=" w-60"
                />
              </div>
            </div>
            {/*
            <div>
              <img
                src={VoteCloud4}
                alt="Join Cliva"
                className="translate-y-56 -translate-x-[570px] w-76"
              />
            </div> */}
          </div>
        </div>
        <div className="pr-24 pb-6 z-50">
          <img
            src={JoinClivaImg}
            alt="Voting"
            className="object-right-bottom w-full"
          />
        </div>
        <div className="absolute translate-y-60">
          <img src={Cloud} alt="Cloud" />
        </div>
      </div>
    </div>
  );
}
