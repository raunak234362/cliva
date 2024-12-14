import {Hero, VoteToEarn} from '../index'
import Wingoarena from '../wingoarena/Wingoarena';

const Layout = () => {
  return (
    <div className="w-screen flex flex-col overflow-hidden">
      <Hero/>
      <VoteToEarn/>
      <Wingoarena/>
    </div>
  );
};

export default Layout;