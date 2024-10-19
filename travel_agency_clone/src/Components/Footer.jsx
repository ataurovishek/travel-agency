
const Footer = () => {
    return (
        <footer id="Contact">
        <div className="container">
            <div className="footer">
                <div className="f-1">
                    <img src="images/logo.svg" alt=""/>
                    <p>We always make our customers happy by providing as many choices as possible</p>
                    <div className="icons">
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-twitter fa-beat"></i>
                    </div>
                </div>

                <div className="f-">
                    <span>About</span>
                    <p>About Us</p>
                    <p>Features</p>
                    <p>News</p>
                    <p>Menu</p>
                </div>

                <div className="f-">
                    <span>Company</span>
                    <p>Why Company</p>
                    <p>Partner With US</p>
                    <p>FAQ</p>
                    <p>Blog</p>
                </div>

                <div className="f-">
                    <span>Support</span>
                    <p>Account</p>
                    <p>Support Center</p>
                    <p>Feedback</p>
                    <p>Contact Us</p>
                    <p>Accessibility</p>
                </div>
                <div className="f-">
                    <span>Get in Touch </span>
                    <p>Question or feedback? We&apos;d love to hear from you</p>
                    <form action="" method="post">
                        <input type="email" placeholder="Email Address" className="email" name="email" required/>
                        <button className="btn" type="submit"><i className="fa fa-paper-plane-o"></i></button>
                    </form>


                </div>
            </div>

        </div>
    </footer>
    );
};

export default Footer;