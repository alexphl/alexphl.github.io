import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const projectList = [
	{
		title: "Data Visualizations for EQWorks",
		subHead: "Next.js, tRPC, Prisma",
		image: "/files/project_bg/eqworks.webp",
		git: "https://github.com/alexphl/eqw-appdev-sol",
		ext: "https://eqw-appdev-sol.vercel.app",
		label: "In Progress",
	},
	{
		title: "Job Portal Web App",
		subHead: "JS, PHP, MySQL",
		image: "/files/project_bg/bg_jobportal.webp",
		git: "https://github.com/alexphl/jobportal_IA",
		ext: "https://web.cs.dal.ca/~olexiy/jobportal/",
	},
	{
		title: "Barter - Android App",
		subHead: "Java, Firebase",
		image: "/files/project_bg/barter.webp",
		git: "https://github.com/alexphl/csci3130-t7-online-barter-trading",
	},
	{
		title: "Personal Website (this one)",
		subHead: "ReactJS, TypeScript",
		git: "https://github.com/alexphl/alexphl.github.io",
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
					height: project.image && "180px" || "auto",
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
