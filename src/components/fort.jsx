import React from "react";
import Vector59 from "../assets/Frame21.png";
import Vector60 from "../assets/Vector60.png";
import logo from "../assets/Frame41.png";
import mainIm from "../assets/IMG_4441.png";

export default function fort() {
  return (
    <div className="font-secondRegular bg-skin h-3/4 w-full">
      <div className="relative ">
        <img src={Vector59} alt="voting" className="static -bottom-20 left-0 w-4/4 h-auto" />
        {/* <img
          src={Vector60}
          alt="voting"
          className="absolute -bottom-60 w-4/4 left-2 h-auto z-"
        /> */}
        <img src={mainIm} alt="voting" className="absolute bottom-10 left-10 w-2/4 h-full z-20" />
      </div>
    </div>
  );
}
