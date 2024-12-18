
import GreenShape from "../../assets/greenShape.png";
import LeftFlower from "../../assets/flower_left.png";
import RightFlower from "../../assets/flower_right.png";
import Earth from "../../assets/earth.png";
import BlueShape01 from "../../assets/blueShape_01.png";
import Branch from "../../assets/branch.png";
import Catterpillar from "../../assets/catterpiller.png";
import PinkShape from "../../assets/pinkShape.png";
import LeaveBg from "../../assets/leave_bg.png";
import Grass from "../../assets/grass.png"
import BlueShapeMd from "../../assets/blueShape_md_02.png"
import GreenShapeMd from "../../assets/greenShape_md.png"
import PinkShapeMd from "../../assets/pinkShape_md.png"

const BitchyPlan = () => {
  return (
    <div className=" relative bg-[#4BB149] h-fit">
       
        {/*website view */}
        <div className='hidden md:block'>
        <div
        className="text-[#EBE235] font-primaryRegular text-center z-50 md:text-2xl uppercase text-[1rem] font-bold mt-2 pt-10  p-5 pb-10"
        style={{ WebkitTextStroke: "1px #F39734" , }}
      >
        bitchy plan.. Roadmap!
      </div>
      <div className=" absolute md:w-[50%] h-full "
        style={{
          backgroundImage: `url(${LeaveBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: "100",
          marginTop:"-8%"
        }}
      ></div>

      

      <div className=" absolute top-0 md:-mt-10" >
        <img src={LeftFlower} alt="" className=" lg:w-[30%] md:w-[20%] z-100" />
      </div>

      {/*------------------------------------first flight---------------------------- */}
      <div className="relative">
        <img
          src={GreenShape}
          alt=""
          className=" w-[55%]  "
          style={{ marginTop: "5%" }}
        />
        <div
          className="text-[#EBE235] font-primaryRegular absolute top-6 left-10 lg:left-16 lg:top-10 text-center md:text-lg uppercase font-bold "
          style={{ WebkitTextStroke: "1px #F39734" }}
        >
          first flight
        </div>

        <div
          className=" absolute top-14 left-8  lg:top-24 lg:left-12 lg:text-xl font-secondRegular text-[#97E996]"
        >
          <p>Website launch</p>
          <p>Community building</p>
          <p>Worldwide marketing campaigns</p>
          <p>Presale takeoff</p>
          <p>Creation of token contracts</p>
        </div>

        <div
          className=" flex justify-end absolute -top-24 lg:-top-44 lg:right-5 right-0"
        >
          <img src={Earth} alt="" className=" w-[40%] z-100" />
        </div>

        <div className=" absolute  top-5 left-60 xl:left-[35%] lg:left-[32%] ">
          <img src={RightFlower} alt="" className=" w-[60%] xl:w-auto lg:w-[80%]"/>
        </div>
      </div>

      {/*-------------------------------------Pollination-------------------------------------------- */}
      <div className=" relative">
        <div className=" flex justify-end">
          <img src={BlueShape01} alt="" className=" w-[55%] " />
        </div>

        <div
          className="text-[#EBE235] text-wrap w-[48%] xl:w-[40%] leading-8 font-primaryRegular absolute top-6 right-0  
          uppercase  font-bold lg:top-10 lg:-right-8"
          style={{
            WebkitTextStroke: "1px #F39734",
          }}
        >
          Pollination: 
          Expanding the horizon
        </div>

        <div
          className=" absolute top-24 right-8 font-secondRegular text-white lg:top-32 lg:right-20 lg:text-lg"
        >
          <p> Audits and public disclosure of smart contract</p>
          <p>Marketing using influential voices</p>
          <p>Community building campaigns</p>
        </div>
        <div className=" absolute top-10">
          <img src={Branch} alt="" className=" w-[40%] " />
        </div>
      </div>

      {/*----------------------------catterpillar-------------------------------------- */}

      <div className=" relative">
        <div className=" flex justify-center mt-20" >
          <img src={PinkShape} alt="" className=" w-[70%] " />
        </div>

        <div
          className="text-[#EBE235] font-primaryRegular leading-8 left-44 absolute top-10 uppercase  font-bold
          lg:left-80 xl:left-96 "
          style={{
            WebkitTextStroke: "1px #F39734",
          }}
        >
          <p>Swarming: </p>
          <p>Massive communal efforts</p>
        </div>

        <div
          className=" absolute top-24 left-44 font-secondRegular text-[#F33B19]
          lg:left-80 xl:left-96 lg:text-lg lg:top-32"
        >
          <p>Vote-to-earn platform development</p>
          <p>Vote to Earn Mechanism:</p>
          <p>
            Web3 crowdsourcing + gig economy + volunteering platform 
          </p>
          <p>development DEX listings</p>
          <p>Social cause drive & funding; driving real-life social impact</p>
        </div>

        <div
          className=" absolute top-0 right-0 flex justify-end"
          style={{ marginTop: "-12%", marginRight: "10%" }}
        >
          <img src={Catterpillar} alt="" className=" w-[30%] " />
        </div>
      </div>
      </div>
      {/* Mobile view */}
      <div className="block md:hidden relative">
      <div className=" absolute  z-50">
        <img src={LeaveBg} alt="" className="  " />
      </div>
      <div
        className="text-[#EBE235] font-primaryRegular text-center text-[1.5rem] uppercase font-bold p-5"
        style={{ WebkitTextStroke: "1px #F39734" , lineHeight:"2"}}
      >
        bitchy plan.. Roadmap!
      </div>

      <div className=" flex justify-center">
        <img src={Grass} alt="" className=" w-[90%]" />
      </div>
        {/*-----------------------Mobile: first flight----------------------- */}
      <div className="md:hidden block relative">
            <img src={GreenShapeMd} alt="" />
            <div
          className="text-[#EBE235] font-primaryRegular absolute top-6 left-0 text-center text-[1.3rem] uppercase font-bold mt-8"
          style={{ marginLeft: "5%", WebkitTextStroke: "1px #F39734" }}
        >
          first flight
        </div>
        <div
          className=" capitalize absolute top-0  font-secondRegular text-[#97E996]"
          style={{ marginTop: "30%", marginLeft: "5%", lineHeight: "2" }}
        >
          <p>Website launch</p>
          <p>Community building</p>
          <p>Worldwide marketing campaigns</p>
          <p>Presale takeoff</p>
          <p>Creation of token contracts</p>
        </div>
        <div className=" absolute z-50" style={{marginTop:"-35%"}}>
        <img src={Earth} alt=""/>
      </div>
      </div>
          {/*--------------------Mobile: pollination--------------------------- */}
          <div className="relative md:hidden block "  style={{marginTop:"60%"}}>
            <img src={BlueShapeMd} alt="" />
            <div
          className="text-[#EBE235] font-primaryRegular absolute top-5 text-[1.3rem] uppercase font-bold mt-5"
          style={{
            marginLeft: "10%",
            WebkitTextStroke: "1px #F39734",
            lineHeight: "2",
          }}
        >
          <p>Pollination: </p>
          <p>Expanding the horizon</p>
        </div>

        <div
          className=" absolute bottom-0 text-lg font-secondRegular text-white"
          style={{ marginBottom:"20%", marginLeft:"2%",  lineHeight: "2" }}
        >
          <p> Audits and public disclosure of smart contract</p>
          <p>Marketing using influential voices</p>
          <p>Community building campaigns</p>
        </div>
          </div>

          <div className="md:hidden block">
            <img src={Branch} alt=""/>
          </div>
          {/*---------------------------------Mobile: Pinkbox------------------------------------- */}
          <div className=" relative md:hidden block" style={{marginTop:"-30%"}}>
            <img src={PinkShapeMd} alt="" />
            <div
          className="text-[#EBE235] font-primaryRegular absolute top-10 left-8 uppercase text-[1.1rem] font-bold mt-4 "
          style={{
            WebkitTextStroke: "1px #F39734",
            lineHeight: "2",
          }}
        >
          <p>Swarming:Massive  </p>
          <p>communal efforts</p>
        </div>

        <div
          className=" absolute bottom-0 font-secondRegular text-[#F33B19]"
          style={{ marginBottom: "20%", marginLeft: "8%", lineHeight: "2" }}
        >
          <p>Vote-to-earn platform development</p>
          <p>Vote to Earn Mechanism:</p>
          <p>
            Web3 crowdsourcing + gig economy + volunteering platform development
          </p>
          <p>DEX listings</p>
          <p>Social cause drive & funding; driving real-life social impact</p>
        </div>
          </div>
      </div>
      </div>
  );
};

export default BitchyPlan;
