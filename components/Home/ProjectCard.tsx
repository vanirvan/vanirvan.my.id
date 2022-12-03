import Image from 'next/image'
import Link from 'next/link'
import IconGithub from '../icons/social/iconGithub'
import IconWeb from '../icons/iconWeb'

type ProjectProps = {
	thumbnail: string
	title: string
	description: string
	visit: string
	github: string
	detail: string
}

const ProjectCard = ({
	thumbnail,
	title,
	description,
	visit,
	github,
	detail,
}: ProjectProps) => {
	return (
		<div
			className={`flex w-full transform flex-col overflow-hidden rounded-2xl bg-white transition duration-300 hover:scale-105 hover:shadow-2xl`}>
			<div className={`relative aspect-video`}>
				<Image
					src={thumbnail}
					alt={`placeholder`}
					fill
					sizes='400px'
					className={`object-cover`}
				/>
			</div>
			<div className={`flex flex-col gap-2 p-4 text-gray-900`}>
				<Link href={detail}>
					<span className={`text-xl`}>{title}</span>
				</Link>
				<span className={`text-gray-600`}>{description}</span>
				<div className={`mt-4 flex items-center justify-end gap-4`}>
					<Link
						target={'_blank'}
						href={visit}
						className={`flex items-center gap-2 text-gray-500 transition duration-300 hover:text-gray-900`}>
						<IconWeb />
						<span>Visit</span>
					</Link>
					<Link
						target={'_blank'}
						href={github}
						className={`flex items-center gap-2 text-gray-500 transition duration-300 hover:text-gray-900`}>
						<IconGithub />
						<span>Github</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
