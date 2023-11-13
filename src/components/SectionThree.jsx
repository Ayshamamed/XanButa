import video from "../videos/video.mp4";
import pic from "../images/screen.png"
const SectionThree = () => {
    return (
        <div className="my-5 mx-16 text-center ">
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="two rounded-md">
                    <video className="w-[700px] lg:h-[360px] rounded-md  " controls src={video}></video>
                </div>
                <div className="one rounded-md ">
                    <img className="rounded-md lg:w-[700px] lg:h-[360px]" src={pic} alt="/" />
                </div>

            </div>
            <button className=" text-[#009BC7] text-md border-2 border-[#009BC7] py-2 px-20 mt-7 rounded-md">Daha çox</button>
        </div>
    )
}

export default SectionThree