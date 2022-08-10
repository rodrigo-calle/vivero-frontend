import products from '../../../data/products.json';
import ProductCard from '../../ui/ProductCard/ProductCard';

const OffersSection: React.FC = () => {
    const offersList = products[0].ornamental.splice(0, 4);
    return (
        <div className="offer-section">
            <p className="offer-section__subtitle">Some subtitle</p>
            <h2 className="offer-section__title">Ofertas del mes</h2>
            <div className="offer-section__container">
                {
                    offersList.map((offer) => {
                        return (
                            <ProductCard key={offer.id} product={offer} />
                        )
                    })
                }
            </div>
            <div className="offer-section__more-products">
                    <div><span>{"<"}</span></div>
                    <div><span>{">"}</span></div>
            </div>
        </div>
    )
}

export default OffersSection;