import box from "../../assets/Rectangle 8.png";

const Footer = () => {
  return (
    <div className="bg-[#369C1E] py-16 rounded-xl flex justify-between px-10 bottom-0">
      <div
        className="font-primaryRegular flex flex-col tracking-widest justify-center text-2xl md:text-6xl md:tracking-[12px] px-10 z-10 gap-5"
        style={{
          color: "#228EFD",
          borderRadius: "10px",
          textShadow:
            "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
        }}
      >
        BITCHYCLIVA
      </div>
      <div>
        <div>
          <img src={box} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
