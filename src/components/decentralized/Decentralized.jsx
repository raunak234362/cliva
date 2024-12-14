import upperhead from "../../assets/2664 3.png";
import BackgroundImg from "../../assets/Group 1.png";
const Decentralized = () => {
  return (
    <div>
      <div >
        <img src={upperhead} alt="upperhead" />
      </div>
      <div className="h-screen object-over"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        
      </div>
    </div>
  );
};

export default Decentralized;
