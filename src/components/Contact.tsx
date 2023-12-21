import { AwesomeButton } from "react-awesome-button";
import { Fade } from "react-awesome-reveal";
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  return (
    <div className="flex flex-col h-full px-3 overflow-x-hidden overflow-y-auto dark:bg-[#2a2a2a] bg-white transition-all duration-300">
      <div className="flex flex-col items-center justify-center w-full md:min-h-full gap-10 mb-[80px] md:mb-2 mt-24 md:mt-2">
        <div className="max-w-[650px] items-center justify-center flex flex-col gap-10 text-left relative">
          <Fade delay={1000} triggerOnce={true}>
            <h1 className="dark:text-[#cacaca] uppercase md:text-[2.625em] text-[2em] font-extrabold text-[#434343]">
              Get in touch
            </h1>
          </Fade>
          <Fade
            delay={1300}
            triggerOnce={true}
            className="flex items-center justify-center w-full text-center"
          >
            <small className="dark:text-[#9a9a9a] text-[#6e6e6e]">
              {`If you want to get in touch, talk to me about a project collaboration, or just say hi, please send an email to `}
              <a
                href="mailto:tardis.abs@gmail.com"
                className="text-2xl dark:text-[#bbbbbb] transition-all duration-300 dark:hover:text-white text-[#787878] hover:text-[#020202]"
              >
                {" "}
                tardis.abs@gmail.com
                {"  "}
              </a>
              and let's talk.
            </small>
          </Fade>
          <div className="w-full">
            <Fade delay={1500} triggerOnce={true}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-80.9238325!3d46.5225589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen={true}
                loading="lazy"
                className="min-h-[300px]"
              />
            </Fade>
          </div>
          <Fade delay={1700} triggerOnce={true}>
            <h1 className="dark:text-[#cacaca] uppercase text-[1.25em] font-extrabold text-[#434343]">
              Let's get social
            </h1>
            <p className="dark:text-[#9a9a9a] text-center md:text-left text-sm text-[#747474]">
              Follow profiles on Twitter, GitHub and Linkedin.
            </p>
          </Fade>

          <Fade delay={1900} triggerOnce={true}>
            <div className="grid items-center justify-center grid-cols-2 gap-5 md:grid-cols-4">
              <AwesomeButton type="twitter" href={socialLinks.twitter}>
                <span className="flex items-center justify-center gap-1">
                  <BsTwitter size={20} />
                  <span className="text-sm font-light uppercase">Twitter</span>
                </span>
              </AwesomeButton>
              <AwesomeButton type="linkedin" href={socialLinks.linkedin}>
                <span className="flex items-center justify-center gap-1">
                  <BsLinkedin size={20} />
                  <span className="text-sm font-light uppercase">Linkedin</span>
                </span>
              </AwesomeButton>
              <AwesomeButton type="instagram" href={socialLinks.discord}>
                <span className="flex items-center justify-center gap-1">
                  <BsDiscord size={20} />
                  <span className="text-sm font-light uppercase">Discord</span>
                </span>
              </AwesomeButton>
              <AwesomeButton type="github" href={socialLinks.github}>
                <span className="flex items-center justify-center gap-1">
                  <BsGithub size={20} />
                  <span className="text-sm font-light uppercase">Github</span>
                </span>
              </AwesomeButton>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
