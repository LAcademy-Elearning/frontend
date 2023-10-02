import { useState } from "react";
import Modal from "../components/Modal";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  const [isBelowMedium,setIsBelowMedium] = useState(true);
  return (
    <div className=" min-h-screen flex relative">
      <SideBar isBelowMedium = {isBelowMedium} />
      <div className="flex-grow bg-darkPrimary-dark min-h-screen p-4">
        <TopBar isBelowMedium={isBelowMedium}  setIsBelowMedium= {setIsBelowMedium} />
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
