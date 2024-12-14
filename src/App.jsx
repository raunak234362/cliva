
import { Navbar } from './components/index';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className=" flex flex-col overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
