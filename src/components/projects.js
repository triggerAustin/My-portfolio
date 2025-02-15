import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Rental Management System",
    image: "https://via.placeholder.com/800x400",
    tech: "MERN stack",
    description: "An online store built with React and Firebase.",
    status: "ONGOING",
  },
  {
    title: "Task Manager App",
    image: "https://via.placeholder.com/800x400",
    tech: "MERN stack",
    description: "A productivity tool to manage daily tasks.",
    status: "ONGOING",
  },
  {
    title: "Study Mate",
    image: "https://via.placeholder.com/800x400",
    tech: "React/Flask",
    description:
      "A student helper website allowing students to access learning material from various Teachers and institutions.",
    status: "ONGOING",
  },
  {
    title: "Doctors Appointment",
    image: "https://via.placeholder.com/800x400",
    tech: "React/Flask",
    description:
      "An appointment booking site for patients, giving them access to doctors from different fields.",
    status: "ONGOING",
  },
];

const ProjectsCarousel = () => {
  return (
    <div className="w-screen h-[90vh] mx-auto flex items-center justify-center" id="projects">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.3} // Show partial previews of adjacent slides
        centeredSlides={true} // Ensure the active slide is centered
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-300 rounded-lg shadow-xl p-6 mx-4">
              <img
                src={project.image}
                alt={project.status}
                className="w-full h-[60vh] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title} | {project.tech}</h3>
              <p className="text-black mt-2">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
