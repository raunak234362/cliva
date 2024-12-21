const BlueBox = () => {
  return (
    <div className="relative">
      {/* Border wrapper */}
      <div
        className="absolute inset-0 bg-[#228EFD]"
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
        }}
      />
      {/* Content */}
      <div
        className="bg-[#252B7C] text-white p-8 relative"
        style={{
          clipPath: "polygon(5% 2%, 99% 2%, 95% 98%, 1% 98%)",
          margin: "4px", // Creates the border effect
        }}
      >
        <div
          className="text-[#FFF64B] max-sm:text-[12px] text-[15px] flex justify-center w-full text-wrap text-clip  max-sm:text-sm font-primaryRegular leading-8"
          style={{ WebkitTextStroke: "1px #F39734" }}
        >
          POLLINATION : EXPANDING THE HORIZON
        </div>
        <div className=" text-wrap text-lg text-clip max-w-[80%] font-secondRegular leading-8">
        Audits and public disclosure of smart contract Marketing using influential voices Community building campaigns
        </div>
      </div>
    </div>
  );
};

export default BlueBox;
