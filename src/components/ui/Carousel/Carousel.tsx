interface CarouselProps {
    items: []
}


const Carousel: React.FC<CarouselProps> = ({items}) => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
            <div className="carousel-inner" >
                <div className="carousel-item active" >                
                    <img src="/hojas.jpg" className="d-block w-100 image-carousel" alt="hojas" />           
                    <div className="carousel-caption d-none d-md-block carousel-description">
                        <h2 >Second slide label</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                <img src="/litle-plant.jpg" className="d-block w-100 image-carousel" alt="litle plant" />
                    <div className="carousel-caption d-none d-md-block carousel-description">
                        <h2 >Second slide label</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                <img src="/palmera.jpg" className="d-block w-100 image-carousel" alt="palmera"/>
                    <div className="carousel-caption d-none d-md-block carousel-description">
                        <h2 >Second slide label</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    );
}



export default Carousel;
