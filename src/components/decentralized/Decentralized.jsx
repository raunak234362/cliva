import upperhead from "../../assets/2664 3.png";
import BackgroundImg from "../../assets/Group 1.png";
import lowerhead from "../../assets/2664 5.png"
const Decentralized = () => {
  return (
    <div>
      <div >
        <img src={upperhead} alt="upperhead" />
      </div>
      <div className="h-[155vh]"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      </div>
      <div>
      </div>
    </div>
  );
};

export default Decentralized;
