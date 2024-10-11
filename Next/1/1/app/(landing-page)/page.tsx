import Footer from "@/components/footer-ft/footer";
import FourthSection from "./fourth-section2";
import HeroSection from "./hero-section2";
import SecondSection from "./second-section2";
import ThirdSection from "./third-section";
import NinthSection from "./ninth-section";
import GetStartedFree from "./eighth-section";
import Navbar from "@/components/navbar/navbar";

const LandingPage  = () => {
  return ( <div>
    {/* <Navbar/> */}
    <HeroSection/>
    <SecondSection/>
    <FourthSection/>
    {/* <SecondSection/>
    <ThirdSection/>
    <FourthSection/> */}
    {/* <FifthSection/>*/}
    {/* <NinthSection/>
    <GetStartedFree/> */}
    <Footer/>
  </div> );
}
 
export default LandingPage;