import Carousel from "../../ui/Carousel/Carousel";
import HomeHeader from "../../ui/HomeHeader/HomeHeader";
import Navbar from "../../ui/Navbar/Navbar";
import NavCarousel from "../NavCarousel/NavCarousel";

const HomePage: React.FC = () => {
    return (
        <>
            <HomeHeader  items={[]} />
            <Navbar />     
            <Carousel items={[]} />
            <NavCarousel />
        </>
    )
}

export default HomePage;