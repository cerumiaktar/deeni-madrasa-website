import Studies from "../../Studies/Studies";
import StudiesBottom from "../../StudiesBottom/StudiesBottom";
import Banner from "../Banner/Banner";
import BannerBottom from "../BannerBottom/BannerBottom";
import Countries from "../Countries/Countries";
import Levels from "../Levels/Levels";
import Partners from "../Partners/Partners";
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
            <ShortBanner></ShortBanner>
            <Partners></Partners>
            <Countries></Countries>
        </div>
    );
};

export default Home;