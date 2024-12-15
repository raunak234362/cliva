import React from "react";
import Road from "../../assets/road.png";
import ButterflyCastle from "../../assets/butterfly_castle_03.png";
import Logo from "../../assets/logo_wingo.png";
import Cliva from "../cliva/Cliva";
import ButterflyMobile from "../../assets/butterfly_001.png"
const Wingoarena = () => {
  return (
    <div className="bg-[#FFD28A] h-full w-[100vw] relative ">
      {/*website view */}
      <div className="hidden md:block">
      <div className="absolute top-0 right-0" style={{marginTop: "10rem"}}>
        <img src={Logo} alt="logo" className="w-[70%] " />
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

      <div className="absolute right-0 bottom-0" style={{marginBottom:"21rem", marginRight:"14rem"}}>
        <Cliva/>
      </div>
      {/* Butterfly Castle Image */}
      <div>
        <img src={ButterflyCastle} alt="" className="w-full" />
      </div>
      </div>
      {/*mobile view */}

      <div className="block md:hidden relative">
      <div className="flex justify-center mt-10">
        <img src={Logo} alt="logo" className="w-[50%]" />
      </div>

      <div className="text-[#EE0A73] font-primaryRegular text-center text-[1rem] font-bold mt-2" 
      style={{ 
        textShadow: "4px 4px 18px rgba(255, 255, 255, 0.6)",  // White glow
        WebkitTextStroke: "1px white"  // White outline outside text
      }}>
        JOIN THE $CLIVA
      </div>

      <div className="h-fit overflow-hidden ">
        <img src={ButterflyMobile} alt="" className="w-full  -mt-20"  />
      </div>

      <div className="font-secondRegular text-2xl  text-[#228EFD]  text-center  pb-10" >
      <p> Empowering the true </p>
      <p> believers of </p>
      <p>decentralization. Bitchy </p>
      <p> CLIVA brings back the </p>
      <p>revolutionary spirit that </p>
      <p>sparked blockchain & Web3 </p>
      <p> adoption.</p>
      </div>

      <div className=" flex justify-center mb-10" >
        <Cliva/>
      </div>
      </div>
    </div>
  );
};

export default Wingoarena;
