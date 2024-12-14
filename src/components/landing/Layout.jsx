import { Decentralized, Hero, VoteToEarn } from "../index";
import Wingoarena from '../wingoarena/Wingoarena';

const Layout = () => {
  return (
    <div className="w-[100vw] flex flex-col overflow-hidden gap-0">
      <Hero />
      <VoteToEarn />
      <Decentralized/>
      <Wingoarena/>
    </div>
  );
};

export default Layout;
