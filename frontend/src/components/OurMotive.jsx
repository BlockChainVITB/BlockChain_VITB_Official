import React from 'react';
import Lottie from 'react-lottie';
import InnovationAnimationData from '../assets/InnovationAnimationData.json'; 
import ImpactAnimationData from '../assets/ImpactAnimationData.json';
import EmpowermentAnimationData from '../assets/EmpowermentAnimationData.json';

const OurMotive = () => {

    const InnovationAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: InnovationAnimationData, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const ImpactAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: ImpactAnimationData, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const EmpowermentAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: EmpowermentAnimationData , 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
     
    return (
        <>
           <div id='about'>
            <div className="text-center my-12">
                 <h1 className="bg-clip-text text-center text-transparent bg-gradient-to-t from-[#FFF50A] to-[#FF9900] font-bold text-5xl  ">Our Motive</h1>
                </div>
                <div id="container" className='flex flex-col items-center mx-5 ' >
                    <div id="empowerment-section" className='flex justify-content-center flex-col md:flex-row  '>
                        <div id='empowerment-animation' className='lg:flex-1 max-w-screen-md '>
                            <Lottie options={EmpowermentAnimationOptions} height={400} width={400} />
                        </div>
                        <div id='Empowerment' className='lg:flex-1 '>
                            <div className="text-lg font-bold  text-yellow-700">01.</div>
                            <h2 className="text-xl font-bold  ">Empowerment</h2>   
                            <p className="text-white max-w-screen-md">
                                Our mission is to empower members with the knowledge and skills needed to navigate the blockchain landscape confidently. Through workshops, seminars, and projects, we equip individuals to become leaders in the field.
                            </p>
                        </div>
                    </div>
                    <div id='innovation-section' className='flex flex-col md:flex-row'>
                        <div id="innovation" className=' lg:flex-1 '>
                            <div className="text-lg font-bold  text-yellow-700">02.</div>
                            <h2 className="text-xl font-bold  text-left">Innovation</h2>
                            <p className="text-white max-w-screen-md	">
                                We foster a culture of creativity and exploration, encouraging members to push the boundaries of blockchain technology. Collaborative projects enable us to be at the forefront of innovation in the blockchain space.
                            </p>
                        </div>
                        <div id='innovation-animation' className=' lg:flex-1 '>
                            <Lottie options={InnovationAnimationOptions} height={400} width={400} />
                        </div>
                    </div>
                    <div id='impact-section' className='flex flex-col md:flex-row'>
                        <div id='impact-animation' className=' lg:flex-1'>
                            <Lottie options={ImpactAnimationOptions} height={400} width={400} />
                        </div>
                        <div id="impact" className=' lg:flex-1 max-w-screen-md'>
                            <div className="text-lg font-bold text-yellow-700">03.</div>
                            <h2 className="text-xl font-bold ">Impact</h2>
                            <p className="text-white max-w-screen-md">
                                We prioritize making a tangible difference with blockchain. Whether it's increasing transparency or promoting financial inclusion, our goal is to drive positive changes that improve lives. Join us in creating a better future through blockchain innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default OurMotive;
