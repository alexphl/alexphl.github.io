import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <header>
        <h3> Hi there. </h3>
        <h5>
          <p>
            {" "}
            I'm Alex, glad you found me. This is my portfolio website and a
            React pet project. I'm likely working on it as you're reading this.
          </p>
          <p>
            {" "}
            Big things are planned, you can check out the{" "}
            <a href="https://github.com/alexphl/alexphl.github.io">
              source code
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
