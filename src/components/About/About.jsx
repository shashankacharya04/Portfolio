import React from "react";
const About = () => {
  return (
    <div>
      <div
        className="divider divider-primary font-sans text-3xl mb-32"
        id="about"
      >
        <span> ABOUT</span>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-32 ">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end border border-gray-500 p-5 rounded-2xl">
            <time className="font-mono italic text-purple-500">2015-2018</time>
            <div className="text-lg font-black">ST THERESE HIGH SCHOOL</div>I
            completed my Highschool from St.therese High School belthangady in
            2018. Although the exposure to Computer Science was minimal they
            taught us how to use MS Word, MS Paint And some Basic Structue of a
            computer. Other than these subjects we were thought Mathematics,
            Science, Social Science, Kannada, Hindi And English
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 border border-gray-500 p-5 rounded-2xl">
            <time className="font-mono italic text-purple-500">2018-2021</time>
            <div className="text-lg font-black">
              S.D.M PRE UNIVERSITY COLLEGE ( PCMS )
            </div>
            Right after my High-school i joined SDM Pre University college
            ujire, Here i took PCMS(Statistics) here i got to know about the
            core concepts of Statistics and Also got into many Extra-curricular
            Activities
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end border border-gray-500 p-5 rounded-2xl">
            <time className="font-mono italic text-purple-500">2021-2024</time>
            <div className="text-lg font-black">
              SDM AUTONOMOUS COLLEGE UJIRE ( BCA )
            </div>
            After my Pre-University i chose SDM Autonomous College for my
            Bacherlor's in Computer Applications Degree. This is where my
            programming journey began. I got to know a lot about Databases, Data
            Structure and Algorithms , Various Programming Languages and their
            implementations, Team Work, Computer NetWorks, Operating Systems
            Also learned nodejs and Reactjs as a hobby
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 border border-gray-500 p-5 rounded-2xl ">
            <time className="font-mono italic text-purple-500">2024</time>
            <div className="text-lg font-black">REACT JS WORKSHOP </div>
            This 6 days workshop was organisized by CodelabSystems Mangalore
            during this workshop i learned various concepts about react in
            depth, concepts like Hooks, Custom Hooks , React Router, deploying
            react applications they have also handed us workshop completion
            certificates
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default About;
