import BuVoting from "../../assets/rb_214.png"; // Replace with your butterfly image path
import clivavotinf from "../../assets/img_4442.png"; // Replace with your Join Cliva image path
import cloud2 from "../../assets/cloud2.png";
import Cliva from "../cliva/Cliva";

const VoteToEarn = () => {
  return (
    <div className="w-full">
      <div className="absolute  z-50">
        <img src={cloud2} alt="" className="" />
      </div>
      <div className=" justify-evenly font-primaryRegular bg-[#5CBBFF]">
        <div className="flex md:flex-row flex-col justify-around">
          <div className="z-50 w-full flex justify-center items-center flex-col gap-10 my-6">
            <div
              className="col-span-2 text-[#228EFD] sm:md:text-lg md:xl:text-3xl"
              style={{
                color: "#228EFD",
                borderRadius: "10px",
                textShadow:
                  "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
              }}
            >
              <p>VOTE TO EARN</p>
            </div>
            <div className="col-span-2 text-[#fff] md:text-2xl text-lg text-center font-secondRegular">
              <p>
                Empowering the true believers <br />
                of decentralization. Bitchy <br />
                CLIVA brings back the <br /> revolutionary spirit that <br />
                sparked blockchain & Web3 <br /> adoption.
              </p>
            </div>
            <div className="z-50">
              <Cliva />
            </div>
          </div>
          <div className="z-50 w-full overflow-x-hidden">
            <div className="md:absolute md:translate-x-48 -z-50 opacity-80 hidden md:block">
              <img
                src={BuVoting}
                alt="voting"
                className="object-contain h-48"
              />
            </div>
            <div className="z-50 lg:pt-40 md:pt-">
              <img
                src={clivavotinf}
                alt="Butterfly"
                className="w-full md:h-full lg: object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteToEarn;
