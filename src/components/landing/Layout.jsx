import BitchyPlan1 from "../bitchyPlan/BitchyPlan1";
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
      <BitchyPlan1/>
      <Wingonomics/>
    </div>
  );
};

export default Layout;
