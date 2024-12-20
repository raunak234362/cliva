import Cliva from "../cliva/Cliva";

export const Info = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className="font-secondRegular text-3xl text-wrap w-full  text-[#228EFD]  text-center  pb-10"
          style={{
            WebkitTextStroke: "1px black",
            textShadow: "0 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Empowering the true believers of decentralization. Bitchy CLIVA brings
          back the revolutionary spirit that sparked blockchain & Web3 adoption.
        </div>

        <div className="flex justify-center mb-10">
            <Cliva />
        </div>


      </div>
    </>
  );
};
