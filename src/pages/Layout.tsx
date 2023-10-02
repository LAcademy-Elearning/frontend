import { useState } from "react";
import Modal from "../components/Modal";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  const [isBelowMedium,setIsBelowMedium] = useState(true);
  return (
    <div className=" min-h-[100vh] flex relative">
        <SideBar isBelowMedium = {isBelowMedium} />
      <div className="flex-grow bg-darkPrimary-dark min-h-100vh flex flex-col p-4">
        <TopBar isBelowMedium={isBelowMedium}  setIsBelowMedium= {setIsBelowMedium} />
        <main className="bg-black flex-1">
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
