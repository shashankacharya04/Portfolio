import React, { useState } from "react";

const Projects = () => {
  // for selected projects
  const [selectedProject, setSelectedProject] = useState("Full-Stack ChatApp");
  const projects = [
    {
      id: "#item1",
      projectName: "Full-Stack ChatApp",
      description:
        "This ChatApp is a real-time messaging application built with React, designed to enhance user communication with key interactive features, including typing and online status indicators.",
      github: "https://github.com/shashankacharya04/RealTime-ChatApp",
      image: "/public/projectpic/chatapp.jpg",
      link: "https://chat-app-prod-8esa.onrender.com/",
    },
    {
      id: "#item2",
      projectName: "MovieZone",
      description:
        "MovieZone is a sleek and user-friendly application designed to help movie enthusiasts discover and explore movies effortlessly. The app integrates with a movie API to provide users with the latest movie information and details.",
      github: "https://github.com/shashankacharya04/MovieApp",
      image: "/public/projectpic/MovieApp.jpg",
    },
    {
      id: "#item3",
      projectName: "TodoList",
      description:
        "This project is a simple yet functional TodoList application built with React. It allows users to manage their tasks efficiently by providing features such as adding, editing, and deleting tasks.",
      github: "https://github.com/shashankacharya04/Todo",
      image: "/public/projectpic/todo.jpg",
    },
    {
      id: "#item4",
      projectName: "JsonPlaceholder",
      description:
        "This project is a dynamic frontend application that utilizes the JSONPlaceholder API, a free online REST API that provides fake data for testing and prototyping. The application showcases a variety of data types, including posts, comments, users, and more, to demonstrate the capabilities of working with RESTful APIs.",
      github: "https://github.com/shashankacharya04/Jsonplaceholdertest",
      image: "/public/projectpic/fetching.jpg",
    },
  ];
  //   filtering single users based on the projects clicked
  const singleProj = projects.filter(
    (proj) => proj.projectName === selectedProject
  );
  return (
    <section id="projects">
      <div className="divider divider-primary font-sans text-3xl mb-10 ">
        PROJECTS
      </div>
      <div className="flex ml-52 gap-8">
        <div className="">
          <div className="carousel w-96 h-96">
            {/* mapping each carousal */}
            {projects.map((proj) => (
              <div
                id={proj.id.substring(1, 6)}
                className="carousel-item w-full"
                key={proj.id}
              >
                <img src={proj.image} className="rounded-3xl" />
              </div>
            ))}
          </div>

          {/* buttons of the carousal */}
          <div className="flex w-full justify-center gap-2 py-2">
            {projects.map((proj) => (
              <a
                href={proj.id}
                className="btn btn-xs"
                key={proj.id}
                onClick={() => setSelectedProject(proj.projectName)}
              >
                {proj.projectName}
              </a>
            ))}
          </div>
        </div>
        {/* project description */}
        <div className="card card-side bg-base-100 shadow-xl bg-transparent backdrop-blur-3xl">
          <div className="card-body bg-transparent">
            <h2 className="card-title font-semibold text-">
              {singleProj[0].projectName}
            </h2>
            <p>{singleProj[0].description}</p>
            {singleProj[0].link && (
              <div className="flex gap-4">
                <span>Hosted: </span>
                <a
                  className="link link-hover"
                  target="_blank"
                  href={singleProj[0].link}
                >
                  {singleProj[0].link}
                </a>
              </div>
            )}
            <div className="flex gap-4">
              <span>Github Repository: </span>
              <a
                className="link link-hover"
                target="_blank"
                href={singleProj[0].github}
              >
                {singleProj[0].github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

{
  /* <div id="item1" className="carousel-item w-full">
              <img
                src="\public\projectpic\chatapp.jpg"
                className="rounded-3xl"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="\public\projectpic\MovieApp.jpg"
                className="rounded-3xl"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src="\public\projectpic\todo.jpg" className="rounded-3xl" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="\public\projectpic\fetching.jpg"
                className="rounded-3xl"
              />
            </div> */
}
