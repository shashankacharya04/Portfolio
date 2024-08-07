import Certificates from "./Certificates";
import LanguageCard from "./LanguageCard";
import chsarp from "../../../public/logos/csharp.svg";
import python from "../../../public/logos/python.svg";
import javascript from "../../../public/logos/javascript.svg";
import typescript from "../../../public/logos/typescript.svg";
import sql from "../../../public/logos/sql.svg";
import java from "../../../public/logos/java.svg";
import react from "../../../public/logos/react.svg";
import node from "../../../public/logos/nodejs.svg";
import tailwindcss from "../../../public/logos/tailwindcss.svg";
import mongodb from "../../../public/logos/mongodb.svg";
import mysql from "../../../public/logos/mysql.svg";
import html from "../../../public/logos/html.svg";
import express from "../../../public/logos/express.svg";
import git from "../../../public/logos/git.svg";
import github from "../../../public/logos/github.svg";
import postman from "../../../public/logos/postman.svg";
import nextjs from "../../../public/logos/nextjs.svg";
const Languages = () => {
  const languages = [
    {
      id: 2,
      name: "C#",
      image: chsarp,
    },
    {
      id: 3,
      name: "Python",
      image: python,
    },
    {
      id: 4,
      name: "JavaScript",
      image: javascript,
    },
    {
      id: 5,
      name: "TypeScript",
      image: typescript,
    },
    {
      id: 7,
      name: "SQL",
      image: sql,
    },
    {
      id: 7,
      name: "java",
      image: java,
    },
  ];
  const technologies = [
    {
      id: 1,
      name: "ReactJS",
      image: react,
    },
    {
      id: 2,
      name: "NodeJS",
      image: node,
    },
    {
      id: 3,
      name: "MongoDB",
      image: mongodb,
    },
    {
      id: 4,
      name: "ExpressJS",
      image: express,
    },
    {
      id: 5,
      name: "HTML",
      image: html,
    },
    {
      id: 6,
      name: "NextJS",
      image: nextjs,
    },
    {
      id: 7,
      name: "MySql",
      image: mysql,
    },
    {
      id: 8,
      name: "Postman",
      image: postman,
    },
    {
      id: 9,
      name: "Tailwind CSS",
      image: tailwindcss,
    },
    {
      id: 10,
      name: "Git",
      image: git,
    },
    {
      id: 11,
      name: "GitHub",
      image: github,
    },
  ];

  return (
    <>
      <section
        id="techlang"
        className="divider divider-primary font-sans text-3xl mb-20  "
      >
        EXPERIENCE <span className="font-semibold text-red-500">&</span>{" "}
        CERTIFICATES
      </section>
      <section className="flex justify-center items-center mx-56 backdrop-blur-3xl">
        <div className="mockup-browser  border w-screen">
          <div className="mockup-browser-toolbar ">
            <div className="input border-base-300 border text-red-400">
              Languages and Technologies i know
            </div>
          </div>
          <div className="flex gap-2  justify-center flex-wrap  h-auto border p-5 rounded-3xl mt-0">
            {languages.map((lang) => (
              <LanguageCard lang={lang} />
            ))}
            {technologies.map((tech) => (
              <LanguageCard lang={tech} />
            ))}
          </div>
        </div>
      </section>
      <Certificates />
    </>
  );
};

export default Languages;
