import BitchyPlan from "../bitchyPlan/BitchyPlan";
import BitchyStory from "../bitchyStory/BitchyStory";
import { Decentralized, Hero, VoteToEarn, Wingonomics, WingoArena1 } from "../index";


const Layout = () => {
  return (
    <div className="w-[100vw] flex flex-col overflow-x-hidden gap-0">
      <Hero />
      <VoteToEarn />
      <Decentralized/>
      <WingoArena1/>
      <BitchyStory/>
      <BitchyPlan/>
      <Wingonomics/>
    </div>
  );
};

export default Layout;
