import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const projectList = [
	{
		title: "Job Portal web app",
		subHead: "JS, PHP, MySQL",
		image: "/files/project_bg/bg_jobportal.png",
		git: "https://github.com/alexphl/jobportal_IA",
		ext: "https://web.cs.dal.ca/~olexiy/jobportal/",
		height: '180px',
	},
	{
		title: "Barter - Android App",
		subHead: "Java, Firebase",
		image: "/files/project_bg/barter.png",
		git: "https://github.com/alexphl/csci3130-t7-online-barter-trading",
		ext: null,
		height: '180px',
	},
	{
		title: "Dalhousie Schedule Builder",
		subHead: "Next.js, TypeScript",
		image: null,
		git: "https://github.com/alexphl/dal_schedule_builder",
		ext: null,
		height: null,
	},
	{
		title: "Personal website",
		subHead: "ReactJS, TypeScript",
		image: null,
		git: "https://github.com/alexphl/alexphl.github.io",
		ext: null,
		height: null,
	},
];

const Projects = (props?: any) => (
	<div id="projects">
		<h2>My Projects</h2>

		{projectList.map((project) => (
			<div
				className="project"
				key={project.git}
				style={{
					backgroundImage: `url(${project.image})`,
					height: `${project.height}`,
				}}
			>
				<div id="details">
					<h5>{project.title}</h5>
					<p>{project.subHead}</p>
					{project.ext && (
						<a href={project.ext}>
							<HiOutlineExternalLink className="icon" />
						</a>
					)}
					<a href={project.git} rel="prefetch">
						<FiGithub className="icon" />
					</a>
				</div>
			</div>
		))}
	</div>
);

export default Projects;
