import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const projectList = [
	{
		title: "Personal website",
		subHead: "ReactJS",
		git: "https://github.com/alexphl/alexphl.github.io",
		ext: null,
		inProgress: true,
	},
	{
		title: "Dalhousie Schedule Builder",
		subHead: "Next.js, TypeScript",
		git: "https://github.com/alexphl/dal_schedule_builder",
		ext: null,
		inProgress: true,
	},
	{
		title: "Barter - Android App",
		subHead: "Java, Firebase",
		git: "https://github.com/alexphl/csci3130-t7-online-barter-trading",
		ext: null,
		inProgress: false,
	},
	{
		title: "Job Portal web app",
		subHead: "JS, PHP, MySQL",
		git: "https://github.com/alexphl/jobportal_IA",
		ext: "https://web.cs.dal.ca/~olexiy/jobportal/",
		inProgress: false,
	},
];

const Projects = (props?: any) => (
	<div id="projects">
		<h2>My Projects</h2>

		{projectList.map((project) => (
			<div className="project">
				<h5>{project.title}</h5>
				<p>{project.subHead}</p>
				{project.ext && (
					<a href={project.ext}>
						<HiOutlineExternalLink className="icon" />
					</a>
				)}
				<a href={project.git}>
					<FiGithub className="icon" />
				</a>
			</div>
		))}
	</div>
);

export default Projects;
