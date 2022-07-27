import type { NextPage } from "next";
import Heads from "./Head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Projects from "./Projects";

export const config = {
  unstable_runtimeJS: false
}

const Home: NextPage = () => {
  return (
    <div id="root">
      <Heads />

      <header>
        <h3> Hi there. </h3>
        <h5>
          <p>
            {" "}
            I&apos;m Alex, glad you found me. I am a 4th year BCS student at
            Dalhousie. My primary skillset that of web and mobile development
            but I&apos;m a generalist at heart. My main career interests lay in
            full-stack web development, Cloud architecture and DevOps, though
            I&apos;m also passionate about mobile computing and UI/UX
            philosophies.
          </p>
          <p>
            {" "}
            This website is a work in progress, but you can check out my
            old-fashioned{" "}
            <a
              href="/files/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF resume
            </a>{" "}
            in the meantime.{" "}
          </p>
        </h5>
      </header>

      <Projects />

      <div className="bgElement"></div>

      <footer>
        <div id="footerLinks">
          <a href="https://www.linkedin.com/in/alex-prokhvatylo-ba0471236/">
            <AiFillLinkedin className="icon" />
          </a>
          <a href="https://github.com/alexphl/">
            <AiFillGithub className="icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
