import ProjectCard from './ProjectCard'

import Image from 'next/image'
import Link from 'next/link'

// lists of projects
import projectList from '../../utils/data/projectList'

const Projects = () => {
	return (
		<div
			className={`mx-auto flex w-full max-w-xs -translate-y-24 transform flex-col rounded-2xl border-[1px] border-white/50 bg-white/25 p-4 backdrop-blur-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl`}>
			<span className={`text-2xl font-bold text-gray-800`}>Projects</span>
			{projectList.length > 0 ? (
				<>
					<div
						className={`grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3`}>
						{projectList.slice(0, 3).map((project, key) => (
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
					{/* maximum project shown is 3, if more than that, show button to go to projects page */}
					{projectList.length > 3 ? (
						<div className={`mt-16 flex flex-col items-center gap-4`}>
							<span className={`text-4xl font-bold`}>There&rsquo;s more!</span>
							<Link href={`/project`}>
								<button
									className={`rounded-2xl bg-secondary-500 px-4 py-2 text-white`}>
									See other projects
								</button>
							</Link>
						</div>
					) : null}
				</>
			) : (
				<div className={`flex w-full flex-col items-center gap-y-4`}>
					<div className={`rounded-2x relative aspect-video w-full max-w-md`}>
						<Image
							src={`/assets/img/not found.webp`}
							alt={`not found`}
							fill
							sizes={`16rem`}
							className={`object-cover`}
						/>
					</div>
					<Link
						href={`https://www.istockphoto.com/id/vektor/orang-atau-pengusaha-hilang-di-labirin-atau-labirin-ilustrasi-gambar-tongkat-kartun-gm1366754976-437192896`}
						target={'_blank'}>
						<span className={`border-b-[1px] border-black text-xs italic`}>
							Photo by iStock
						</span>
					</Link>
					<span className={`font-fira-code text-xl`}>
						Huh? Weird. There&rsquo;s nothing in here.
					</span>
				</div>
			)}
		</div>
	)
}

export default Projects
