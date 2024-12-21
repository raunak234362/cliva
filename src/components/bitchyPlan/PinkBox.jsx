

const PinkBox = () => {
  return (
    <div className="relative">
    {/* Border wrapper */}
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
      <div
        className="text-[#FFF64B] flex md:px-24 text-left w-full text-wrap text-clip  max-sm:text-[12px] text-[15px] font-primaryRegular leading-8"
        style={{ WebkitTextStroke: "1px #F39734" }}
      >
        SWARMING: MASSIVE COMMUNAL EFFORTS
      </div>
      <div className=" text-wrap text-[#F33B19] flex w-full justify-center md:px-28 text-left text-clip text-lg font-secondRegular leading-8">
      Vote-to-earn platform development Vote to Earn Mechanism: Web3 crowdsourcing + gig economy + volunteering platform development DEX listings Social cause drive & funding; driving real-life social impact
      </div>
    </div>
  </div>
  )
}

export default PinkBox
