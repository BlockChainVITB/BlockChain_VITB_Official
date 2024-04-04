import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Event Details
const EventDetails = [
  {
    image: "https://source.unsplash.com/random/300x300",
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    image: "https://source.unsplash.com/random/300x300",
    title: "Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    image: "https://source.unsplash.com/random/300x300",
    title: "Event 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
];

// EventCard Component
function EventCard({ EventData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.75 }}
      className="rounded-md my-4"
      style={{ maxWidth: "300px" }}
    >
      <img
        src={EventData.image}
        alt={EventData.title}
        className="w-full h-auto rounded-xl object-cover"
        style={{ maxWidth: "100%" }}
      />
      <div className="p-4 text-center">
        <h1 className="text-lg font-semibold text-white ">{EventData.title}</h1>
        <p className="my-3 text-sm text-slate-800">{EventData.description}</p>
      </div>
    </motion.div>
  );
}

// Main Component
function RecentEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % EventDetails.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? EventDetails.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
    id="events"
    className=" flex flex-col justify-center items-center h-5/6"
    >
      <h1 className=" bg-clip-text text-transparent bg-gradient-to-t from-[#FFF50A] to-[#FF9900] font-bold text-5xl my-12">
        Recent Events
      </h1>
      <div className="bg-gradient-to-b from-[#FFF50A] to-[#FF9900] w-[50%] rounded-3xl flex items-center justify-center relative">
        <button
          type="button"
          className="md:absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-2  md:block"
          onClick={handlePrev}
        >
          <FaArrowLeft className="text-2xl text-black" />
        </button>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <EventCard EventData={EventDetails[currentIndex]} />
        </motion.div>
        <button
          type="button"
          className="md:absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-2  md:block"
          onClick={handleNext}
        >
          <FaArrowRight className="text-2xl text-black" />
        </button>
        <div className="absolute bottom-0 w-full flex justify-center pb-4">
          {EventDetails.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  EventData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecentEvents;
