import "react-awesome-button/dist/styles.css";
import { Fade } from "react-awesome-reveal";
import { PiStudentFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { SiRetool } from "react-icons/si";

import { skillSets, knowledgeSets } from "../data/aboutData";

export default function About() {
  return (
    <div className="flex flex-col h-full px-3 overflow-x-hidden overflow-y-auto dark:bg-[#2a2a2a] bg-white py-100 transition-all duration-300">
      <div className="flex items-center justify-center w-full md:min-h-full mb-[80px] md:mb-[50px] mt-[70px] md:mt-2">
        <div className="max-w-[650px] items-start justify-start flex flex-col gap-7 text-center relative w-full">
          <Fade delay={1000} triggerOnce={true} className="w-full">
            <h1 className="uppercase text-[25px] md:text-[30px] font-semibold dark:text-[#cacaca] text-[#434343] flex gap-2 items-center justify-start">
              <PiStudentFill />
              Education
            </h1>
            <div className="flex items-center justify-start dark:bg-[#313131] bg-gray-100 p-1 rounded-md w-full">
              <img
                src="/imgs/universityMark.jpg"
                alt=""
                className="w-[150px] object-cover rounded-md"
              />
              <div className="flex flex-col items-start justify-start gap-3 p-4">
                <span className="text-sm md:text-2xl dark:text-gray-200 text-[#434343]">
                  Osaka University
                </span>
                <p className="text-[#8a8a8a] text-md text-left">
                  {`2011.4 ~ 2015.5`}
                </p>
                <p className="text-[#8a8a8a] text-md text-left">
                  Bachelor Degree of Computer Science
                </p>
              </div>
            </div>
          </Fade>
          <Fade delay={1500} triggerOnce={true} className="w-full">
            <h1 className="flex items-center justify-start gap-4 uppercase text-[25px] md:text-[30px] font-semibold dark:text-[#cacaca] text-[#434343]">
              <FaTools size={24} />
              Skill Sets
            </h1>
            <div className="grid items-center justify-start w-full grid-cols-4 gap-3 md:grid-cols-6">
              {skillSets.map((item, key) => (
                <div
                  key={key}
                  className={`px-2 py-2 font-medium border-[1px] dark:border-[#222] border-gray-200 border-r-2 dark:text-[#999]
                   text-[#434343] bg-gray-100 border-b-[3px] shadow-lg uppercase dark:bg-[#313131] rounded-[4px] md:text-[.7em]
                    text-[.65em] cursor-pointer dark:hover:bg-[#474747] hover:bg-gray-300 duration-300 transition-all text-center`}
                >
                  {item}
                </div>
              ))}
            </div>
          </Fade>
          <Fade delay={1800} triggerOnce={true}>
            <h1 className="flex items-center justify-center gap-3 uppercase text-[25px] md:text-[30px] font-semibold dark:text-[#cacaca] text-[#434343]">
              <SiRetool size={23} />
              KNOWLEDGE
            </h1>
            <div className="grid items-center justify-center w-full grid-cols-3 gap-3 md:grid-cols-4">
              {knowledgeSets.map((item, key) => (
                <div
                  key={key}
                  className={`w-full px-1 py-6 md:py-1 h-[50px] flex items-center justify-center border-gray-200 border-r-2 text-[#636363]
                   bg-gray-100 font-medium border-[1px] dark:border-[#222] dark:text-[#999] border-b-[3px] shadow-lg uppercase dark:bg-[#313131] rounded-[4px]
                    md:text-[.7em] text-[.65em] cursor-pointer dark:hover:bg-[#474747] duration-300 transition-all text-center hover:bg-gray-300`}
                >
                  {item}
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
