import ProjectCard from '../../components/Home/ProjectCard'
import projectList from '../../utils/data/projectList'

const Projects = () => {
	return (
		<div
			className={`relative mx-auto flex w-full max-w-xs flex-col items-center gap-12 pt-16 font-roboto sm:max-w-lg sm:justify-center md:max-w-2xl lg:max-w-4xl xl:max-w-5xl`}>
			<div className={`flex w-max flex-col items-center gap-2`}>
				<span className={`text-4xl font-bold`}>Projects</span>
				<div className={`h-1 w-3/4 rounded-full bg-secondary-500`}></div>
			</div>
			<div
				className={`grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3`}>
				{projectList.map((project, key) => (
					<ProjectCard
						thumbnail={project.thumbnail}
						title={project.title}
						description={project.description}
						visit={project.visit}
						github={project.github}
						detail={project.detail}
						key={key}
					/>
				))}
			</div>
		</div>
	)
}

export default Projects
