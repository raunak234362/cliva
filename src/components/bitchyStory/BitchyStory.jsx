import React from 'react'
import Bottom from '../../assets/bottom.png'
import BitchyBg from "../../assets/bitchy_background.png"
import BlueShape from "../../assets/blueShape.png"
import YellowShape from "../../assets/yellowShape.png"
import RedShape from "../../assets/redShape.png"
import Logo from "../../assets/logo_wingo.png";
import BitchyInsect from "../../assets/bitchyInsect.png"
import Cliva from '../cliva/Cliva'

const BitchyStory = () => {
  return (
    <div className=' relative bg-[#39C6CB]'>
        <div>
    <img src={Bottom} alt="" />
        </div>

        <div className="text-[#EBE235] font-primaryRegular text-center text-[1rem] font-bold mt-2 bg-[#39C6CB] p-5 pb-10" 
      style={{ 
        textShadow: "4px 4px 18px rgba(255, 255, 255, 0.6)",  // White glow
        WebkitTextStroke: "1px #F39734"  // White outline outside text
      }}>
        THE BITCHY STORY
    </div>
    <div className="bg-img">
        <img src={BitchyBg} alt="" />
    </div>

    <div className="absolute top-0 right-0" >
        <img src={Logo} alt="" className=' w-[60%]' style={{marginTop: "6rem", }}/>
    </div>
    <div className="absolute bottom-0 left-0" style={{marginBottom: "12rem", marginLeft:"4rem"}}>
        <img src={BitchyInsect} alt="" className='w-[30%]'/>
    </div>
    <div className="absolute bottom-0 left-0 z-10" style={{marginBottom: "17rem", marginLeft:"15rem"}}>
        <Cliva/>
    </div>
    <div>
        <img src={BlueShape} alt="" className=" w-[60%] absolute top-0 " style={{marginTop:"10rem"}}/>
        <div className=" absolute top-0 text-white font-secondRegular"  style={{marginTop:"15rem", marginLeft:"4rem", lineHeight:"2.5"}}> 
            <p>...Until she flew deeper into the forest. Shattered by the</p>
            <p>view of disparity, exclusion, greed, and corruption. so on.</p>
            <p>Selfishness reigned, and flowers drooped from the weight </p>
            <p>of indifference. </p>
            </div>   
    </div>

    <div>
        <img src={YellowShape} alt="" className=" w-[70%] h-[40%] absolute top-0 right-5" style={{marginTop:"15rem"}}/>  
       <div className=" absolute top-0 right-0  font-secondRegular text-right"  style={{marginTop:"18rem", marginRight:"4rem", lineHeight:"2", }}> 
        <div className=' font-primaryRegular text-white' style={{WebkitTextStroke: "1px #228EFD"}} >
        <p >NO LONGER SHE WILL BE A PASSIVE  </p>
        <p >OBSERVER </p>
        </div>
        
        <div className='text-[#FF0A0A]'>
            <p>Cliva has to become bitchy Cliva to guide the promised gains to the</p>
            <p>world from decentralisation tech. True change could come without a</p>
            <p>system, without a structure where all voices could be heard. So, Cliva</p>
            <p>set to work to build a network, a governance, one where the </p>
            <p>suffering, the poor, and the innocent would have a place. Where no</p>
            <p>one would be ignored. Where greed would be replaced by generosity</p>
            <p>where cruelty would give way to compassion</p>
        </div>
       </div>
    </div>

      <div className=' flex justify-center'>
        <img src={RedShape} alt="" className=" w-[50%] absolute bottom-0 " style={{marginBottom:"2rem"}}/>
        <div className=" absolute bottom-0 text-white  font-secondRegular text-center" style={{marginBottom:"5rem"}} >
        <p className=' font-primaryRegular  ' style={{WebkitTextStroke: "1px #228EFD"}}>NEW ARENA IS AT THE FRONTIER  </p>
        <div className=' text-center pt-4'>
            <p>As she gazed over the land she had planned to </p>
            <p>Reshape, Cliva smiled.</p>
        </div>
        </div>
      </div>
        {/* <div className="shapeOne flex absolute top-0 " style={{marginTop:"10rem"}}>
            <div className="rectangle" style={{width:"25rem", height:"12rem", backgroundColor:"#252B7C", outlineColor:"2px #39C6CB"}}></div>
            <div className="triangle" style={{width:"0", height:"0", borderTop:"12rem solid #252B7C", borderRight:"12rem solid transparent"}}></div>
        </div> */}
    </div>
  )
}

export default BitchyStory