
import frame from "../assets/Frame27.png"; // Replace with your butterfly image path
import queen from "../assets/background-4.png"; // Replace with your Join Cliva image path

export default function DefiFU() {
  return (
    // bg-back_place bg-cover bg-center bg-fixed
    <div className=" font-primaryRegular h-5/6 w-full">
        <div className=" bg-back_place bg-fixed bg bg-cover bg-center ">
            <img src={frame} alt="voting" className="object-left w-1/4 h-1/4 z-10 " />
            <p className="font-2xl pt-5">
                THE FUTURE OF DECENTRALIZATION <br />
                HAS ARRIVED!!
            </p>

        </div>
        <div>
          <img src={queen} alt="voting" className="object-right w-full z--10 h-6/6" />
        </div>
    </div>

  );
}
 