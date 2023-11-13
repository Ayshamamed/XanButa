import one from"../images/screen1.png";
import two from"../images/screen2.png";
import three from"../images/screen3.png";
import four from"../images/screen4.png";

const SectionSix = () => {
    return (
        <div className=" bg-[#FFC52D] my-5 ">
            <div className="mx-16">
                <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
                    <div className="flex justify-center items-center">
                        <img src={one} alt="" />
                        <h1 className="font-semibold">Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={two} alt="" />
                        <h2 className="font-semibold">Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={three} alt="" />
                        <h3 className="font-semibold">Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi</h3>
                    </div>
                    <div className="flex justify-center items-center ">
                        <img src={four} alt="/" />
                        <h4 className="font-semibold divide-x-2">Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionSix