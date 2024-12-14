import { Decentralized, Hero, VoteToEarn } from "../index";

const Layout = () => {
  return (
    <div className="w-[100vw] flex flex-col overflow-hidden gap-0">
      <Hero />
      <VoteToEarn />
      <Decentralized/>
    </div>
  );
};

export default Layout;
