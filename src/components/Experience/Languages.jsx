import Certificates from "./Certificates";
import LanguageCard from "./LanguageCard";
const Languages = () => {
  const languages = [
    {
      id: 2,
      name: "C#",
      image: "/public/logos/csharp.svg",
    },
    {
      id: 3,
      name: "Python",
      image: "/public/logos/python.svg",
    },
    {
      id: 4,
      name: "JavaScript",
      image: "/public/logos/javascript.svg",
    },
    {
      id: 5,
      name: "TypeScript",
      image: "/public/logos/typescript.svg",
    },
    {
      id: 7,
      name: "SQL",
      image: "/public/logos/sql.svg",
    },
    {
      id: 7,
      name: "java",
      image: "/public/logos/java.svg",
    },
  ];
  const technologies = [
    {
      id: 1,
      name: "ReactJS",
      image: "/public/logos/react.svg",
    },
    {
      id: 2,
      name: "NodeJS",
      image: "/public/logos/nodejs.svg",
    },
    {
      id: 3,
      name: "MongoDB",
      image: "/public/logos/mongodb.svg",
    },
    {
      id: 4,
      name: "ExpressJS",
      image: "/public/logos/express.svg",
    },
    {
      id: 5,
      name: "HTML",
      image: "/public/logos/html.svg",
    },
    {
      id: 6,
      name: "NextJS",
      image: "/public/logos/nextjs.svg",
    },
    {
      id: 7,
      name: "MySql",
      image: "/public/logos/mysql.svg",
    },
    {
      id: 8,
      name: "Postman",
      image: "/public/logos/postman.svg",
    },
    {
      id: 9,
      name: "Tailwind CSS",
      image: "/public/logos/tailwindcss.svg",
    },
    {
      id: 10,
      name: "Git",
      image: "/public/logos/git.svg",
    },
    {
      id: 11,
      name: "GitHub",
      image: "/public/logos/github.svg",
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
              Languages and Techonologies i know
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
