// import './HeroSection.css';
function HeroSection() {
    return (
        <div className="w-[80%]  top-8 left-0 bg-transparent mx-auto">
            <div className="flex flex-col gap-[20px] w-[60%] top-[60px] relative h-[560px]">
                <div className="w-[350px] text-[25px] text-white font-bold ">Empowering Innovation, Uniting Mind</div>

                <div className="w-[260px]">
                    Welcome To Blockchain Club VIT Bhopal.
                </div>

                <div className="flex items-center"> {/* Added flex container */}
                    <a href="/">
                        <button className="bg-[#fff] px-4 p-2 text-white font-bold text-[14px] rounded-full self-center hover:font-bold transition-all duration-200  bg-gradient-to-r from-BASE_YELLOW to-orange ">Our Motive  ↗</button>
                    </a>
                    <i>   </i>
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