import type { NextPage } from "next";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Projects from "./Projects";

export const config = {
	unstable_runtimeJS: false,
};

const Home: NextPage = () => {
	return (
		<div id="root">
			<header>
				<h3> Hi there. </h3>
				<h5> I&apos;m Alex, glad you found me.</h5>
				<p>
					I am a 4th year BCS student at Dalhousie U. My primary skillset
					that full-stack web and mobile development but I&apos;m a
					generalist at heart.
				</p>
				<p>
					My main career interests are in web development, cloud
					architectures and DevOps, though I also like to dabble in mobile
					computing and exploring UI/UX philosophies.
				</p>
				<p>
					{" "}
					This website is a work in progress and has a long journey ahead
					of it. In the meantime, you can check out my old-fashioned{" "}
					<a
						href="/files/Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						PDF resume
					</a>
					.{" "}
				</p>
				<p>
					As with most of my personal projects, no templates or ready-made
					UI components were used here. For what it&apos;s worth, all
					designs are my own.
				</p>
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