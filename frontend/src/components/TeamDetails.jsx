import React from 'react';
import { motion } from 'framer-motion';

const slides = [
    { name: 'John Doe', position: 'Developer', description: 'Lorem ipsum dolor sit amet.',photo: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { name: 'Jane Smith', position: 'Designer', description: 'Consectetur adipiscing elit.',photo: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { name: 'Alice Brown', position: 'Marketing', description: 'Sed do eiusmod tempor incididunt.',photo: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { name: 'Bob White', position: 'Sales', description: 'Ut labore et dolore magna aliqua.',photo: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { name: 'Eva Green', position: 'Support', description: 'Quis nostrud exercitation ullamco.',photo: 'https://randomuser.me/api/portraits/men/86.jpg' },
];

const TeamDetails = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden mt-6">
             <h1 className=" bg-clip-text text-transparent bg-gradient-to-t from-[#FFF50A] to-[#FF9900] font-bold text-5xl my-12 text-center">
                    Team Members
            </h1>
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 15, // Increase the duration value to slow down the animation
                        repeat: Infinity,
                    },
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }} >{/* Add mr- for margin */}
                        <div className="flex-shrink-0">
                        <div className="auto-fit-[120px] grid gap-6 p-6">
                                 <div className="rounded-lg bg-white p-4 text-center shadow-md"> {/* Responsive padding */}
                                    <img className="mx-auto mb-4 h-24 w-24 rounded-full" src={slide.photo} alt={slide.name} />
                                    <h2 className="text-xl font-semibold">{slide.name}</h2>
                                    <p className="text-sm text-gray-600">{slide.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};


export default TeamDetails;