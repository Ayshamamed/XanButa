import logo1 from "../images/image 6.png";
import logo2 from "../images/image 1.png";
import logo3 from "../images/image 7.png";
import logo4 from "../images/image 8.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { AiOutlineClose, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showKH, setShowKH] = useState(false);
  const handleshow = () => setShow(!show);
  
  const toggleShowKH = () => setShowKH(!showKH);

  return (
    <div className=" ">
       
        <div className="min-h-[70px] border-b bg-white">
          <div className="container mx-auto h-full flex items-center justify-between">
            <div className="min-w-[200px]">
              <img src={logo1} alt="logo" />
            </div>
            <div className=" lg:flex hidden items-center space-x-14">
              <img src={logo2} alt="image1" className="h-[30px]" />
              <img src={logo3} alt="image2" className="h-[30px]" />
              <img src={logo4} alt="image3" className="h-[30px]" />
            </div>
            <div className="lg:flex hidden  items-center space-x-8 ">
              <form className="flex items-center relative ">
                <input type="search"placeholder="Axtar" className="placeholder:text-[#444A51]  placeholder:text-lg border-slate-300  w-[253px] h-[34px] shadow-sm focus:outline-none placeholder:ps-2 rounded-md  sm:text-sm  "
                />
                <AiOutlineSearch className="text-[23px] text-[#444A51]  absolute right-[-2px] mr-[12px]" />
              </form>
              <NavLink>
                <FiHeart className="text-[23px] " />
              </NavLink>
              <NavLink>
                <AiOutlineShopping className="text-[23px] " />
              </NavLink>
              <div className="space-x-5 divide-x-[1px] divide-gray">
                <button className=" text-[16px] font-normal leading-[20px] underline">
                  AZ
                </button>
                <button className="p-3">EN</button>
              </div>
            </div>
          
            <div className="lg:hidden flex space-x-3 items-center ">
              <NavLink className="w-[35px] h-[35px] border border-[#E8E8E8] rounded-[6px] flex items-center justify-center">
                <AiOutlineSearch className="text-[23px]  " />
              </NavLink>
              <div>
                <NavLink className="w-[35px] h-[35px] border border-[#E8E8E8] rounded-[6px] flex items-center justify-center">
                  <FiHeart className="text-[23px] " />
                </NavLink>
              </div>
              <div
                onClick={handleshow}
                className=" bg-[#009BC7] w-[45px] h-[40px] rounded-md flex items-center justify-center"
              >
                <RxHamburgerMenu className="text-[30px] text-white "/>
              </div>
            </div>

          </div>
        </div>
        
        <div className="lg:h-[70px]  h-0    lg:block    border-b border-gray">
          <div className="container lg:flex hidden mx-auto h-full  items-center justify-between">
            <ul className="flex flex-col  lg:flex-row absolute z-20  space-x-12">
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Brendlər və Məhsullar</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.px]">
                <NavLink>Üz qulluğu</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Bədən qulluğu</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Günəş qoruyucuları</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Gözəl yaş alma</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Qulluq setləri</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Aksiyalar və Kompaniyalar</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Haqqımızda</NavLink>
              </li>
              <li className=" text-[14px] font-semibold leading-[17.5px]">
                <NavLink>Faydalı</NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`absolute top-0 left-0  delay-200 duration-300 lg:hidden block  ${
              show ? " left-[0px]" :"left-[-701px]" 
            }  w-full z-[55]  bg-white h-full`}
          >
            <div className="flex py-2 justify-between items-center  border-t-2 border-[#DBE5EA] px-[20px]">
              <h2 className="tetx-black text-[20px] font-semibold">Menu</h2>
             <div className="w-[32px] h-[32px] bg-[#1F3C4B] rounded-[6px] flex items-center justify-center" onClick={handleshow}>
             <AiOutlineClose className="text-white text-[20px]"/>
             </div>
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
              <NavLink className="text-black text-[14px] font-medium">Brendlər və məhsullar</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" onClick={toggleShowKH} />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Üz qulluğu</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Bədən qulluğu</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Günəş Qoruyucuları</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]"/>
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Gözəl yaş alma</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2  border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Qulluq setləri</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2  border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Aksiyalar və Kompaniyalar</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px] ">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Haqqımızda</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 px-[20px] border-b-2 border-[#DBE5EA]">
              <div>
                <NavLink className="text-black text-[14px] font-medium">Faydalı</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
          </div>

          
        </div>
    </div>
  )
}

export default Header