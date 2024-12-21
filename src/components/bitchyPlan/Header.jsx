import LeftFlower from "../../assets/flower_left.png";

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-row items-center">
        <div className="max-sm:hidden">
          <img src={LeftFlower} alt="" className="w-32" />
        </div>
        <div
          className="font-primaryRegular w-full text-wrap max-sm:mt-10 leading-10 text-2xl text-center text-[#EBE235]"
          style={{
            WebkitTextStroke: "1px #F39734",
          }}
        >
          BITCHY PLAN.. ROADMAP
        </div>
      </div>
    </>
  );
};

export default Header;
