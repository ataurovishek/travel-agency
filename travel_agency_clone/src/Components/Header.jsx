import logo from '../assets/logo.svg'

const Header = () => {
    return (

        <header>
            <div className="img">
                <img src={logo} alt="" />
            </div>

            <nav className="nav-link">
                <li>
                    <a href="#Home">Home</a>
                </li>

                <li>
                    <a href="#About">About</a>
                </li>

                <li>
                    <a href="#Services">Services</a>
                </li>

                <li>
                    <a href="#Pricing">Pricing</a>
                </li>

                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </nav>

            <div className="enter">
                <a href="login" className="login">Login</a>
                <a href=" signup" className="signup">Sign up</a>
            </div>

        </header>
    );
};

export default Header;