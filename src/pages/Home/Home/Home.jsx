import Studies from "../../Studies/Studies";
import StudiesBottom from "../../StudiesBottom/StudiesBottom";
import Banner from "../Banner/Banner";
import BannerBottom from "../BannerBottom/BannerBottom";
import Levels from "../Levels/Levels";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <Levels></Levels>
            <Studies></Studies>
            <StudiesBottom></StudiesBottom>
        </div>
    );
};

export default Home;