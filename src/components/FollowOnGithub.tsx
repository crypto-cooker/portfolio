import { Fade } from "react-awesome-reveal";
import { socialLinks } from "../data/socialLinks";

export default function FollowOnGithub() {
  return (
    <Fade delay={2200}>
      <div
        className="absolute top-10 md:top-20 rotate-45 -right-[80px] shadow-2xl flex items-center justify-center cursor-pointer bg-blue-500 hover:bg-blue-600 duration-300
      transition-all z-[9999]"
      >
        <a
          className="py-2 px-[100px] text-white"
          href={socialLinks.github}
          target="_blank"
          rel="referrer"
        >
          <h1 className="text-[10px] md:text-[16px]">Follow On Github</h1>
        </a>
      </div>
    </Fade>
  );
}
