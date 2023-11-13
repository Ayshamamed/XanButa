import { FaPhoneAlt } from 'react-icons/fa';

const HeaderOne = () => {
    return (
        <div className=" grid grid-cols-5  w-full h-10 bg-[#6BACC8] ">
            <h1 className="flex justify-center items-center col-span-3  col-start-2 text-white text-center text-[9px] lg:text-[15px] leading-[20px]">Bioderma, Institut Esthederm ve Etat Pur rəsmi satış saytıdır.</h1>

            <div className="flex items-center space-x-3 mr-10">
                <FaPhoneAlt className="text-white text-[18px] hidden lg:block" />
                <p className="hidden lg:block font-poppins text-white text-[15px] leading-[20px] font-medium">
                    +994 12 123 4567
                </p>
            </div>


        </div>
    )
}

export default HeaderOne