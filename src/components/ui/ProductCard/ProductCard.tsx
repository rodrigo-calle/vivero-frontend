interface DataProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: string;
        image: string;
        stock: boolean;
        category: string;
    }
}

const ProductCard: React.FC<DataProps> =  (productProps) => {
    return (
        <div className="product-card" id={String(productProps.product.id)}>
            <div className="product-card__image--container">
                <img className="product-card__image" src={productProps.product.image} alt={productProps.product.name} />
            </div>
            <div className="product-card__info">
                <p className="product-card-info-name">{productProps.product.name}</p>
                <p className="product-card-info-price" >S/.{productProps.product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;
