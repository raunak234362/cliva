import BuVoting from "../../assets/rb_214.png"; // Replace with your butterfly image path
import clivavotinf from "../../assets/IMG_4442.png"; // Replace with your Join Cliva image path
import cloud2 from "../../assets/cloud2.png";
import Cliva from "../cliva/Cliva";

const VoteToEarn = () => {
  return (
    <div className="flex justify-center font-primaryRegular md:pt-0 pt-2  bg-[#5CBBFF] h-[100vh]">
      <div className="flex md:flex-row flex-col">
        <div className="z-50 flex md:pt-0 pt-16 justify-center items-center flex-col gap-10 ">
          <div
            className="col-span-2 text-[#228EFD] md:text-3xl"
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
          <div className="z-50 p-[4px] text-[10px] md:text-[15px] font-primaryRegular">
           <Cliva/>
          </div>
        </div>
        <div className="z-50">
          <div className="hidden md:block pt-10">
            <img
              src={BuVoting}
              alt="voting"
              className="absolute right-0 object-contain w-fit h-max"
            />
          </div>
          <div className="md:pt-40 ">
            <img
              src={clivavotinf}
              alt="Butterfly"
              className="w-full h-[60vh] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute md:translate-y-24 -translate-y-6 z-0">
        <img src={cloud2} alt="" className="" />
      </div>
    </div>
  );
};

export default VoteToEarn;
