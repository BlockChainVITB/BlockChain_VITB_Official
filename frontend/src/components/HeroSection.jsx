// import './HeroSection.css';
function HeroSection() {
    return (
        <div 
        id="home"
        className="w-[80%]  top-8 left-0 bg-transparent mx-auto h-lscreen"
        >
            <div className="flex flex-col justify-center gap-[20px] w-[60%] top-[60px] h-full">
                <div className=" text-6xl text-white font-extrabold">Empowering Innovation, Uniting Mind</div>

                <div className="w-[50%] font-bold text-xl">
                    Welcome To Blockchain Club VIT Bhopal.
                </div>

                <div className="flex items-center"> {/* Added flex container */}
                    <a href="/">
                        <button className="bg-[#fff] h-14 w-60 px-4 p-2 text-white font-bold text-[14px] rounded-full self-center hover:font-bold transition-all text-lg duration-200  bg-gradient-to-r from-BASE_YELLOW to-orange ">Our Motive  ↗</button>
                    </a>
                </div>
 
                <div className="flex items-center"> {/* Added flex container */}
                    <div> {/* Added div container */}
                        <img src="List.png" alt="" />
                    </div>
                    <div className="banner-content">
                        <div className="font-bold text-[25px] text-white ml-6">  510+</div>
                        <div className="text-[13px] ml-6">Community Member</div>
                    </div>
                </div>
                </div>
                </div>

    );
}

export default HeroSection;