import Studies from "../../Studies/Studies";
import StudiesBottom from "../../StudiesBottom/StudiesBottom";
import Banner from "../Banner/Banner";
import BannerBottom from "../BannerBottom/BannerBottom";
import Countries from "../Countries/Countries";
import Faq from "../Faq/Faq";
import Gallery from "../Gallery/Gallery";
import Levels from "../Levels/Levels";
import Partners from "../Partners/Partners";
// import Reviews from "../Reviews/Reviews";
import Reviews2 from "../Reviews2/Reviews2";
import ShortBanner from "../ShortBanner/ShortBanner";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <Levels></Levels>
            <Studies></Studies>
            <StudiesBottom></StudiesBottom>
            <Slider></Slider>
            <Gallery></Gallery>
            <ShortBanner></ShortBanner>
            <Reviews2></Reviews2>
            {/* <Reviews></Reviews> */}
            <Partners></Partners>
            <Countries></Countries>
            <Faq></Faq>
        </div>
    );
};

export default Home;