
const GreenBox = () => {
  return (
    <div className="relative">
      {/* Border wrapper */}
      <div
        className="absolute inset-0 bg-[#11A00F]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div
        className="bg-[#173E0E] text-white p-6 relative sm:h-60"
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
          margin: "10px", // This creates the border effect
        }}
      >
        <div
          className="text-[#FFF64B] text-wrap text-clip max-w-[70%] font-primaryRegular leading-8"
          style={{ WebkitTextStroke: "1px #F39734" }}
        >
          FIRST FLIGHT
        </div>
        <div className="md:mt-5 text-wrap text-clip max-w-[80%] font-secondRegular leading-8 md:text-lg">
          Website launch Community building Worldwide marketing campaigns
          Presale takeoff Creation of token contracts
        </div>
      
      </div>
    </div>
  );
};

export default GreenBox;
