
interface HomeHeaderProps {
    items: []
}

const HomeHeader: React.FC<HomeHeaderProps> = ({items}) => {
    return (
        <div className="container main-header">
            <div className="d-flex justify-content-around ">
                <div className="d-flex align-items-center justify-content-center subcontainer-header">
                    <div className="round-icon-container">
                        <img src="https://icongr.am/fontawesome/envelope-o.svg?size=128&color=currentColor" alt="email-vivero-santo-domingo" />
                    </div>
                    <div className="email-box">
                        <p className="email-title">Email:</p>
                        <p className="email-text">viverosantodomingo.gmail.com</p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center subcontainer-header">
                    <img className="main-logo"  src="https://icongr.am/fontawesome/expeditedssl.svg?size=128&color=currentColor" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center subcontainer-header">
                    <div className="round-icon-container">
                        <img src="https://icongr.am/fontawesome/envelope-o.svg?size=128&color=currentColor" alt="Vivero Santo Domingo - Oxapampa" />
                    </div>
                    <div className="email-box">
                        <p className="email-title">Teléfono:</p>
                        <p className="email-text">(+51) 941658007</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// module.exports = {
//     images: {
//         domains: ['icongr.am']
//     }
// }
export default HomeHeader;
