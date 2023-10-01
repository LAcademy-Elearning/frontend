import { useState } from "react"
import Modal from "../components/Modal"

const Menu = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="hoverEffect w-8 h-8 md:w-9 md:h-9 flex justify-center items-center">
        <img onClick={()=>setIsOpen(true)} className=" w-4 h-4 md:w-5 md:h-5" src="/icn.svg" alt="menuIcon" />
        <Modal position="flex justify-end" isopen={isOpen} onclose={setIsOpen}>
          <div className=" text-textColor h-[40%] min-w-[20%] mr-3 mt-16 bg-darkPrimary-complimentary">
            this is the menu modal
          </div>
        </Modal>
    </div>
  )
}

export default Menu