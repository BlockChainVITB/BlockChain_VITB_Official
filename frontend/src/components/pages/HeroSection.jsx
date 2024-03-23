import './HeroSection.css';
function HeroSection() {
    return (
        <div className="container">
            <div className="content">
                <div className="heading">Empowering Innovation, Uniting Mind</div>

                <div className="para">
                    Welcome To Blockchain Club VIT Bhopal
                </div>

                <div className="button-container">
                    <a href="/">
                        <button className="btn-join-now">Our Motive</button>
                    </a>
                    <i></i>

                </div>
                <div className="banner">
                    <div className="image-container">
                        <img src="" alt="" />
                    </div>
                    <div className="banner-content">
                        <div className="number">510+</div>
                        <div className="text">Community Member</div>

                    </div>


                </div>



            </div>

        </div>
    );
}

export default HeroSection;