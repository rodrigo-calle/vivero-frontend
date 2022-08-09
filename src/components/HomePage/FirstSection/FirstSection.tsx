const FirstSection: React.FC = () => {
    return (
        <div className="first-main-container">
            <div className="first-main-container__image">
                <img src="/frame.png" alt="home-image" />
            </div>
            <div className="first-container__description">
                <div className="first-container__description--content">
                    <h2 className="first-container__description--title">
                        Lorem ipsus bla bla bla santo domingo
                    </h2>
                    <p className="first-container__description--text">
                    There are many variations passages Lorem Ipsum variatio
                    passages Lorem available, but the majority suffered alteration but the many variations some form injected randomised wordsavailable, but majority
                    </p>
                    <button>
                        LEER MÁS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FirstSection;