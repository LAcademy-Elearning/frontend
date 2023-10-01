import Modal from "../components/Modal";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className=" min-h-screen flex relative">
      <SideBar />
      <div className="flex-grow bg-darkPrimary-dark min-h-screen p-4">
        <TopBar />
        <main>
          <Outlet />
        </main>
      </div>
      {/* menu modal */}
      <Modal position="" isopen={false} onclose={()=>{}}>
        
      </Modal>

    </div>
  );
};

export default Layout;
