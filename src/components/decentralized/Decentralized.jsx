import upperhead from "../../assets/2664 3.png";
import BackgroundImg from "../../assets/Group 1.png";
import lowerhead from "../../assets/2664 5.png";
import BoxBack from "../../assets/Frame 27.png";
import BoxBack2 from "../../assets/Group 9.png";
import BackgroundImg2 from '../../assets/2664.png'
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
          backgroundImage: `url(${mobileView ? BackgroundImg2 : BackgroundImg})`,
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
            <div className="absolute md:text-[25px] text-lg font-secondRegular text-white text-left pl-7 pr-5 pt-5 md:pt-10">
              Close your eyes. Wait, if you close it. how will you read it then?
            </div>
            <div className="absolute text-white font-secondRegular text-left md:text-[20px] text-lg pt-24 md:pt-44 md:pr-20 pr-10 pl-7">
              OK now- Imagine a world, where the major decisions about the token
              you hold dear aren’t dictated by close knit insiders, but they
              come from the community.
            </div>
            <div className="absolute text-white font-secondRegular text-left md:text-[20px] text-lg pt-60 md:pt-[370px] pr-[55px] md:pr-28 pl-7">
              Moving further, now get a flashback on why web3.0 was adopted
              mainstream. You know, believers were keen to solve the problems of
              inequality, poverty, hunger, disempowerment and so on. Wingoarena
              encompasses the platform where people from all walks of life, all
              geographies-be it Burundi or be in Sweden, everyone will have the
              opportunities to excel ,<br/> to realise their potential.
            </div>
            <img src={BoxBack} alt="" className="w-[550px] md:block hidden" />
            <img src={BoxBack2} alt="" className="w-[550px] md:hidden block" />
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <img src={BackgroundImg} alt="" />
      </div>
      <div>
        <div className="absolute w-full pt-24 z-20">
          <div className="flex justify-center items-center z-50">
            <Cliva />
          </div>
        </div>
        <img src={lowerhead} alt="" />
      </div>
    </div>
  );
};

export default Decentralized;
