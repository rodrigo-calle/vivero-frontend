// import ProductForm from "../../Dashboard/ProductForm/ProductForm";
import Carousel from "../../ui/Carousel/Carousel";
import HomeHeader from "../../ui/HomeHeader/HomeHeader";
import Navbar from "../../ui/Navbar/Navbar";
import ContactBar from "../ContactBar/ContactBar";
import FirstSection from "../FirstSection/FirstSection";
import LastPosts from "../LastPosts/LastPosts";
import NavCarousel from "../NavCarousel/NavCarousel";
import OffersSection from "../OffersSection/OffersSection";
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
            <OffersSection />
            <LastPosts />
            <ContactBar />
            {/* <ProductForm /> */}
        </>
    )
}

export default HomePage;