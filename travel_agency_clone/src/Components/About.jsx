
import serviceIcon1 from '../assets/service-icon-1.svg'
import serviceIcon2 from '../assets/service-icon-2.svg'
import serviceIcon3 from '../assets/service-icon-3.svg'
const About = () => {
    return (
        <section className="about" id="About">
            <div className="container">
                <div className="services">
                    <a href="#">WHAT WE SERVE</a>
                    <h1>Top Values For You</h1>
                    <p>Try a varity of benefits when using our services</p>
                </div>

                <div className="service-opt">
                    <article>
                        <img src={serviceIcon1}alt="" />
                        <h2>Lot of Choices</h2>
                        <p>Total 460+ destinations that we work with</p>
                    </article>

                    <article>
                        <img src={serviceIcon2} alt="" />
                        <h2>Best Tour Guide</h2>
                        <p>Our tour guide with 15+ years of experience</p>
                    </article>

                    <article>
                        <img src={serviceIcon3} alt="" />
                        <h2>Easy Booking</h2>
                        <p>With aneasy and fast ticket purchase process</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;