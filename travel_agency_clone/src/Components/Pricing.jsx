import experience from '../assets/experience-banner.png'
import expShave from '../assets/exp-shape.svg';


const Pricing = () => {
    return (
        <section className="pricing" id="Pricing">
        <div className="container">
            <div className="prices">
                <div className="img">
                    <img src={experience} alt=""/>
                </div>

                <span className="title">
                    <img src={expShave} alt=""/>
                </span>

                <div className="price-info">
                    <a href="#">OUR EXPERIENCES</a>
                    <h2>With Our Experience We Will Serve You</h2>

                    <p>Since we first opened we have prioritized
                        the conveince of our users by providing low
                        price and with a easy process</p>

                    <div className="price-list">
                        <div className="count1">
                            <h1>20+</h1>
                            <span>Years</span>
                            <span>Experience</span>
                        </div>

                        <div className="count1">
                            <h1>460+</h1>
                            <span>Destination</span>
                            <span>Collaboration</span>
                        </div>

                        <div className="count1">
                            <h1>50k+</h1>
                            <span>Happy</span>
                            <span>Customer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Pricing;