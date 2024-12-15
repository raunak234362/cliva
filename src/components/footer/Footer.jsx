import box from "../../assets/Rectangle 8.png";
import XImg from "../../assets/Vector.png";
import Telegram from "../../assets/telegram-alt_svgrepo.com.png";
import fly from "../../assets/Frame 17.png";
const Footer = () => {
  return (
    <div className="bg-[#236814] pt-2">
      <div className="bg-[#369C1E] py-16 flex flex-col md:flex-row md:justify-between px-10 bottom-0">
        <div
          className="font-primaryRegular text-center flex flex-col tracking-widest justify-center text-3xl md:text-6xl md:tracking-[12px] px-10 z-10 gap-5"
          style={{
            color: "#228EFD",
            borderRadius: "10px",
            textShadow:
              "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
          }}
        >
          BITCHY
          <br className="md:hidden block" />
          CLIVA
          <div className="md:block hidden translate-x-[92%] -translate-y-16">
            <img
              src={fly}
              alt=""
              className=" w-8 z-50 absolute"
            />
          </div>
        </div>
        <div className="md:pt-0 pt-8 md:pl-0 pl-12">
          <div className="md:hidden block w-16 translate-x-24 translate-y-3">
            <img src={fly} alt="" />
          </div>
          <div>
            <img src={box} alt="" />
          </div>
          <div className="pl-16 absolute -translate-y-20 flex items-center gap-8">
            <a href="">
              <img src={XImg} alt="" className="h-12" />
            </a>
            <a href="">
              <img src={Telegram} alt="" className="h-16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
