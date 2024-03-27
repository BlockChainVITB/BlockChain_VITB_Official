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
        <div className="relative w-full overflow-hidden">
            <div className="text-center">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl">Team Members</h1>
            </div>
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
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8"> {/* Responsive padding */}
                                    <img className="w-24 h-24 rounded-full mx-auto mb-4" src={slide.photo} alt={slide.name} />
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