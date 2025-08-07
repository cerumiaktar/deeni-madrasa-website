import Studies from "../../Studies/Studies";
import StudiesBottom from "../../StudiesBottom/StudiesBottom";
import Banner from "../Banner/Banner";
import BannerBottom from "../BannerBottom/BannerBottom";
import Levels from "../Levels/Levels";
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
        </div>
    );
};

export default Home;