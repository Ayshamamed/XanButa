import logo from "../images/image 6.png";
import bio from "../images/image 1.png";
import est from "../images/image 7.png";
import eta from "../images/image 8.png";
import { FaFacebook, FaInstagram, } from 'react-icons/fa';
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="h-auto mx-0 lg:mx-16 mt-7">
            <div className="w-full grid lg:grid-cols-4 lg:place-items-start place-items-center lg:divide-x-2 ">
                <div className=" w-56 order-first lg:order-first ">
                    <img className="-mt-8" src={logo} alt="/" />
                    <h1 className="font-semibold ">NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir. NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı</h1>
                </div>
               
                <div className=" w-full lg:col-span-3 ps-0 lg:ps-14 ">
                    <div className="grid lg:grid-cols-4 gap-4 ">
                        <div className=" order-0 lg:order-none ">
                            <h1 className="font-semibold text-2xl flex justify-center lg:justify-start items-center min-[1024px]:my-0 min-[390px]:my-9">Kateqoriyalar</h1>
                            <ul className=" leading-9 text-[#444A51] grid grid-cols-2 lg:grid-cols-none items-center lg:space-x-0 space-x-0 lg:space-x-6 place-items-center w-[90%]">
                                <li className="mt-0 lg:mt-3">
                                    <NavLink >Brendlər və Məhsullar</NavLink>
                                </li>
                                <li>
                                    <NavLink>Qulluq setləri</NavLink>
                                </li>
                                <li>
                                    <NavLink>Günəş qoruyucuları</NavLink>
                                </li>
                                <li>
                                    <NavLink> Göz yaş alma</NavLink>
                                </li>
                                <li>
                                    <NavLink>Üz qulluğu </NavLink>
                                </li>
                                <li>
                                    <NavLink>Bədən qulluğu</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className=" order-0 lg:order-none">
                            <h2 className="font-semibold text-xl flex justify-center lg:justify-start items-center min-[1024px]:my-0 min-[390px]:my-9">Şirkət</h2>
                            <ul className="leading-9 text-[#444A51] grid grid-cols-2 lg:grid-cols-none items-center  space-x-0 lg:space-x-6 place-items-center w-[80%]  ">
                                <li className="mt-3">
                                    <NavLink >Haqqımızda</NavLink>
                                </li>
                                <li>
                                    <NavLink>Faydalı</NavLink>
                                </li>
                                <li>
                                    <NavLink>Aksiyalar və Kompaniyalar</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className=" order-0 lg:order-none">
                            <h3 className="text-xl font-semibold flex justify-center lg:justify-start items-center min-[1024px]:my-0 min-[390px]:my-9">Kömək</h3>
                            <ul className="leading-9 text-[#444A51] grid grid-cols-2 lg:grid-cols-none items-center lg:space-x-0 space-x-0 lg:space-x-6 place-items-center w-[90%]">
                                <li className="mt-3">
                                    <NavLink >FAQ</NavLink>
                                </li>
                                <li>
                                    <NavLink>Ödəniş və çatdırılma</NavLink>
                                </li>
                                <li>
                                    <NavLink>Zəmanət şərtləri</NavLink>
                                </li>
                                <li>
                                    <NavLink>Mağaza ünvanları</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="lg:col-span-4 order-first lg:order-3 h-full flex items-center justify-between  space-x-12  mx-[40px] ">
                            <div className=" lg:grid lg:grid-cols-4 lg:gap-6 sm:grid-cols-4 gap-0 flex  justify-between items-center  ">

                                <div className=" lg:px-7 lg:py-6 sm:border-2 lg:w-52 lg:h-40 w-40 h-10 rounded-md border-[#444A51] my-8 text-center">
                                    <img src={bio} alt="/" className=" " />
                                    <div className="mt-9 hidden sm:block">
                                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF]"><FaFacebook /></button>
                                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF] ms-2"><FaInstagram /></button>
                                    </div>

                                </div>


                                <div className=" lg:px-7 lg:py-6 sm:border-2 lg:w-52 lg:h-40 w-40 h-10 rounded-md border-[#444A51] my-8 text-center">
                                    <img src={est} alt="/"className="" />
                                    <div className="mt-4 hidden  sm:block ">
                                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF]"><FaFacebook /></button>
                                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF] ms-2"><FaInstagram /></button>
                                    </div>

                                </div>


                                <div className="lg:px-7 lg:py-6 sm:border-2 lg:w-52 lg:h-40 w-40 h-10 rounded-md border-[#444A51] my-8 text-center">
                                    <img src={eta} alt="/"className="" />
                                    <div className="mt-9 hidden sm:block">
                                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF]"><FaFacebook /></button>
                                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF] ms-2"><FaInstagram /></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer