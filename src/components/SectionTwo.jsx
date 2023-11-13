import products from "../data/data";


const SectionTwo = () => {
  return (
    <div className="my-10 mx-16">
      <h1 className="text-2xl text-[#009BC7]">Endirimli məhsullar </h1>
      <div className="bg-[#009BC7] w-52 h-1 mt-3"></div>

      <div className="grid lg:grid-cols-4 gap-6 ">
        {products.map(item => {
          return <div className=" lg:w-full sm:grid-cols-1 rounded-md my-10 " key={item.id}>
            
           <div className="lg:w-full bg-[#EEEEEE] h-80 rounded-md  ">
            <div className="flex">
            <div className= "my-5 deliveringone bg-[#009BC7] w-28 h-8 rounded-md ms-2 text-white flex justify-center items-center" >Çox satılan</div>
            <div className={item.delivering ? "my-5 deliveringtwo bg-[#DB3333] w-36 h-8 rounded-md ms-2 text-white flex justify-center items-center" :""}>{item.delivering ? "Pulsuz çatdırılma" : ""}</div>
            </div>
           <img src={item.img} alt="/" className="w-24 h-52 ms-28  " />
           </div>

            <div className="body leading-8 ">
              <h2 className="text-[#757575] leading-8">{item.title}</h2>
              <h3 className="font-semibold text-xl leading-8">{item.About}</h3>
              <p className="text-[#444A51] leading-8">{item.price}.00 AZN</p>
              <button className="text-[#009BC7] leading-8 text-xl w-full py-2 border-2 rounded-md border-[#009BC7]">Səbətə at </button>
            </div>
          </div>
        })}
      </div>







    </div>
  )
}

export default SectionTwo