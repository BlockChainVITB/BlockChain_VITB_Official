import React from 'react';
import Lottie from 'react-lottie';
import InnovationAnimationData from '../assets/InnovationAnimationData.json'; 
import ImpactAnimationData from '../assets/ImpactAnimationData.json';

const OurMotive = () => {

    const InnovationAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: InnovationAnimationData, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice' // aspect - ratio 
        }
      };

      const ImpactAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: ImpactAnimationData, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice' //aspect - ratio ke liye
        }
      };

      const containerStyles = {
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '20px',
        rowGap: '20px',
      };
      

    return (
        <div>
            <body>
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center mb-8" style={{
                        textAlign: 'center',
                        color: '#FFFF00'
                    }}>
                    <h1 className="text-4xl font-bold">Our Motive!</h1>
                    </div>
                <div id="container" style={containerStyles}>
                    <div id='innovation-animation' className='col-start-2 row-start-2 col-end-3 row-end-3'>
                        <Lottie options={InnovationAnimationOptions} height={400} width={400} />
                    </div>
                <div id="innovation" className='col-start-1 row-start-2 col-end-2 row-end-3'>
                    <div className="text-l font-bold mb-2 text-yellow-700">02.</div>
                        <h2 className="text-2xl font-bold mb-2 text-left">Innovation</h2>
                        <p className="text-white-700">
                    We foster a culture of creativity and exploration, encouraging members to push the boundaries of blockchain technology. Collaborative projects enable us to be at the forefront of innovation in the blockchain space.
                        </p>
                </div>
                <div id="Empowerment" className='col-start-2 row-start-1 col-end-3 row-end-2'>
                    <div className="text-l font-bold mb-2 text-yellow-700">01.</div>
                    <h2 className="text-2xl font-bold mb-2 ">Empowerment</h2>   
                    <p className="text-white-700">
                    Our mission is to empower members with the knowledge and skills needed to navigate the blockchain landscape confidently. Through workshops, seminars, and projects, we equip individuals to become leaders in the field.
                    </p>
                </div>
                <div id="impact" className='col-start-2 row-start-3 col-end-3 row-end-4'>
                    <div className="text-l font-bold mb-2 text-yellow-700">03.</div>
                    <h2 className="text-2xl font-bold mb-2">Impact</h2>
                    <p className="text-white-700">
                    We prioritize making a tangible difference with blockchain. Whether it's increasing transparency or promoting financial inclusion, our goal is to drive positive changes that improve lives. Join us in creating a better future through blockchain innovation.
                    </p>
                </div>
                <div id='impact-animation' className='col-start-1 row-start-3 col-end-2 row-end-4'>
                    <Lottie options={ImpactAnimationOptions} height={400} width={400} />
                </div>
                </div>
            </div>
        </body>
    </div>
    )
}

export default OurMotive;
