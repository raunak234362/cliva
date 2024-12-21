

export const BlueBox = () => {
  return (
    <div className="relative">
      {/* Border wrapper */}
      <div
        className="absolute inset-0 bg-[#228EFD]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div
        className="bg-[#252B7C] text-white p-6 relative"
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
          margin: "8px", // This creates the border effect
        }}
      >
        <div className="font-secondRegular max-w-xl space-y-4 pr-20">
          ...Until She Flew Deeper Into The Forest. Shattered By The View Of
          Disparity, Exclusion, Greed, And Corruption. So On. Selfishness
          Reigned, And Flowers Drooped From The Weight Of Indifference.
        </div>
      </div>
    </div>
  );
};
