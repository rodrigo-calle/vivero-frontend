const NavCarousel: React.FC = () => {
    return(
        <div className="promos-container ">
            <div className="promo-item">
                <img src="https://icongr.am/fontawesome/drivers-license.svg?size=128&color=ffffff" alt="" />
                <div className="promo-item--description">
                    <p className="promo-item-title">Promo 1</p>
                    <p className="promo-item-description">Desciption of promo 1</p>
                </div>
            </div>
            <div className="promo-item">
                <img src="https://icongr.am/fontawesome/drivers-license.svg?size=128&color=ffffff" alt="" />
                <div className="promo-item--description">
                    <p className="promo-item-title">Promo 1</p>
                <p className="promo-item-description">Desciption of promo 1</p>
                </div>
            </div>
            <div className="promo-item">
                <img src="https://icongr.am/fontawesome/drivers-license.svg?size=128&color=ffffff" alt="" />
                <div className="promo-item--description">
                    <p className="promo-item-title">Promo 1</p>
                    <p className="promo-item-description">Desciption of promo 1</p>
                </div>
            </div>
        </div>
    )
}

export default NavCarousel;