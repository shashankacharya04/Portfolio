import React from "react";
import {
  ChartNoAxesCombined,
  Info,
  Origami,
  Contact,
  StickyNote,
} from "lucide-react";
const Navbar = () => {
  return (
    <div className="navbar bg-transparent bg-base-100 " id="nav">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">PORTFOLIO</a>
      </div>
      <div className="tabs tabs-lifted tabs-lg">
        <a role="tab" className="tab" href="#about">
          <div className="flex gap-1">
            <Info color="#836363" className="mt-2" />
            <span>info</span>
          </div>
        </a>
        <a role="tab" href="#techlang" className="tab ">
          <div className="flex gap-1">
            <ChartNoAxesCombined className="mt-1" color="#836363" />
            <span>Experience</span>
          </div>
        </a>
        <a role="tab" href="#projects" className="tab">
          <div className="flex gap-1">
            <Origami className="mt-1" color="#836363" />
            <span>Projects</span>
          </div>
        </a>
        <a role="tab" className="tab" href="#footer">
          <div className="flex gap-1">
            <Contact className="mt-1" color="#836363" />
            <span>Contact</span>
          </div>
        </a>
        <a
          role="tab"
          className="tab"
          href="public\certificates\Shashank-resume.pdf"
          download
        >
          <div
            className="flex gap-1 tooltip hover:tooltip-open tooltip-bottom"
            data-tip="Download Resume"
          >
            <StickyNote className="mt-1" color="#836363" />
            <span>Resume</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
