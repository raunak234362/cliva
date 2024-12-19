import XImg from "../../assets/Vector.png";
import Telegram from "../../assets/telegram-alt_svgrepo.com.png";
const XT = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <div className="absolute flex items-center gap-6 md:gap-4 lg:gap-6 xl:gap-8">
          <a href="">
            <img src={XImg} alt="" className="w-5 md:w-5" />
          </a>

          <a href="">
            <img src={Telegram} alt="" className="w-10 md:w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default XT;
