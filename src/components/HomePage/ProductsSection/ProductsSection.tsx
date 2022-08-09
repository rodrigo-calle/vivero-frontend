import ProductCard from "../../ui/ProductCard/ProductCard";
import data from "../../../data/products.json"

const ProdcutsSection: React.FC = () => {
    const products = data[0].ornamental.slice(0, 8);
    return (
        <>
            <div className="products-main-container">
                <p className="products-main-subtitle-products">Somethig description</p>
                <h2 className="products-main-container__title">Productos Destacados</h2>
                <div className="products-main-container__products-list">
                    {products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })}
                </div>
                <div className="products-main-container__more-products">
                    <div><span>{"<"}</span></div>
                    <div><span>{">"}</span></div>
                </div>
            </div>
        </>
    )
}

export default ProdcutsSection;