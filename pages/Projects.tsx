import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const projectList = [
	{
		title: "Data visualizations for EQWorks",
		subHead: "Next.js, tRPC, Prisma",
		image: "/files/project_bg/EQWorks.png",
		git: "https://github.com/alexphl/eqw-appdev-sol",
		ext: "https://eqw-appdev-sol.vercel.app",
		height: "180px",
		label: "In Progress",
	},
	{
		title: "Job Portal web app",
		subHead: "JS, PHP, MySQL",
		image: "/files/project_bg/bg_jobportal.png",
		git: "https://github.com/alexphl/jobportal_IA",
		ext: "https://web.cs.dal.ca/~olexiy/jobportal/",
		height: "180px",
	},
	{
		title: "Barter - Android App",
		subHead: "Java, Firebase",
		image: "/files/project_bg/barter.png",
		git: "https://github.com/alexphl/csci3130-t7-online-barter-trading",
		ext: null,
		height: "180px",
	},
	{
		title: "Personal website (this one)",
		subHead: "ReactJS, TypeScript",
		git: "https://github.com/alexphl/alexphl.github.io",
		ext: null,
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
					backgroundImage:
						(project.image && `url(${project.image})`) || "none",
					height: project.height || "auto",
				}}
			>
				{project.label && <div className="label" key={project.git}>
									{project.label}
								</div>}
				<div className="projectDetails">
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
