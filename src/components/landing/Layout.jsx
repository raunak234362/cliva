import BitchyStory from "../bitchyStory/BitchyStory";
import { Decentralized, Hero, VoteToEarn, Wingonomics, Wingoarena } from "../index";


const Layout = () => {
  return (
    <div className="w-[100vw] flex flex-col overflow-hidden gap-0">
      <Hero />
      <VoteToEarn />
      <Decentralized/>
      <Wingoarena/>
      <BitchyStory/>
      <Wingonomics/>
    </div>
  );
};

export default Layout;
