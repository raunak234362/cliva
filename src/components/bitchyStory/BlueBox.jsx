import BlueShapeHead from "../../assets/BlueShapeHead.png";

export const BlueBox = () => {
  return (
    <div>
      <div
        className="w-full h-1/2 items-center flex flex-col"
        style={{
          backgroundImage: `url(${BlueShapeHead})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="sm:w-3/5 items-center flex flex-col gap-4 m-5">
        <div
          className="text-white text-wrap text-clip font-primaryRegular leading-8 uppercase"
          style={{ WebkitTextStroke: "1px #228EFD" }}
        >
          She was a delicate & innocent butterfly
        </div>
        <div className="text-white text-wrap text-clip  font-secondRegular leading-8">
        ...Until she flew deeper into the forest. Shattered by the view of disparity, exclusion, greed, and corruption. so on. Selfishness reigned, and flowers drooped from the weight of indifference. 
        </div>
        </div>
      </div>
    </div>
  );
};
