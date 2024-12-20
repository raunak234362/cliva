/* eslint-disable no-unused-vars */
import StreetSVG from "../../assets/streetSVG.png";
import ButterflyCastle from "../../assets/butterfly_castle_03.png";
import Logo from "../../assets/logo_wingo.png";
import ButterflyMobile from "../../assets/butterfly_001.png";
import { Info } from "./Info";
import { useEffect, useState } from "react";

export default function WingoArena1() {
    const [mobileView, setMobileView] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <>
      <div className="bg-[#FFD28A] h-full w-full relative ">
        <div
          className="w-full flex flex-col max-sm:bg-none sm:flex-row items-center sm:pr-10"
        //   style={{
        //     backgroundImage: mobileView ? "" :`url(${StreetSVG})`,
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "center",
        //   }}
        >
          <div className="sm:hidden flex flex-col items-center gap-4">
            <img src={Logo} alt="Logo" className="w-1/2 pt-16" />
            <div
              className="text-[#EE0A73] font-primaryRegular text-center text-2xl font-bold mt-2"
              style={{
                textShadow: "4px 4px 18px rgba(255, 255, 255, 0.6)", // White glow
                WebkitTextStroke: "1px white", // White outline outside text
              }}
            >
              JOIN THE $CLIVA
            </div>
          </div>

          <div className="sm:w-full">
            {/* <img src={ButterflyMobile} alt="Logo" className="w-full h-full" /> */}
            <img src={mobileView ? ButterflyMobile : ButterflyCastle} alt="Logo" className="w-full h-full" />
          </div>

          <div className="sm:w-1/2 flex flex-col items-center gap-20">
            <div className="max-sm:hidden flex justify-center">
              <img src={Logo} alt="Logo" className="w-1/2" />
            </div>
            <div className="w-11/12">
                <Info />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
