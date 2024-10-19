import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'
import gallery6 from '../assets/gallery-6.jpg'
const Gallery = () => {
    return (
        <>
        
              <section className="gallery">
        <div className="container">
            <div className="showcase">

                <div className="gallery-info">
                    <a href="#">PHOTO GALLERY</a>
                    <h4>Photos From Travelers</h4>
                </div>

                <div className="show-img">
                    <div className="f-sec">
                        <div className="sec-1">
                            <img src={gallery1} alt=""/>
                            <img src={gallery2} alt=""/>
                        </div>
                        <div className="img-alt">
                        <img src={gallery5} alt="" />
                        </div>
                    </div>
                    <div className="img-s">
                            <img src={gallery3} alt=""/>
                    </div>

                    <div className="sec-2">
                        <img src={gallery4} alt=""/>
                        <img src={gallery6} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section className="cta">
        <div className="container">
            <div className="cta-bg">
                <h2>Prepare Yourself &apos;Let&apos;s Explore The Beauty of The World <img src="images/title-icon.svg" alt=""/>
                </h2>
                <p>We have many special offers especially for you</p>

                <a href="#">Get Started</a>
            </div>
        </div>
    </section>
        </>
  

    );
};

export default Gallery;