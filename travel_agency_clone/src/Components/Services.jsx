import destination1 from '../assets/destination-1.jpg'
import destination2 from '../assets/destination-2.jpg'
import destination3 from '../assets/destination-3.jpg'
import destination4 from '../assets/destination-4.jpg'
import destination5 from '../assets/destination-5.jpg'
import destination6 from '../assets/destination-6.jpg'

const Services = () => {
    return (
        <section id="Services" className="destiny">
        <div className="container">
            <div className="destination-opt">
                <a href="#">TOP DESTINATION</a>
                <h1>Explore Top Destination</h1>
            </div>


            <div className="destinations">
                <div className="dest">
                    <img src={destination1} alt=""/>
                    <span>$340</span>
                    <h3>Enjoy the beauty of the del pincio</h3>
                    <p>Rome,italy</p>
                    <p className="rate"><i className="lni lni-star-fill"></i>4.7</p>
                    <p className="rating">(11.1k Review)</p>
                </div>

                <div className="dest">
                    <img src={destination2} alt=""/>
                    <span>$340</span>
                    <h3>Enjoy the beauty of pakistan Monument</h3>
                    <p>Islamabad,Pakistan</p>
                    <p className="rate"><i className="lni lni-star-fill"></i>4.6</p>
                    <p className="rating">(16.9k Review)</p>
                </div>

                <div className="dest">
                    <img src={destination3} alt=""/>
                    <span>$340</span>
                    <h3>Enjoy the beauty of Burj Khalifa</h3>
                    <p>Skyscraper in Dubai</p>
                    <p className="rate"> <i className="lni lni-star-fill"></i>4.7</p>
                    <p className="rating">(120k Review)</p>
                </div>

                <div className="dest">
                    <img src={destination4} alt=""/>
                    <span>$340</span>
                    <h3>Enjoy the beauty of Milaidhoo</h3>
                    <p>island in Maldives</p>
                    <p className="rate"><i className="lni lni-star-fill"></i>4.7</p>
                    <p className="rating">(11.1k Review)</p>
                </div>

                <div className="dest">
                    <img src={destination5} alt=""/>
                    <span>$340</span>
                    <h3>Enjoy the beauty of the Ko Tao</h3>
                    <p>Island in the Gulf of Thailand</p>
                    <p className="rate"><i className="lni lni-star-fill"></i>4.5</p>
                    <p className="rating">(985 Review)</p>
                </div>

                <div className="dest">
                    <img src={destination6} alt=""/>
                    <span>$340</span>
                    <h3>Enjoy the beauty of Grand Mecidiye Mosque</h3>
                    <p>Mosque in istanbul,Turkey</p>
                    <p className="rate"><i className="lni lni-star-fill"></i>4.8</p>
                    <p className="rating">(29.6k Review)</p>
                </div>
            </div>

            <a href="#" className="view">View All Destination</a>
        </div>
    </section>

    );
};

export default Services;