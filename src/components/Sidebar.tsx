import { useSidebar } from "@/contexts/SideBarProvider";
import logo from "@/assets/images/logo-phongtro.svg";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { RiEditBoxLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { navbarMenus } from "@/utils/constrants";

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[1021]"
          onClick={closeSidebar}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-[1022] duration-300 ease-in-out`}
      >
        <div className="w-full px-6 py-2 flex items-start justify-between">
          <Link to="/">
            <img
              src={logo}
              alt="logo-mobile"
              className="w-[170px] h-[45px] object-contain"
            />
          </Link>
          <Button onClick={closeSidebar}>
            <IoCloseSharp />
          </Button>
        </div>
        <div className="w-full h-full p-4 bg-[#f4f7f6]">
          <div className="flex flex-wrap mb-4 mx-[-4px]">
            <div className="w-1/2 px-[4px]">
              <Link
                to="/dang-nhap"
                className="flex items-center justify-center gap-2 w-full text-[14px] border border-black rounded-full py-[7px] px-[14px]"
              >
                <BsBoxArrowInRight size={20} />
                Đăng nhập
              </Link>
            </div>
            <div className="w-1/2 px-[4px]">
              <Link
                to="/tao-tai-khoan-moi"
                className="flex items-center justify-center gap-2 w-full text-[14px] border border-black rounded-full py-[7px] px-[14px]"
              >
                <FiUserPlus size={20} />
                Đăng ký
              </Link>
            </div>
            <div className="w-full mt-2">
              <Link
                to="/dang-tin"
                className="flex items-center justify-center gap-2 w-full text-[14px] text-white bg-redBg rounded-full py-[7px] px-[14px]"
              >
                <RiEditBoxLine size={20} />
                Đăng tin mới
              </Link>
            </div>
          </div>
          <div className="bg-white p-4 mb-3 rounded">
            <ul>
              {navbarMenus.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.url}
                    className="flex justify-between text-[16px] py-[0.7rem] border-b border-borderColor"
                  >
                    <div className="flex items-center">
                      <RiEditBoxLine size={20} className="mr-4" />
                      <span>{item.title}</span>
                    </div>
                    <span>
                      <IoIosArrowForward size={20} className="text-redColor" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
