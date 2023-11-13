
import img from "../images/sec5.png";
import img1 from "../images/screen.png";
import img2 from "../images/background.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



const SectionFive = () => {
    return (
        <div className="container mx-auto">
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-[550px] "
            >
                <SwiperSlide className="">

                    <div className="bg-no-repeat bg-cover bg-center rounded-md"
                        style={{
                            backgroundImage: `url(${img})`,
                            width: "100%",
                            height: "550px"
                        }}>
                        <div className="ms-16 py-5 ">

                            <h1 className="text-3xl text-white">MEGA DISCOUNT OF </h1>
                            <p className="text-3xl text-white mt-2">THE MONTH</p>
                            <div className="w-40 h-1 bg-white mt-3"></div>
                            <h1 className="text-3xl text-white mt-3" >UP TO 30% OFF</h1>

                            <div className="end mt-72">
                                <h1 className="text-xl text-white">Make-up removal</h1>
                                <h1 className="text-xl font-semibold">Sensibio Micellar water, 1 l</h1>
                            </div>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=" bg-no-repeat bg-cover bg-center rounded-md"
                        style={{
                            backgroundImage: `url(${img1})`,
                            width: "100%",
                            height: "550px"
                        }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" bg-no-repeat bg-cover bg-center rounded-md"
                        style={{
                            backgroundImage: `url(${img2})`,
                            width: "100%",
                            height: "550px"
                        }}></div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default SectionFive
