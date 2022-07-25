import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const projectList = [
	{
		id: 1,
		title: "Barter - Android App",
		subHead: "Java, Firebase",
		git: "https://github.com/alexphl/csci3130-t7-online-barter-trading",
		ext: null,
	},
	{
		id: 2,
		title: "Job Portal web app",
		subHead: "JS, PHP, MySQL",
		git: "https://github.com/alexphl/jobportal_IA",
		ext: "https://web.cs.dal.ca/~olexiy/jobportal/",
	},
];

const Projects = (props) => {
	return (
		<div id="projects">
			<h2>My other projects</h2>

			{projectList.map((project) => (
				<div className="project">
					<h5>{project.title}</h5>
					<p>{project.subHead}</p>
					{project.ext && <a href={project.ext}>
						<HiOutlineExternalLink className="icon" />
					</a>}
					<a href={project.git}>
						<FiGithub className="icon" />
					</a>
				</div>
			))}
		</div>
	);
};

export default Projects;
