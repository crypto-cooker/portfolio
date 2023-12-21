import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CSSTransition } from "react-transition-group";

import PortfolioCard from "./PortfolioCard";

import { filterKey, projectData } from "../data/portfolioData";

export default function Portfolio() {
  const [filter, setFilter] = useState("*");
  const [filterData, setFilterData] = useState(projectData);
  const [loading, setLoading] = useState(false);

  const handleFilterFunc = async (key: string) => {
    try {
      setLoading(true);
      setFilter(key);
      setFilterData([]);

      await new Promise((resolve) => setTimeout(resolve, 800));

      const filteredData =
        key === "*"
          ? projectData
          : projectData.filter((item) => item.type.includes(key));
      setFilterData(filteredData);
    } catch (error) {
      // Handle any errors that may occur
      console.error("An error occurred while filtering data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center w-full h-full overflow-x-hidden overflow-y-auto dark:bg-[#2a2a2a] bg-white px-3 transition-all duration-300">
      <div className="max-w-[880px] md:min-w-[700px] lg:min-w-[880px] flex items-center justify-center flex-col gap-7 mb-[170px] mt-[90px]">
        <Fade delay={1000} triggerOnce={true}>
          <h1 className="uppercase md:text-[2.5em] text-[2em] text-center font-extrabold dark:text-[#cacaca] text-[#434343]">
            My Recently Works
          </h1>
        </Fade>
        <Fade delay={1000} triggerOnce={true}>
          <p className="text-[#8a8a8a] text-md text-center">
            Check out my latest web | blockchain development portfolio projects.
          </p>
        </Fade>
        <Fade delay={1300} triggerOnce={true} className="w-full">
          <div className="grid items-center justify-center w-full grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {filterKey.map((data, key) => (
              <div
                key={key}
                className={`flex items-center justify-center rounded-[4px] px-3 py-2 w-full font-medium border-r-2 border-[1px] dark:border-[#1a1a1a]
                  border-b-[3px] uppercase dark:bg-[#313131] md:text-[.7em] text-[.65em] cursor-pointer dark:hover:bg-[#474747] hover:bg-gray-200 duration-300 transition-all text-center
                 border-gray-200
            ${
              filter === data.key
                ? `dark:bg-[#5d5d5d] dark:text-white text-[#000000] bg-gray-300`
                : "text-[#999]"
            }`}
                onClick={() => handleFilterFunc(data.key)}
              >
                <span>{data.title}</span>
              </div>
            ))}
          </div>
          {filter === "*" ? (
            <small className="text-[#8a8a8a] text-[12px] uppercase">
              showing all projects.
            </small>
          ) : (
            <small className="text-[#8a8a8a] text-[12px] uppercase">
              {" "}
              showing{"  "}
              <span className="text-xl text-black dark:text-white">
                {filterData.length}
              </span>
              {"  "}
              projects filter by {filter}.{" "}
            </small>
          )}
        </Fade>
        <Fade delay={1600} className="w-full">
          <div className="grid w-full gap-10 md:grid-cols-2">
            {filterData.map((data, index) => (
              <CSSTransition timeout={3000} classNames="fade" key={index}>
                <PortfolioCard
                  key={index}
                  role={data.role}
                  summary={data.summary}
                  imgUrl={data.imgUrl}
                  siteUrl={data.siteUrl}
                  skills={data.skills}
                />
              </CSSTransition>
            ))}
          </div>
        </Fade>
      </div>
      <div
        id="data"
        className={`absolute dark:bg-[#313131] bg-[#ecebeb] transition-all duration-300 top-0 flex items-center justify-center ${
          loading ? "w-full h-1/2 opacity-100" : "h-0 opacity-0"
        }`}
      ></div>
      <div
        id="data"
        className={`absolute dark:bg-[#2e2e2e] bg-[#eae9e9] transition-all duration-300 bottom-0 flex items-center justify-center ${
          loading ? "w-full h-1/2 opacity-100" : "h-0 opacity-0"
        }`}
      ></div>
    </div>
  );
}
