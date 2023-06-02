import React from "react";

const Projects = () => {
  return (
    <div>
      {" "}
      <section>
        <h2>Web Development Projects</h2>
        <h3>NOTES LINK PROVIDER - Mini Group Project</h3>
        <p>Sep 2021 – Jan 2022, Bangalore, KR</p>
        <ul>
          <li>
            We had a team of 4 people, everyone had different skill sets. We
            built a website that provided students with notes and question bank
            links to their respective courses through our database.
          </li>
          <li>
            I handled the front-end part and led the team throughout the
            project.
          </li>
          <li>Teachers could perform all the CRUD operations on links.</li>
          <li>Used HTML, CSS, JS, React, Node.js, and MySQL.</li>
        </ul>

        <h3>LAW FIRM WEBSITE - Solo Project</h3>
        <p>June 2022 – July 2022, Bangalore, KR</p>
        <ul>
          <li>
            The objective of the project was to take input from users regarding
            any civil cases through a form.
          </li>
          <li>
            Developed user interfaces with modern JavaScript frameworks, HTML5,
            and CSS3, which improved user satisfaction by 31%.
          </li>
          <li>Used formsubmit.co for email generation.</li>
        </ul>
      </section>
      <section>
        <h2>Machine Learning Projects</h2>
        <h3>DIABETES DATASET ANALYSIS - Solo Project (used Kaggle dataset)</h3>
        <p>Aug 2022 – Sep 2022, Bangalore, KR</p>
        <ul>
          <li>
            The objective of the project was to determine whether a person is
            diabetic or not.
          </li>
          <li>
            Used ML algorithms such as Logistic Regression, Confusion Matrix,
            and achieved an accuracy of 98%.
          </li>
          <li>
            Used tools such as Matplotlib, Pandas, Seaborn for data
            visualization.
          </li>
        </ul>

        <h3>TITANIC DATASET ANALYSIS - Solo Project (used Kaggle dataset)</h3>
        <p>Sep 2022 – Oct 2021, Bangalore, KR</p>
        <ul>
          <li>
            The objective of the project was to determine whether a passenger
            survived or died on the Titanic.
          </li>
          <li>
            Used ML algorithms such as Logistic Regression, Confusion Matrix,
            and achieved an accuracy of 97%.
          </li>
          <li>
            Used tools such as Matplotlib, Pandas, Seaborn for data
            visualization.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
