import Banifit from "../../Components/Home/Banifit";
import Banner from "../../Components/Home/Banner";
import Navber from "../../Components/Home/Navber";
import Refar from "../../Components/Home/Refar";
import ReferAndEarn from "../ReferAndEarn/ReferAndEarn";

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Refar></Refar>
            <Banifit></Banifit>
            <ReferAndEarn></ReferAndEarn>
        </div>
    );
};

export default Home;