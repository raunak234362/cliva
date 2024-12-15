import upperhead from "../../assets/2664 3.png";
import BackgroundImg from "../../assets/Group 1.png";
import lowerhead from "../../assets/2664 5.png";
import BoxBack from "../../assets/Frame 27.png";
import BoxBack2 from "../../assets/Group 9.png";
import BackgroundImg2 from "../../assets/2664.png";
import ButterFly from "../../assets/IMG_4440.png";
import Cliva from "../cliva/Cliva";
import { useState } from "react";
import { useEffect } from "react";
const Decentralized = () => {
  const [mobileView, setMobileView] = useState(false);

  const isMobileView = () => {
    return window.innerWidth <= 768;
  };

  useEffect(() => {
    isMobileView() ? setMobileView(true) : setMobileView(false);
    const handleResize = () => {
      setMobileView(isMobileView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <img src={upperhead} alt="upperhead" />
      </div>
      <div
        className="md:h-[155vh] h-full"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${
            mobileView ? BackgroundImg2 : BackgroundImg
          })`,
        }}
      >
        {/* <style>{`
          @media (min-width: 768px) {
            div {
              background-image: url(${BackgroundImg2});
              
            }
          }
        `}</style> */}
        <div className="pt-20 flex flex-col justify-center items-center text-center  z-10 gap-5">
          <div
            className="font-primaryRegular text-sm md:text-2xl md:tracking-[8px]"
            style={{
              color: "#FFB031",
              borderRadius: "10px",
              textShadow:
                "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
            }}
          >
            THE FUTURE OF DECENTRALIZATION <br />
            <br className="hidden md:block" /> HAS ARRIVED!!
          </div>
          <div className="flex md:-translate-x-[450px] gap-3 py-10 z-20">
            <div className="absolute md:text-2xl text-base font-secondRegular text-white text-left px-12 pt-5 md:pt-10">
              Close your eyes. Wait, if you close it. how will you read it then?
            </div>
            <div className="absolute text-white font-secondRegular text-left md:text-2xl text-base pt-[32%] md:pt-48 px-10">
              OK now- Imagine a world, where the major decisions about the token
              you hold dear aren’t dictated by close knit insiders, but they
              come from the community.
            </div>
            <div className="absolute text-white font-secondRegular text-left md:text-2xl text-base pt-[72%] md:pt-[400px] px-10">
              Moving further, now get a <br /> flashback on why web3.0 was{" "}
              <br /> adopted mainstream. You know, <br /> believers were keen to
              solve the <br /> problems of inequality, poverty,
              <br /> hunger, disempowerment and so on.
              <br /> Wingoarena encompasses the
              <br /> platform where people from all
              <br /> walks of life, all geographies-be it
              <br /> Burundi or be in Sweden, everyone
              <br /> will have the opportunities to excel ,<br /> to realise
              their potential.
            </div>
            <img src={BoxBack} alt="" className="w-[550px] md:block hidden" />
            <img src={BoxBack2} alt="" className="w-[550px] md:hidden block" />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute w-full pt-16 md:pt-24 z-20">
          <div className="flex justify-center items-center z-50">
            <Cliva />
          </div>
        </div>
        <div className="md:hidden block w-full justify-center items-center">
          <img src={ButterFly} alt="" className="z-20 absolute w-96 pt-[25%]" />

          <img
            src={BackgroundImg2}
            alt=""
            className=" object-cover h-[90vh] z-0"
          />
        </div>
        <img src={lowerhead} alt="" className="relative" />
      </div>
    </div>
  );
};

export default Decentralized;
