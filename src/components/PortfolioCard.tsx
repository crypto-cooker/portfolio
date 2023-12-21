import { useState } from "react";

export default function PortfolioCard(props: {
  imgUrl: string;
  summary: string;
  role: string;
  siteUrl: string;
  skills: string[];
}) {
  const [showData, setShowData] = useState(false);
  return (
    <div className="w-full shadow-custom animate__animated animate__fadeInUp">
      <div className="w-full relative h-[24px] bg-[#ddd] text-[#6a6a6a] flex items-center justify-center">
        <h1 className="text-sm">{props.siteUrl}</h1>
        <i
          className="w-[12px] h-[12px] bg-[#ff5f57] rounded-full absolute top-[6px] left-[10px]
        before:w-[12px] before:h-[12px] before:bg-[#ffbd2e] before:rounded-full before:absolute before:top-[0px] before:left-[16px]
        after:w-[12px] after:h-[12px] after:bg-[#28ca41] after:rounded-full after:absolute after:top-[0px] after:left-[32px]"
        ></i>
      </div>
      <div
        className="relative w-full cursor-pointer min-h-[200px]"
        id="img"
        onMouseEnter={() => setShowData(true)}
        onMouseLeave={() => setShowData(false)}
      >
        <img
          src={props.imgUrl}
          className="object-cover w-full max-h-[200px] h-full"
          alt=""
        />
        <div
          id="data"
          className={`absolute bg-black bg-opacity-90 transition-all duration-500 top-0 flex items-center justify-center ${
            showData ? "w-full h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div
            className={
              showData
                ? "relative flex flex-col justify-center items-center gap-2 px-1 text-center"
                : "hidden"
            }
          >
            <p className="text-sm font-bold text-gray-100">{props.role}</p>
            <p className="text-xs text-gray-300">{props.summary}</p>
            <div className="flex gap-2 mt-1 text-gray-300">
              {props.skills.map((item, key) => (
                <li className="text-xs" key={key}>
                  {item}
                </li>
              ))}
            </div>
            <a
              href={props.siteUrl}
              target="_blank"
              rel="referrer"
              className={`px-2 py-2 w-[100px] flex items-center justify-center font-extrabold text-[#999] uppercase bg-[#313131] rounded-sm text-[.6em] cursor-pointer hover:bg-[#474747] duration-300 transition-all
              border-b-2 border-white
          `}
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
