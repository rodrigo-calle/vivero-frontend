// import ProductForm from "../../Dashboard/ProductForm/ProductForm";
import Carousel from "../../ui/Carousel/Carousel";
import HomeHeader from "../../ui/HomeHeader/HomeHeader";
import Navbar from "../../ui/Navbar/Navbar";
import FirstSection from "../FirstSection/FirstSection";
import NavCarousel from "../NavCarousel/NavCarousel";
import ProdcutsSection from "../ProductsSection/ProductsSection";

const HomePage: React.FC = () => {
    return (
        <>
            <HomeHeader  items={[]} />
            <Navbar />     
            <Carousel items={[]} />
            <NavCarousel />
            <br/>
            <FirstSection />
            <ProdcutsSection />
            {/* <ProductForm /> */}
        </>
    )
}

export default HomePage;