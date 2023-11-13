import { FaWhatsapp, FaInstagram, } from 'react-icons/fa';

const FooterEnd = () => {
    return (
        <div className="mx-16 my-5">
            <div className="flex justify-between items-center flex-wrap text-center ">
                <div className="first lg:order-1 order-2">
                    <h1 className="text-[#BEBEBE] font-semibold ">Bütün hüquqlar qorunur. © 2022 BIODERMA</h1>
                </div>
                <div className="second lg:order-2 order-1">
                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF]"><FaWhatsapp /></button>
                        <button className="px-2 py-2 text-white rounded-3xl bg-[#9CA3AF] ms-3"><FaInstagram /></button>
                </div>
                <div className="third lg:order-3 order-3">
                    <h1 className="text-[#BEBEBE] font-semibold">
                    Bu bir <span className='text-[#B175FF]'>Marcom</span> məhsuludur.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default FooterEnd