import React from 'react'
import Bottom from '../../assets/bottom.png'
import BitchyBg from "../../assets/bitchy_background.png"
import BlueShape from "../../assets/blueShape.png"
import YellowShape from "../../assets/yellowShape.png"
import RedShape from "../../assets/redShape.png"
import Logo from "../../assets/logo_wingo.png";
import BitchyInsect from "../../assets/bitchyInsect.png"
import Cliva from '../cliva/Cliva'
import BitchyBgMobile from "../../assets/bitchy_mobile.png"
import BlueShapeMd from "../../assets/blueShape_md.png"
import YellowShapeMd from "../../assets/yellowShape_md.png"
import RedShapeMd from "../../assets/redShape_md.png"
import BitchyGrass from "../../assets/bitchy_grass.png"

const BitchyStory = () => {
  return (
    <div className=' relative bg-[#39C6CB]'>
        {/*website view */}
        <div>
    <img src={Bottom} alt="" />
        </div>

        <div className="text-[#EBE235] font-primaryRegular text-center md:text-3xl text-[1rem] font-bold mt-2 bg-[#39C6CB] p-5 pb-10" 
      style={{ 
        textShadow: "4px 4px 18px rgba(255, 255, 255, 0.6)",  // White glow
        WebkitTextStroke: "1px #F39734"  // White outline outside text
      }}>
        THE BITCHY STORY
    </div>
  
        <div className='hidden md:block'>
        <div className="bg-img">
        <img src={BitchyBg} alt="" />
    </div>
    <div className="absolute top-0 right-0" >
        <img src={Logo} alt="" className=' w-[60%]' style={{marginTop: "30%", }}/>
    </div>
    <div className="absolute bottom-0 left-0" style={{marginBottom: "18%", marginLeft:"16%"}}>
        <img src={BitchyInsect} alt="" className='w-[30%]'/>
    </div>
    <div className="absolute bottom-0 left-0 z-10" style={{marginBottom: "23%", marginLeft:"27%"}}>
        <Cliva/>
    </div>
    <div>
        <img src={BlueShape} alt="" className=" w-[60%] absolute top-0 " style={{marginTop:"12%"}}/>
        <div className=" absolute top-0 text-white font-secondRegular text-xl"  style={{marginTop:"15%", marginLeft:"4%", lineHeight:"2.5"}}> 
            <p>...Until she flew deeper into the forest. Shattered by the</p>
            <p>view of disparity, exclusion, greed, and corruption. so on.</p>
            <p>Selfishness reigned, and flowers drooped from the weight </p>
            <p>of indifference. </p>
            </div>   
    </div>

    <div>
        <img src={YellowShape} alt="" className=" w-[70%] h-[40%] absolute top-0 right-0" style={{marginTop:"18%"}}/>  
       <div className=" absolute top-0 right-0  font-secondRegular text-right"  style={{marginTop:"20%", marginRight:"4%",  }}> 
        <div className=' font-primaryRegular text-white text-xl' style={{WebkitTextStroke: "1px #228EFD", lineHeight:"2"}} >
        <p >NO LONGER SHE WILL BE A PASSIVE  </p>
        <p >OBSERVER </p>
        </div>
        
        <div className='text-[#FF0A0A] text-xl ' style={{lineHeight:"2"}}>
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
        <img src={RedShape} alt="" className=" w-[50%] absolute bottom-0 " style={{marginBottom:"2%"}}/>
        <div className=" absolute bottom-0 text-white  font-secondRegular text-center" style={{marginBottom:"7%"}} >
        <p className=' font-primaryRegular text-xl  ' style={{WebkitTextStroke: "1px #228EFD"}}>NEW ARENA IS AT THE FRONTIER  </p>
        <div className=' text-center pt-4 text-lg'>
            <p>As she gazed over the land she had planned to </p>
            <p>Reshape, Cliva smiled.</p>
        </div>
        </div>
      </div>
      </div>

      {/*mobile view */}
      <div className="block md:hidden relative">
      <div>
        <img src={BitchyBgMobile} alt="" />
      </div>

      <div className=' absolute top-0 z-10' style={{marginTop:"40%", marginLeft:"55%"}}>
        <img src={BitchyInsect} alt="" className=' w-[90%]'/>
      </div>

      <div className=' absolute top-0 '>
        <img src={BlueShapeMd} alt="" />
        <div className=" absolute top-4 text-white  font-secondRegular" style={{lineHeight:'2', marginLeft:"4%"}}>
        <p className=' font-primaryRegular ' style={{WebkitTextStroke: "1px #228EFD"}}>SHE WAS A DELICATE AND INNOCENT BUTTERFLY  </p>
      </div>
      <div className=" absolute top-0 text-white font-secondRegular text-sm capitalize"  style={{marginTop:"24%", marginLeft:"4%"}}> 
            <p>...Until she flew deeper into the Forest. </p>
            <p>shattered by the view of Disparity,</p>
            <p>   Exclusion, Greed, and Corruption. So on.</p>
            <p>Selfishness Reigned, and Flowers </p>
            <p>Drooped from the Weight of</p>
            <p> Indifference. </p>
            </div>   
      </div>

      <div className=' absolute top-0 ' style={{marginTop:"70%"}}>
        <img src={YellowShapeMd} alt=""/>
        <div className=" absolute top-0 right-0  font-secondRegular text-right text-sm"  style={{marginTop:"12%", marginRight:"4%",  }}> 
        <div className=' font-primaryRegular text-white' style={{WebkitTextStroke: "1px #228EFD", lineHeight:"2"}} >
        <p >NO LONGER SHE WILL BE A   </p>
        <p >PASSIVE OBSERVER </p>
        </div>
        
        <div className='text-[#FF0A0A]  pt-4 capitalize' style={{lineHeight:"2"}} >
            <p>Cliva has to become bitchy Cliva to guide the promised </p>
            <p>gains to the world from decentralisation tech. True </p>
            <p>change could come without a system, without a </p>
            <p>structure where all voices could be heard. So, Cliva set</p>
            <p> to work to build a network, a governance, one where </p>
            <p>the  suffering, the poor, and the innocent would have a </p>
            <p>place. Where no one would be ignored. Where greed </p>
            <p>would be replaced by generosity where cruelty would </p>
            <p>give way to compassion</p>
        </div>
       </div>
      </div>

      <div>
        <img src={RedShapeMd} alt="" />
        <div className=" absolute bottom-0 text-white  font-secondRegular text-center" style={{marginBottom:"100%"}} >
        <p className=' font-primaryRegular ' style={{WebkitTextStroke: "1px #228EFD", lineHeight:"2"}}>NEW ARENA IS AT THE FRONTIER  </p>
        <div className=' text-center pt-4 '>
            <p>As she gazed over the land she had planned to </p>
            <p>Reshape, Cliva smiled.</p>
        </div>
        </div>
      </div>

      <div className='relative '>
        <img src={BitchyGrass} alt="" className=' h-[20%]'/>
      <div className='absolute bottom-0 inset-0 flex items-center justify-center'>
        <Cliva className="w-[100%]"/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BitchyStory