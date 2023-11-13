
import image2 from "../images/back2.png";
import img from "../images/sec5.png";
import img1 from "../images/screen.png";
import img2 from "../images/background.png";
import img3 from "../images/img2.png";
import img4 from "../images/img1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const SecOne = () => {
    return (
        <div className="container mx-auto my-5 ">
            <div className="flex justify-between items-center flex-wrap">
                <div className="one">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper w-[535px] h-[280px] lg:w-[770px] lg:h-[460px]"
                    >
                        <SwiperSlide className="">

                            <div className="w-full h-[270px] lg:w-[770px] lg:h-[496px] lg:bg-cover lg:bg-no-repeat lg:bg-center relative rounded-md"
                                style={{
                                    backgroundImage: `url(${img2})`,
                                    width: "770px",
                                    height: "460px"
                                }}>
                                <div className="ms-16 flex items-center h-full   ">
                                    <div className=" w-[250px]">
                                        <h1 className='text-2xl'>Ləkəyə qarşı</h1>
                                        <h2 className='text-2xl'> <span className="text-3xl font-semibold text-[#444A51] ">Parlaqladıcı</span> qayğı:
                                            <h3 className="text-4xl text-[#009BC7]">Pigmentbio</h3></h2>
                                    </div>
                                    <div className="mt-[120px] ms-[530px] absolute">
                                        <img src={img3} className="" alt="" />
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="background bg-no-repeat bg-contain rounded-md"
                                style={{
                                    backgroundImage: `url(${img1})`,
                                    width: "770px",
                                    height: "550px"
                                }}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="background bg-no-repeat bg-cover  rounded-md"
                                style={{
                                    backgroundImage: `url(${img})`,
                                    width: "100%",
                                    height: "550px"
                                }}></div>
                        </SwiperSlide>

                    </Swiper>
                </div>
              
                <div className="rounded-md border-2 lg:mx-0 mx-10  border-[#DB3333] bg-no-repeat bg-cover  "
                    style={{
                        backgroundImage: `url(${image2})`,
                        width: "450px",
                        height: "456px"
                    }}
                >
                    <div className="body mt-[20px] ms-[30px]">
                        <h1 className='text-2xl'>Ləkəyə qarşı</h1>
                        <h2 className='text-2xl text-[#444A51] '>  Parlaqladıcı  <span className="text-3xl font-semibold text-[#444A51] ">qayğı:</span></h2>
                       

                        
                    </div>
                    <div className="body-two mt-[210px] ms-[20px] z-50">
                        <h3 className="text-[#757575] text-xl">Make-up removal</h3>
                        <h4 className="text-2xl font-semibold">Sensibio Micellar water, 1 l</h4>
                    </div>
                    <div className="-mt-[270px] lg:ms-[280px] lg:-mt-[260px] ms-[250px]">
                        <img src={img4} alt="" />
                    </div>
                    <div className="endirim text-white text-bold rounded-md bg-[#DB3333] w-40 flex items-center justify-center h-11 ms-[20px] ">
                        30% <span className="ms-2">Endirim</span>
                    </div>
                </div>

                </div>

            </div>
      
    )
}

export default SecOne