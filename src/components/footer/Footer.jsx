import box from "../../assets/rectangle8.png";
import XImg from "../../assets/vector.png";
import Telegram from "../../assets/telegram-alt_svgrepo.com.png";
import fly from "../../assets/frame17.png";
const Footer = () => {
  return (
    <div className="bg-[#236814] pt-2 w-full">
      <div className="bg-[#369C1E] py-16 w-full flex flex-col md:flex-row md:justify-between px-10 md:max-lg:px-2 bottom-0">
        <div
          className="font-primaryRegular text-center flex flex-col tracking-widest justify-center text-3xl md:text-3xl lg:text-4xl md:tracking-[12px] px-10 z-10 gap-5"
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
          <div className="md:block hidden translate-x-[92%] -translate-y-12">
            <img src={fly} alt="" className=" w-8 md:w-5 z-50 absolute" />
          </div>
        </div>
        <div className="md:pt-0 pt-8 flex flex-col justify-center items-center">
          <img src={fly} alt="" className="w-10 md:hidden block translate-y-3"/>
          <div
            className="flex justify-center items-center h-16 w-96 md:max-lg:w-72"
            style={{
              backgroundImage: `url(${box})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-8">
              <a href="https://x.com/home">
                <img src={XImg} alt="" className="w-6 md:w-8" />
              </a>

              <a href="https://telegram.com/">
                <img src={Telegram} alt="" className="w-6 md:w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
