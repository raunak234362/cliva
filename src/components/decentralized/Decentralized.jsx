import upperhead from "../../assets/2664 3.png";
import BackgroundImg from "../../assets/Group 1.png";
import lowerhead from "../../assets/2664 5.png";
import Cliva from "../cliva/Cliva";
const Decentralized = () => {
  return (
    <div>
      <div>
        <img src={upperhead} alt="upperhead" />
      </div>
      <div
        className="md:h-[155vh] h-full"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="font-primaryRegular pt-20 flex flex-col justify-center items-center text-center text-sm md:text-2xl md:tracking-[8px] z-10 gap-5"
          style={{
            color: "#FFB031",
            borderRadius: "10px",
            textShadow:
              "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
          }}
        >
          <div>
            THE FUTURE OF DECENTRALIZATION <br />
            <br className="hidden md:block"/> HAS ARRIVED!!
          </div>
          <div>

          </div>
          <div>
            <Cliva/>
          </div>
        </div>
      </div>
      <div>
        <img src={lowerhead} alt="" />
      </div>
    </div>
  );
};

export default Decentralized;
