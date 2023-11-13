import image1 from "../images/background.png";
import image2 from "../images/back2.png";
import img2 from "../images/img2.png";
import img1 from "../images/img1.png";


const SectionOne = () => {
    return (
        <div className="my-5 mx-16 ">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1">
                <div className="lg:col-span-2 bg-no-repeat sm:bg-cover bg-center rounded-md min-[390px]:flex justify-center"
                    style={{
                        backgroundImage: `url(${image1})`,
                        width: "770px",
                        height: "456px"
                    }}>
                    <div className="body mt-[165px] ms-[60px]">
                        <h1 className='text-2xl'>Ləkəyə qarşı</h1>
                        <h1 className='text-2xl'> <span className="text-3xl font-semibold text-[#444A51 ">Parlaqladıcı</span> qayğı:
                            <h1 className="text-4xl text-[#009BC7]">Pigmentbio</h1></h1>
                    </div>
                    <div className="-mt-[110px] ms-[530px]">
                        <img src={img2} alt="" />
                    </div>
                </div>

                <div className="rounded-md border-2 border-[#DB3333] bg-no-repeat bg-cover -ms-8 "
                    style={{
                        backgroundImage: `url(${image2})`,
                        width: "450px",
                        height: "456px"
                    }}
                >
                    <div className="body mt-[20px] ms-[30px]">
                        <h1 className='text-2xl'>Ləkəyə qarşı</h1>
                        <h1 className='text-2xl text-[#444A51] '> <span className="text-3xl font-semibold text-[#444A51] ">Parlaqladıcı</span> qayğı:</h1>
                    </div>
                    <div className="body-two mt-[210px] ms-[20px] z-50">
                        <h1 className="text-[#757575] text-xl">Make-up removal</h1>
                        <h1 className="text-2xl font-semibold">Sensibio Micellar water, 1 l</h1>
                    </div>
                    <div className="-mt-[250px] ms-[280px]">
                        <img src={img1} alt="" />
                    </div>
                    <div className="endirim text-white text-bold rounded-md bg-[#DB3333] w-40 flex items-center justify-center h-11 ms-[20px]">
                        30% <span className="ms-2">Endirim</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SectionOne