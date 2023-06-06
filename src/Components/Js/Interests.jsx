import React, { useState, useEffect } from "react";
import "../Css/Interests.css";
import { FaReact, FaLaptopCode, FaPen, FaGraduationCap } from "react-icons/fa";
import Stylish from "../Image/design.jpg";
const Interests = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const cards = [
    {
      header: "App Designer",
      content:
        "TCreated visually appealing and user-friendly mobile app designs, collaborated with developers to ensure design implementation, and conducted usability tests to gather user feedback.",
      icon: <FaPen />,
    },
    {
      header: "Full Stack Developer",
      content:
        "Developed and maintained end-to-end web applications, utilized modern frameworks for front-end and back-end development, and implemented database integration and API integration.",
      icon: <FaLaptopCode />,
    },
    {
      header: "Competitive Programmer",
      content:
        "Participated in coding competitions, solved algorithmic challenges, and implemented efficient solutions in various programming languages to solve complex problems.",
      icon: <FaGraduationCap />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main className="main__for__techno">
        <section>
          <img src={Stylish} alt="" height={500} width={550} />
        </section>
        <section className="section__detail">
          <h2>Mastering Technology: Design, Develop, Dominate</h2>
          <p>
            In the realm of technology, my skills span across UI/UX design, full
            stack web development using React, and competitive programming on
            CodeChef, where I proudly hold the distinction of being a 3-star
            coder. With a keen eye for aesthetics and user-centered design, I
            create engaging and intuitive user interfaces. On the development
            front, I excel in building dynamic and responsive web applications,
            leveraging the power of React and embracing the full stack approach.
            Furthermore, my passion for problem-solving shines through in the
            realm of competitive programming, where I continuously challenge
            myself to solve algorithmic puzzles and find efficient solutions.
            This combination of skills allows me to deliver exceptional user
            experiences while embracing the power of technology to tackle
            complex challenges.
          </p>
        </section>
      </main>

      <section className="card__swipe">
        <div className="card-container">
          {/* card 1 */}
          {cards.map((card, index) => {
            const contentIndex = (index + 1) % cards.length;
            return (
              <div
                key={index}
                className={`card ${index === rotationIndex ? "active" : ""}`}
              >
                <div className="card_icon">{cards[contentIndex].icon}</div>
                <h2>{cards[contentIndex].header}</h2>
                <p>{cards[contentIndex].content}</p>
              </div>
            );
          })}
        </div>
        <div className="card-container">
          {/* card 2 */}
          {cards.map((card, index) => {
            const contentIndex = (index + 2) % cards.length;
            return (
              <div
                key={index}
                className={`card ${index === rotationIndex ? "active" : ""}`}
              >
                <div className="card_icon">{cards[contentIndex].icon}</div>
                <h2>{cards[contentIndex].header}</h2>
                <p>{cards[contentIndex].content}</p>
              </div>
            );
          })}
        </div>
        <div className="card-container">
          <aside className="aside__card">
            {/* card 3 */}
            {cards.map((card, index) => {
              const contentIndex = (index + 3) % cards.length;
              return (
                <div
                  key={index}
                  className={`card ${index === rotationIndex ? "active" : ""}`}
                >
                  <div className="card_icon">{cards[contentIndex].icon}</div>
                  <h2>{cards[contentIndex].header}</h2>
                  <p>{cards[contentIndex].content}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Interests;
