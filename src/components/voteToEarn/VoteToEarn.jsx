import BuVoting from "../../assets/rb_214.png"; // Replace with your butterfly image path
import clivavotinf from "../../assets/IMG_4442.png"; // Replace with your Join Cliva image path
import cloud2 from "../../assets/cloud2.png";


const VoteToEarn = () => {
   return (
      <div className="flex justify-center px-10  font-primaryRegular bg-normal h-screen w-full">
        <div className="z-50 flex justify-center items-center flex-col gap-4 ">
          <div className="col-span-2 text-[#228EFD] text-3xl">
            <p>VOTE TO EARN</p>
          </div>
          <div className="col-span-2 text-[#fff] text-2xl font-secondRegular">
            <p>
              Empowering the true believers <br />
              of decentralization. Bitchy <br />
              CLIVA brings back the <br /> revolutionary spirit that <br />
              sparked blockchain & Web3 <br /> adoption.
            </p>
          </div>
        </div>
        <div className="z-50">
          <div>
            <img
              src={BuVoting}
              alt="voting"
              className="absolute right-0 object-contain w-fit h-max"
            />
          </div>
          <div className="pt-40">
            <img
              src={clivavotinf}
              alt="Butterfly"
              className="w-full h-[50vh] object-contain"
            />
          </div>
        </div>
        <div className="absolute translate-y-24 z-0">
                  <img src={cloud2} alt="" />
                </div>
      </div>
    );
}

export default VoteToEarn