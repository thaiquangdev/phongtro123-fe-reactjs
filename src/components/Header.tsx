import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-phongtro.svg";
import defaultUserImage from "@/assets/images/default_user.svg";
import { ImLocation } from "react-icons/im";
import { CiFilter } from "react-icons/ci";
import { Button } from "./ui/button";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoFileDirectory } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { BsBoxArrowInRight } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { navbars } from "@/utils/constrants";
import { MdMenu } from "react-icons/md";
import { useSidebar } from "@/contexts/SideBarProvider";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { openSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleOpenAuth = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutSide = (event: MouseEvent) => {
    if (menuRef && !menuRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <header className="bg-white text-black shadow-sm sticky top-0 z-[1021]">
      <div className="xl:max-w-[1320px] lg:max-w-[1140px] h-[61px] mx-auto w-full px-[5px]">
        <div className="flex items-center justify-between border-b border-borderColor ">
          <div className="flex">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-[190px] h-[60px] object-contain max-w-full max-h-full"
              />
            </Link>
            <div className="md:flex hidden ml-6">
              <div className="w-[350px] h-full flex items-center px-4">
                <div className="w-full">
                  <div className="flex relative bg-white ">
                    <Button className="bg-[#f3f6f7] text-black hover:bg-gray-300 text-left px-4 w-full h-[35px] flex justify-start items-center cursor-text rounded-full">
                      <ImLocation size={12} className="mr-2" />
                      <span className="text-[14px]">Tìm theo khu vực</span>
                    </Button>
                    <Button className="bg-white border border-borderColor ml-[5px] text-black hover:bg-gray-300  text-left px-4 w-[90px] h-[35px] flex justify-start items-center rounded-full">
                      <CiFilter size={12} />
                      <span className="text-[14px]">Bộ lọc</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <Link
                to="/tin-da-luu"
                className="hidden lg:flex items-center px-[10px] py-[5px] rounded-full hover:bg-hoverBg "
              >
                <IoMdHeartEmpty size={20} className="mr-2" />
                <span className="text-[14px]">Tin đã lưu</span>
              </Link>
              <Link
                to="/tin-da-luu"
                className="hidden lg:flex items-center px-[10px] py-[5px] rounded-full hover:bg-hoverBg mr-6"
              >
                <GoFileDirectory size={20} className="mr-2" />
                <span className="text-[14px]">Quản lý</span>
              </Link>
              <div ref={menuRef} className="relative hidden lg:block">
                <button
                  onClick={handleOpenAuth}
                  className="flex items-center bg-transparent rounded-full p-1 hover:bg-gray-100 transition"
                >
                  <img
                    src={defaultUserImage}
                    alt="Ảnh đại diện tài khoản"
                    className="w-8 h-8 border border-gray-300 rounded-full p-0.5 mr-2"
                  />
                  <span className="text-sm font-medium">Tài khoản</span>
                  <FaCaretDown className="ml-1" />
                </button>
                {isOpen && (
                  <ul className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-md py-2 z-10  transition duration-300">
                    <li className="w-full">
                      <Link
                        to="/tao-tai-khoan-moi"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                      >
                        <FiUserPlus className="mr-2" /> Tạo tài khoản mới
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        to="/dang-nhap"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                      >
                        <BsBoxArrowInRight className="mr-2" /> Đăng nhập
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <Link
                to="/dang-tin"
                className="hidden lg:flex items-center justify-center ml-6 py-[5px] px-[10px] bg-redBg rounded-xl text-white"
              >
                <RiEditBoxLine className="mr-2" />
                <span className="text-[14px]">Đăng tin</span>
              </Link>
            </div>
          </div>
          {/* mobile menu */}
          <div className="flex lg:hidden">
            <div className="flex items-center" onClick={openSidebar}>
              <MdMenu size={20} className="mr-2" />
              <span className="text-[16px]">Danh mục</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:max-w-[1020px] lg:max-w-[980px] lg:block mx-auto">
        <nav className="h-[40px] block">
          <ul className="flex items-center h-full">
            {navbars.map((navbar) => (
              <li
                key={navbar.title}
                className="h-full flex items-center justify-center mr-6"
              >
                <Link to={navbar.url} className="flex text-black text-[14px]">
                  {navbar.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
