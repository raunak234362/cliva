import React from "react";
import Road from "../../assets/road.png";
import ButterflyCastle from "../../assets/butterfly_castle_03.png";
import Logo from "../../assets/logo_wingo.png";
const Wingoarena = () => {
  return (
    <div className="bg-skin h-full w-[100vw] relative">
      {/* Logo positioned at the top-right corner */}
      <div className="absolute top-10 right-0">
        <img src={Logo} alt="Road" className="w-[70%] pt-20" />
      </div>
      <div className="font-secondRegular absolute  top-0 right-0 text-[#228EFD] text-[1.9rem] text-center font-[1000]" 
      style={{marginTop:"32%", marginRight:"7rem", WebkitTextStroke: "1px black",
        textShadow: "0 4px 4px rgba(0, 0, 0, 0.5)"}}>
      <p> Empowering the true believers</p>
      <p> of decentralization. Bitchy </p>
      <p> CLIVA brings back the </p>
      <p>revolutionary spirit that </p>
      <p>sparked blockchain & Web3 </p>
      <p> adoption.</p>

      </div>
      {/* Butterfly Castle Image */}
      <div>
        <img src={ButterflyCastle} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Wingoarena;
