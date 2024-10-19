import titleIcon from '../assets/title-icon.svg';
import playButtonArrowhead from '../assets/play-button-arrowhead.png';
import heroImg from '../assets/hero-banner.png'
const Home = () => {
    return (
        <section className="home" id="Home">
            <div className="container">
                <div className="hero-sec">
                    <div className="info">
                        <a href="#" className="world-btn">
                            <span>Explore The World</span>
                            <img src={titleIcon} alt=""/>
                        </a>

                        <h1>It&apos;s a Big World Out there,Go Explore</h1>

                        <p>we always make our customer happy by providing as many choices as possible</p>
                        <div className="btns">
                            <a href="" className="first-b">
                                <span>Plan a Trip</span>
                                <i className="fa fa-arrow-right grt"></i>
                            </a>

                            <a href="" className="second-b">
                                <img src={heroImg} alt=""/>
                                    <img src={playButtonArrowhead} className=" play" alt=""/>
                                        <p>watch our story</p>
                                    </a>
                                </div>
                        </div>

                        <div className="img">
                            <img src={heroImg} alt=""/>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Home;