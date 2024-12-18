import tree from "../../../public/rb_836151.png";
import butterfly from "../../../public/frame39.png";
import PieCha from "../../../public/frame34.png";
import PieChart from "../../../public/frame35.png";
const Wingonomics = () => {
  return (
    <div className="bg-[#4BB149] h-fit">
      <div>
        <div
          className="h-fit pt-24 md:px-12"
          style={{
            backgroundImage: `url(${tree})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            className="font-primaryRegular flex flex-col justify-center text-2xl md:text-2xl md:tracking-[8px] px-10 z-10 gap-5"
            style={{
              color: "#FFF53D",
              borderRadius: "10px",
              textShadow:
                "2px 2px 5px #F39734, -2px -2px 5px #F39734, 2px -2px 5px #F39734, -2px 2px 5px #F39734",
            }}
          >
            <div>WINGONOMICS</div>
          </div>
          <div className="flex flex-col-reverse gap-10 md:grid md:grid-cols-2 pt-[5%] px-10 h-fit">
            <div className="flex flex-col gap-10 h-fit">
              <div className="flex flex-col gap-10">
                <h1
                  className="font-bold tracking-widest font-primaryRegular"
                  style={{
                    color: "#EE0A73",
                    borderRadius: "10px",
                    textShadow:
                      "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
                  }}
                >
                  PRESALE PHASE
                </h1>
                <p className="font-secondRegular text-white">
                  15% of the total supply will be allocated to the presale
                  phase. Ensuring this early nectar will ensure liquidity to
                  jump start the project.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h1
                  className="font-bold tracking-widest font-primaryRegular"
                  style={{
                    color: "#EE0A73",
                    borderRadius: "10px",
                    textShadow:
                      "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
                  }}
                >
                  VOTING VAULT & SOCIAL CAUSE FUND
                </h1>
                <p className="font-secondRegular text-white">
                  5% of the total supply will be in the vote-to-earn vault and
                  social cause fund. PS: The more you engage- the more you earn.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h1
                  className="font-bold tracking-widest font-primaryRegular"
                  style={{
                    color: "#EE0A73",
                    borderRadius: "10px",
                    textShadow:
                      "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
                  }}
                >
                  STAKING
                </h1>
                <p className="font-secondRegular text-white">
                  20% of the total supply will be reserved for staking rewards,
                  incentivizing long-term holders and fostering a stable
                  ecosystem.
                </p>
              </div>
              <div className="pt-10">
                <img src={butterfly} alt="" />
              </div>
            </div>
            <div className="md:-mt-52">
              <div>
                <img src={PieCha} alt="" className="md:block hidden" />
                <img src={PieChart} alt="" className="md:hidden block" />
                <div className="flex flex-col gap-5 md:hidden py-10">
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#FFA1C6] h-6 w-7 border-2 rounded-lg"></div>
                    <div
                      className="font-primaryRegular tracking-[2px] text-[6px]"
                      style={{
                        color: "#fff",
                        borderRadius: "10px",
                        textShadow:
                          "2px 2px 5px #EE0A73, -2px -2px 5px #EE0A73, 2px -2px 5px #EE0A73, -2px 2px 5px #EE0A73",
                      }}
                    >
                      LIQUIDITY
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#228EFD] h-6 w-7 border-2 rounded-lg"></div>
                    <div
                      className="font-primaryRegular tracking-[2px] text-[6px]"
                      style={{
                        color: "#fff",
                        borderRadius: "10px",
                        textShadow:
                          "2px 2px 5px #EE0A73, -2px -2px 5px #EE0A73, 2px -2px 5px #EE0A73, -2px 2px 5px #EE0A73",
                      }}
                    >
                      PROJECT DEVELOPMENT
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#247810] h-6 w-7 border-2 rounded-lg"></div>
                    <div
                      className="font-primaryRegular tracking-[2px] text-[6px]"
                      style={{
                        color: "#fff",
                        borderRadius: "10px",
                        textShadow:
                          "2px 2px 5px #EE0A73, -2px -2px 5px #EE0A73, 2px -2px 5px #EE0A73, -2px 2px 5px #EE0A73",
                      }}
                    >
                      VOTING VAULT
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#EE0A73] h-6 w-7 border-2 rounded-lg"></div>
                    <div
                      className="font-primaryRegular tracking-[2px] text-[6px]"
                      style={{
                        color: "#fff",
                        borderRadius: "10px",
                        textShadow:
                          "2px 2px 5px #EE0A73, -2px -2px 5px #EE0A73, 2px -2px 5px #EE0A73, -2px 2px 5px #EE0A73",
                      }}
                    >
                      PRESALE PHASE
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#FF7922] h-6 w-7 border-2 rounded-lg"></div>
                    <div
                      className="font-primaryRegular tracking-[2px] text-[6px]"
                      style={{
                        color: "#fff",
                        borderRadius: "10px",
                        textShadow:
                          "2px 2px 5px #EE0A73, -2px -2px 5px #EE0A73, 2px -2px 5px #EE0A73, -2px 2px 5px #EE0A73",
                      }}
                    >
                      MARKETING
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#EBE235] h-6 w-7 border-2 rounded-lg"></div>
                    <div
                      className="font-primaryRegular tracking-[2px] text-[6px]"
                      style={{
                        color: "#fff",
                        borderRadius: "10px",
                        textShadow:
                          "2px 2px 5px #EE0A73, -2px -2px 5px #EE0A73, 2px -2px 5px #EE0A73, -2px 2px 5px #EE0A73",
                      }}
                    >
                      STAKING
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10">
                  <h1
                    className="font-bold tracking-widest font-primaryRegular"
                    style={{
                      color: "#EE0A73",
                      borderRadius: "10px",
                      textShadow:
                        "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
                    }}
                  >
                    PROJECT DEVELOPMENT
                  </h1>
                  <p className="font-secondRegular2 text-white">
                    30% of the total supply will be used up in developing
                    platforms around the bitchy vision.
                  </p>
                </div>
                <div className="flex flex-col gap-10">
                  <h1
                    className="font-bold tracking-widest font-primaryRegular"
                    style={{
                      color: "#EE0A73",
                      borderRadius: "10px",
                      textShadow:
                        "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
                    }}
                  >
                    MARKETING
                  </h1>
                  <p className="font-secondRegular text-white">
                    A full 20% earmarked for spreading the word about bitchy
                    Clive
                  </p>
                </div>
                <div className="flex flex-col gap-10">
                  <h1
                    className="font-bold tracking-widest font-primaryRegular"
                    style={{
                      color: "#EE0A73",
                      borderRadius: "10px",
                      textShadow:
                        "2px 2px 5px #fff, -2px -2px 5px #fff, 2px -2px 5px #fff, -2px 2px 5px #fff",
                    }}
                  >
                    LIQUIDITY
                  </h1>
                  <p className="font-secondRegular text-white">
                    Liquidity pool of 10% for decentralized exchange listings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wingonomics;
