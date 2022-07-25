import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Projects from "./components/Projects";
import Pdf from "./files/Resume.pdf";

function App() {
  return (
    <>
      <header>
        <h3> Hi there. </h3>
        <h5>
          <p>
            {" "}
            I'm Alex, glad you found me. I am a 4th year BCS student at
            Dalhousie. My primary skillset that of web and mobile development
            but I’m a generalist at heart. My main career interests lay in
            full-stack web development, Cloud architecture and DevOps, though
            I'm also passionate about mobile computing and UI/UX philosophies.
          </p>
          <p>
            {" "}
            This website is a work in progress, but you can check out my
            old-fashioned{" "}
            <a href={Pdf} target="_blank" rel="noreferrer">
              PDF resume
            </a>{" "}
            in the meantime.{" "}
          </p>
        </h5>
      </header>

      <Projects />

      <div class="bgElement"></div>

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
    </>
  );
}

export default App;
