import Catterpillar from "../../assets/catterpiller.png";

const PinkBox = () => {
  return (
    <div className="relative">
      {/* Border wrapper */}
      <img src={Catterpillar} alt="" className="max-md:hidden absolute z-20 right-0 2xl:-top-20 2xl:w-[12%] xl:w-[20%] xl:-top-10 lg:w-[25%] lg:-right-24 lg:-top-10 md:w-[35%] md:-top-8 md:-right-20 pr-10 mr-10" />
      <div
        className="absolute inset-0 bg-[#EE0A73]"
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
        }}
      />
      {/* Content */}
      <div
        className="bg-[#FFA1C6] text-white p-10 relative"
        style={{
          clipPath: "polygon(5% 2%, 99% 2%, 95% 98%, 1% 98%)",
          margin: "5px", // Creates the border effect
        }}
      >
        <div className="flex flex-row-reverse">
          <div
            className="text-[#FFF64B] flex text-left xl:px-16 w-full text-wrap text-clip  max-sm:text-[12px] text-[15px] font-primaryRegular leading-8"
            style={{ WebkitTextStroke: "1px #F39734" }}
          >
            SWARMING: MASSIVE COMMUNAL EFFORTS
          </div>
        </div>
          <div className=" text-wrap text-[#F33B19] flex w-full xl:px-10 lg:px-10 justify-center text-left text-clip text-lg font-secondRegular leading-8">
            Vote-to-earn platform development<br/> Vote to Earn Mechanism:<br/> Web3
            crowdsourcing + gig economy + volunteering platform development<br/> DEX
            listings<br/> Social cause drive & funding; driving real-life social
            impact
          </div>
      </div>
    </div>
  );
};

export default PinkBox;
