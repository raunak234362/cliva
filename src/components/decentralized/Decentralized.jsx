import upperhead from "../../assets/2664 3.png";
import lowerhead from "../../assets/2664 5.png";
import BoxBack from "../../assets/Frame 27.png";
import BackgroundImg2 from "../../assets/2664.png";
import ButterFly from "../../assets/IMG_4440.png";
import Cliva from "../cliva/Cliva";
import { useState, useEffect } from "react";

const Decentralized = () => {
  const [mobileView, setMobileView] = useState(false);

  const isMobileView = () => {
    return window.innerWidth <= 768;
  };

  useEffect(() => {
    setMobileView(isMobileView());
    const handleResize = () => {
      setMobileView(isMobileView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {/* Upper Section */}
      <div>
        <img src={upperhead} alt="Upper Heading" className="w-full" />
      </div>

      {/* Main Background Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImg2})`,
        }}
      >
        <div className="pt-20 flex flex-col justify-center items-center text-center z-10 gap-5">
          {/* Heading */}
          <div
            className="font-primaryRegular text-base md:text-2xl xl:text-3xl tracking-wide"
            style={{
              color: "#FFB031",
              textShadow:
                "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
            }}
          >
            THE FUTURE OF DECENTRALIZATION <br /> HAS ARRIVED!!
          </div>

          {/* Content Box */}
          <div className="md:flex md:justify-between">
            <div
              className="relative md:w-[50vw] flex justify-center items-center pl-5 pr-10 md:pl-36 md:pr-44 h-[100vh] text-sm md:text-xl lg:text-xl text-left"
              style={{
                backgroundImage: `url(${BoxBack})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full flex flex-col md:gap-16 gap-10 ">
                <div className="  text-white">
                  <p className="font-secondRegular ">
                    Close your eyes. Wait, if you close it, how will you read it
                    then?
                  </p>
                </div>
                <div className="  text-white">
                  <p className="font-secondRegular ">
                    OK now - Imagine a world where the major decisions about the
                    token you hold dear aren’t dictated by close-knit insiders,
                    but they come from the community.
                  </p>
                </div>
                <div className=" text-white">
                  <p className="font-secondRegular pr-10">
                    Moving further, now get a flashback on why web3.0 was
                    adopted mainstream. You know, believers were keen to solve
                    the problems of inequality, poverty, hunger, disempowerment,
                    and so on. Wingoarena encompasses a platform where people
                    from all walks of life, all geographies—be it Burundi or
                    Sweden—everyone will have the opportunities to excel and
                    realize their potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:block relative">
              <img
                src={ButterFly}
                alt="Butterfly"
                className="absolute w-fit h-[60vh] top-[30vh] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cliva Section */}
      <div className="absolute w-full pt-24 flex justify-center items-center z-20">
        <Cliva />
      </div>

      {/* Mobile View Image Section */}
      <div className="md:hidden w-full flex justify-center relative">
        <img
          src={ButterFly}
          alt="Butterfly"
          className="absolute w-fit h-[60vh] top-[30vh] mx-auto"
        />
        <img
          src={BackgroundImg2}
          alt="Background"
          className="h-[90vh] object-cover w-full"
        />
      </div>

      {/* Lower Section */}
      <div>
        <img src={lowerhead} alt="Lower Heading" className="w-full" />
      </div>
    </div>
  );
};

export default Decentralized;
