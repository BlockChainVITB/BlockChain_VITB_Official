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


    
    const containerStyles = {
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridTemplateColumns: 'repeat(1, 1fr)', 
        gap: '20px',
    };

    return (
        <div id='about'>
            <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
+                    <h1 className="bg-clip-text text-transparent bg-gradient-to-t from-[#FFF50A] to-[#FF9900] font-bold text-5xl my-12 ">Our Motive</h1>
                </div>
                <div id="container" style={containerStyles}>
                    <div id='empowerment-animation' className='md:col-start-1 md:row-start-1 md:col-end-2 md:row-end-2 m-auto222'>
                        <Lottie options={EmpowermentAnimationOptions} height={300} width={300} />
                    </div>
                    <div id='Empowerment' className='md:col-start-2 md:row-start-1 md:col-end-3 md:row-end-2'>
                        <div className="text-lg font-bold mb-2 text-yellow-700">01.</div>
                        <h2 className="text-xl font-bold mb-2 ">Empowerment</h2>   
                        <p className="text-white">
                            Our mission is to empower members with the knowledge and skills needed to navigate the blockchain landscape confidently. Through workshops, seminars, and projects, we equip individuals to become leaders in the field.
                        </p>
                    </div>
                    <div id='innovation-animation' className='md:col-start-2 md:row-start-2 md:col-end-3 md:row-end-3'>
                        <Lottie options={InnovationAnimationOptions} height={400} width={400} />
                    </div>
                    <div id="innovation" className='md:col-start-1 md:row-start-2 md:col-end-2 md:row-end-3'>
                        <div className="text-lg font-bold mb-2 text-yellow-700">02.</div>
                        <h2 className="text-xl font-bold mb-2 text-left">Innovation</h2>
                        <p className="text-white">
                            We foster a culture of creativity and exploration, encouraging members to push the boundaries of blockchain technology. Collaborative projects enable us to be at the forefront of innovation in the blockchain space.
                        </p>
                    </div>
                    <div id='impact-animation' className='md:col-start-1 md:row-start-3 md:col-end-2 md:row-end-4'>
                        <Lottie options={ImpactAnimationOptions} height={400} width={400} />
                    </div>
                    <div id="impact" className='md:col-start-2 md:row-start-3 md:col-end-3 md:row-end-4'>
                        <div className="text-lg font-bold mb-2 text-yellow-700">03.</div>
                        <h2 className="text-xl font-bold mb-2">Impact</h2>
                        <p className="text-white">
                            We prioritize making a tangible difference with blockchain. Whether it's increasing transparency or promoting financial inclusion, our goal is to drive positive changes that improve lives. Join us in creating a better future through blockchain innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMotive;
