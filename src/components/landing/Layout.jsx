import {Hero, VoteToEarn} from '../index'

const Layout = () => {
  return (
    <div className="w-screen flex flex-col overflow-hidden">
      <Hero/>
      <VoteToEarn/>
    </div>
  );
};

export default Layout;