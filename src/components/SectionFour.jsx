import img3 from "../images/image3.png";
import img4 from "../images/image4.png";
import img5 from "../images/image5.png";
const SectionFour = () => {
  return (
    <div className="my-5 mx-16">
      <h1 className="text-2xl font-semibold">Dəri qulluğu rutini</h1>
      <div className="bg-black w-52 h-1 mt-3"></div>
      <div className="flex justify-between flex-wrap items-center my-5  text-center">
        <div className="one mt-3">
          <div className="img">
            <img src={img3} alt="/" />
          </div>
          <div className="OneBody">
            <h1 className="text-lg font-semibold mt-2">1. Addım: Təmizlə</h1>
            <h3 className="text-[#757575] my-4">Dəri tipinə uyğun təmizləyicilər</h3>
            <button className="border-2 border-black rounded-md w-56 py-1 mt-2">Kəşf et</button>
          </div>
        </div>
        <div className="two mt-3">
          <div className="one">
            <div className="img">
              <img src={img4} alt="/" />
            </div>
            <div className="OneBody">
              <h1 className="text-lg font-semibold mt-2">2. Addım: Müalicə et və qulluq
                (nəmləndir) et</h1>
              <h3 className="text-[#757575] my-4">Dəri tipinə uyğun təmizləyicilər</h3>
              <button className="border-2 border-black rounded-md w-56 py-1 mt-2">Kəşf et</button>
            </div>
          </div>
        </div>
        <div className="three mt-3">
          <div className="one ">
            <div className="img">
              <img src={img5} alt="/" />
            </div>
            <div className="OneBody">
              <h1 className="text-lg font-semibold mt-2">3. Addım: Günəşdən qoru
              </h1>
              <h3 className="text-[#757575] my-4">Dəri tipinə uyğun təmizləyicilər</h3>
              <button className="border-2 border-black rounded-md w-56 py-1 mt-2">Kəşf et</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour