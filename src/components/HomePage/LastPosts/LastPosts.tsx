import products from '../../../data/products.json';
import ProductCard from '../../ui/ProductCard/ProductCard';

const LastPosts: React.FC = () => {
    const lastPosts = products[0].ornamental.slice(0, 4);

    return (
        <div className="lasts-posts-container">
            <p className="lasts-posts-container__subtitle">
              Some subtitle  
            </p>
            <h2 className="lasts-posts-container__title">
                Últimos Posts
            </h2>
            <div className="lasts-posts-container__posts-list">
                {   
                    lastPosts.map((post) => {
                        return (
                            <ProductCard product={post} />
                        );                    
                    })
                }
            </div>
            <button className="lasts-posts-container__view-more">
                VER MÁS (F)
            </button>
        </div>
    )
}

export default LastPosts;