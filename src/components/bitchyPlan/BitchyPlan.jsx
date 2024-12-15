import React from 'react'
import GreenShape from "../../assets/greenShape.png"
import LeftFlower from "../../assets/flower_left.png"
import RightFlower from "../../assets/flower_right.png"
import Earth from "../../assets/earth.png"
import BlueShape01 from "../../assets/blueShape_01.png"
import Branch from "../../assets/branch.png"
import Catterpillar from "../../assets/catterpiller.png"
import PinkShape from "../../assets/pinkShape.png"

const BitchyPlan = () => {
  return (
    <div className=' relative bg-[#4BB149]'>

<div className="text-[#EBE235] font-primaryRegular text-center md:text-3xl uppercase text-[1rem] font-bold mt-2  p-5 pb-10" 
      style={{  WebkitTextStroke: "1px #F39734" 
      }}>
        bitchy plan.. Roadmap
    </div>

    <div className=' absolute top-0' style={{marginTop:"-5%"}}>
        <img src={LeftFlower} alt="" className=' w-[30%] z-100' />
    </div>

  
{/*------------------------------------first flight---------------------------- */}
    <div className='relative'>
      <img src={GreenShape} alt="" className=" w-[55%]  " style={{marginTop:"5%"}}/>
      <div className="text-[#EBE235] font-primaryRegular absolute top-6 left-0 text-center md:text-2xl uppercase text-[1rem] font-bold mt-2  p-5 pb-10" 
      style={{marginLeft:"10%" , 
        WebkitTextStroke: "1px #F39734" 
      }}>
        first flight
    </div>

    <div className=' absolute top-0 text-2xl font-secondRegular text-[#97E996]'
     style={{marginTop:"8%", marginLeft:"5%", lineHeight:"2"}}>
        <p>Website launch</p>
        <p>Community building</p>
        <p>Worldwide marketing campaigns</p>
        <p>Presale takeoff</p>
        <p>Creation of token contracts</p>
    </div>

    <div>
        <img src="" alt="" />
    </div>

    <div className=' flex justify-end absolute top-0 right-0' style={{marginTop:"-15%", marginRight:"5%"}}>
        <img src={Earth} alt="" className=' w-[40%] z-100'  />
    </div>

    <div className=' absolute  top-5 left-0' style={{marginLeft:"38%"}}>
        <img src={RightFlower} alt="" />
    </div>
    </div>

    {/*-------------------------------------Pollination-------------------------------------------- */}
    <div className=' relative'>
        <div className=' flex justify-end'>
        <img src={BlueShape01} alt="" className=' w-[55%] '/>
        </div>

        <div className="text-[#EBE235] font-primaryRegular absolute top-10 right-0  md:text-2xl uppercase text-[1rem] font-bold mt-2  p-5 pb-10" 
      style={{marginRight:"10%" , 
        WebkitTextStroke: "1px #F39734" ,
        lineHeight:"2"
      }}>
       <p>Pollination: </p>
       <p>Expanding the horizon</p>
    </div>

    <div className=' absolute top-0 right-0 text-2xl font-secondRegular text-white'
     style={{marginTop:"12%", marginRight:"15%", lineHeight:"2"}}>
        <p> Audits and public disclosure of smart contract</p>
        <p>Marketing using influential voices</p>
        <p>Community building campaigns</p>
    </div>
        <div className=' absolute top-10'>
      <img src={Branch} alt="" className=' w-[40%] ' />
        </div>
    </div>

    {/*----------------------------catterpillar-------------------------------------- */}

    <div className=' relative'>
        <div className=' flex justify-center' style={{marginTop:"5%"}}>
            <img src={PinkShape} alt="" className=' w-[70%] ' />
        </div>

        <div className="text-[#EBE235] font-primaryRegular absolute top-10 md:text-2xl uppercase text-[1rem] font-bold mt-2  p-5 pb-10" 
      style={{ 
        marginLeft:"30%",
        WebkitTextStroke: "1px #F39734" ,
        lineHeight:"2"
      }}>
       <p>Swarming: </p>
       <p>Massive communal efforts</p>
    </div>

    <div className=' absolute top-0 text-2xl font-secondRegular text-[#F33B19]'
     style={{marginTop:"12%", marginLeft:"30%", lineHeight:"2"}}>
        <p>Vote-to-earn platform development</p>
        <p>Vote to Earn Mechanism:</p>
        <p>Web3 crowdsourcing + gig economy + volunteering platform development</p>
        <p>DEX listings</p>
        <p>Social cause drive & funding; driving real-life social impact</p>
    </div>

    <div className=' absolute top-0 right-0 flex justify-end' style={{marginTop:"-10%", marginRight:"10%"}}>
        <img src={Catterpillar} alt="" className=' w-[30%] ' />
    </div>
    </div>
        
    </div>
  )
}

export default BitchyPlan