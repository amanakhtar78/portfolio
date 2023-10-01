import React from "react";
import "../Css/Projects.css";
import travel from "../Image/travel.jpg";
import law from "../Image/lawer.jpg";
import salon from "../Image/salon.jpg";
import itcom from "../Image/techcompany.jpg";
import studing from "../Image/studing.jpg";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ imageSrc, heading, description }) => {
  return (
    <div className="project-card">
      <img
        src={imageSrc}
        alt={heading}
        height="200"
        width="250"
        style={{ borderRadius: "5px" }}
      />
      <h3>{heading}</h3>
      <p>{description}</p>
      <button className="button__hire">
        Detail
        <FaArrowRight />
      </button>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      imageSrc: law,
      heading: "Law Firm Website",
      description:
        "Built a website for a law firm to showcase their services and expertise.",
    },
    {
      imageSrc: salon,
      heading: "Beauty Salon Website",
      description:
        "Developed a website for a beauty salon to display their services and appointment booking.",
    },
    {
      imageSrc: itcom,
      heading: "Tech Solution Company Website",
      description:
        "Created a website for a tech solution company to present their products and services.",
    },
    {
      imageSrc: travel,
      heading: "Travel Tour Website",
      description:
        "Designed a website for a travel agency to showcase popular destinations and tour packages.",
    },
  ];

  return (
    <section className="project-section" id="project">
      <main className="project_main">
        <section className="project__para">
          <h2>A Collection of Impressive and Memorable Projects</h2>
          <p>
            Welcome to the Project Section of my portfolio! Here, I present a
            collection of diverse projects that showcase my skills and expertise
            in various domains. Each project represents a unique endeavor where
            I have applied my knowledge and creativity to deliver outstanding
            results.
          </p>
          <p className="for__small__device">
            I invite you to explore these projects to get a glimpse of my
            skills, passion, and dedication. Feel free to browse through the
            project cards, each featuring an image, a brief project title, and a
            description that highlights the key aspects of the project.
          </p>
        </section>
        <section>
          <img src={studing} alt="" height={500} width={500} />
        </section>
      </main>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            heading={project.heading}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
