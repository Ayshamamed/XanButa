import FooterEnd from "../common/FooterEnd.jsx";
import Footer from "../common/Footer.jsx";
import Header from "../common/Header";
import HeaderOne from "../common/HeaderOne";
import SectionFive from "../components/SectionFive.jsx";
import SectionFour from "../components/SectionFour.jsx";
import SectionSix from "../components/SectionSix.jsx";
import SectionThree from "../components/SectionThree.jsx";
import SectionTwo from "../components/SectionTwo.jsx";
import SecOne from "../components/SecOne.jsx";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="">
            <HeaderOne />
            </div>
            <div className="">
            <Header />
            </div>
            
                <div className="order-1 lg:order-1">
                <SecOne/>
                </div>
               <div className="order-4 lg:order-2 ">
               <SectionTwo />
               </div>
                <div className="order-2 lg:order-3">
                <SectionThree/>
                </div>
                <div className="order-5 lg:order-4">
                <SectionFour/>
                </div>
                <div className="order-3 lg:order-5">
                <SectionFive/>
                </div>
                <div className="order-8">
                <SectionSix/>
                </div>
                <div className="order-9">
                <Footer/>
                <FooterEnd/>
                </div>

        

        </div>
    )
}

export default Home