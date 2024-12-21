
export const YellowBox = () => {
  return (
    <div className="relative">
      {/* Border wrapper */}
      <div
        className="absolute inset-0 bg-[#EC6403]"
        style={{
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div
        className="bg-[#FFD700] text-white p-6 flex flex-col justify-items-end items-end"
        style={{
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
          margin: "8px", // This creates the border effect
        }}
      >
        <div
          className="text-white text-wrap text-clip max-w-[70%] font-primaryRegular leading-8"
          style={{ WebkitTextStroke: "1px #228EFD" }}
        >
          NO LONGER SHE WILL BE A PASSIVE OBSERVER
        </div>
        <div className="text-[#FF0A0A] text-wrap text-clip max-w-[80%] font-secondRegular leading-8">
          Cliva has to become bitchy Cliva to guide the promised gains to the
          world from decentralisation tech. True change could come without a
          system, without a structure where all voices could be heard. So, Cliva
          set to work to build a network, a governance, one where the suffering,
          the poor, and the innocent would have a place. Where no one would be
          ignored. Where greed would be replaced by generosity where cruelty
          would give way to compassion
        </div>
      </div>
    </div>
  );
};
