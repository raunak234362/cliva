
import upperhead from "../../../public/topPlatform.png";
import lowerhead from "../../../public/bottomPlatform.png";
import MainBox from "../../../public/frame27.png";
import BackgroundImg2 from "../../../public/2664.png";
import ButterFly from "../../../public/img_4440.png";
import Cliva from "../cliva/Cliva";

const Decentralized = () => {
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
            className="font-primaryRegular text-base md:text-lg xl:text-xl tracking-wide"
            style={{
              color: "#FFB031",
              textShadow:
                "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
            }}
          >
            THE FUTURE OF DECENTRALIZATION <br /> HAS ARRIVED!!
          </div>

          {/* Content Box */}
          <div className="flex md:justify-between justify-center items-center px-10 w-full">
            <div>
              <img
                src={MainBox}
                alt=""
                className=" w-fit h-96 top-[30vh] mx-auto"
              />
            </div>
            <div className="md:block hidden">
              <img
                src={ButterFly}
                alt="Butterfly"
                className="w-fit h-96 top-[30vh] mx-auto"
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
      <div
        className="md:hidden flex w-full justify-center items-end h-[90vh]"
        style={{
          backgroundImage: `url(${BackgroundImg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <img
            src={ButterFly}
            alt="Butterfly"
            className="w-fit h-[60vh] mx-auto"
          />
        </div>
        {/* <img
          src={BackgroundImg2}
          alt="Background"
          className="h-[90vh] object-cover w-full"
        /> */}
      </div>

      {/* Lower Section */}
      <div>
        <img src={lowerhead} alt="Lower Heading" className="w-full" />
      </div>
    </div>
  );
};

export default Decentralized;
