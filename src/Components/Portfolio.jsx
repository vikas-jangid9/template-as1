/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/different-typs-of-wedsite.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Budget-app",
    description:
      "A React budget app helps users track their income and expenses, providing visual insights and reports for effective financial management.",
    url: "https://github.com/vikas-jangid9/ejtos-react_budget_app",
  },
  {
    title: "E-commerce website",
    description:
      "This is a basic e-commerce website built using HTLM, CSS, JavaScript.",
    url: "https://vikas-jangid9.github.io/E-commerce-website/",
  },
  {
    title: "Ludo-game",
    description:
      "Ludo game is created using python tkinker. this gives me more logic thinking and problem solving approch.",
    url: "https://github.com/vikas-jangid9/ludo-game-python",
  },
  {
    title: "To-Do list",
    description:
      "This To-Do list is creating using Django in backend and React.js in frontend. All this data store in database using postgresql. ",
    url: "https://github.com/vikas-jangid9/django-react-app-Task_Manager",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
