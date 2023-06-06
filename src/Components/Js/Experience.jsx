import React, { useState, useEffect, useRef } from "react";
import { FaReact, FaLaptopCode, FaPen, FaGraduationCap } from "react-icons/fa";
import "../Css/Experience.css";

const Experience = () => {
  const experience = [
    {
      company: "ABC Company",
      title: "UI/UX Designer",
      description:
        "Designed intuitive and visually appealing user interfaces, conducted user research, and created wireframes and prototypes to enhance user experience.",
      icon: <FaPen />,
    },
    {
      company: "XYZ Agency",
      title: "React Web Developer",
      description:
        "Developed responsive and interactive web applications using React.js, collaborated with cross-functional teams to deliver high-quality software solutions, and optimized performance and user experience.",
      icon: <FaLaptopCode />,
    },
    {
      company: "Tech Solutions Inc.",
      title: "Competitive Programmer",
      description:
        "Participated in coding competitions, solved algorithmic challenges, and implemented efficient solutions in various programming languages to solve complex problems.",
      icon: <FaGraduationCap />,
    },
    {
      company: "Design Studio Co.",
      title: "App Designer",
      description:
        "Created visually appealing and user-friendly mobile app designs, collaborated with developers to ensure design implementation, and conducted usability tests to gather user feedback.",
      icon: <FaPen />,
    },
    {
      company: "Web Solutions Ltd.",
      title: "Full Stack Developer",
      description:
        "Developed and maintained end-to-end web applications, utilized modern frameworks for front-end and back-end development, and implemented database integration and API integration.",
      icon: <FaLaptopCode />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    scrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experience.length);
    }, 5000);
  };

  const stopAutoScroll = () => {
    clearInterval(scrollIntervalRef.current);
  };
  const handleSwipe = (direction) => {
    stopAutoScroll();

    const newIndex =
      direction === "left"
        ? (currentIndex + 1) % experience.length
        : (currentIndex - 1 + experience.length) % experience.length;

    setCurrentIndex(newIndex);

    startAutoScroll();

    // Scroll the container to center the current card
    const container = cardContainerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth;
      const scrollDistance = newIndex * cardWidth - container.offsetWidth / 2;
      container.scrollTo({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section__experience">
      <h2>Work Experience</h2>
      <div className="new__curve">
        <div className="card-container" ref={cardContainerRef}>
          {experience.map((job, index) => (
            <div key={index} className="cards">
              <div className="card-icon">{job.icon}</div>
              <h3>{job.company}</h3>
              <h4>{job.title}</h4>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
