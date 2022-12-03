import Image from 'next/image'

import IconCaretDown from '../icons/iconCaretDown'
import IconGithub from '../icons/social/iconGithub'
import IconTwitter from '../icons/social/iconTwitter'
import IconMail from '../icons/social/iconMail'
import Link from 'next/link'

const AboutMe = () => {
	return (
		<div className={`relative h-[120vh] w-full bg-main`}>
			<div
				className={`relative mx-auto flex h-screen w-full max-w-xs flex-col items-center gap-12 pt-4 sm:max-w-lg sm:justify-center sm:pt-0 md:max-w-2xl`}>
				<div
					className={`flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-8`}>
					<div
						className={`relative aspect-square w-32 overflow-hidden md:h-48 md:w-48`}>
						<Image
							src={`/assets/img/waifu.webp`}
							alt={`vanirvan`}
							fill
							sizes='12rem'
							priority
							className={`rounded-full border-4 border-white object-cover`}
						/>
					</div>
					<div
						className={`flex max-w-xs flex-col items-center text-center sm:items-start sm:text-start`}>
						<span className={`text-2xl font-bold text-white`}>
							Hi, i&rsquo;m Irvan
						</span>
						<div className={`flex flex-col italic text-gray-200`}>
							<span className={``}>
								I love to code and still learning to be better on it. Often use
								Javascript for any project and a little bit with Typescript. I
								speak Indonesian, and English.
							</span>
						</div>
					</div>
				</div>
				<div className={`mx-auto flex flex-col gap-4`}>
					<Link
						target={'_blank'}
						href={`https://www.pixiv.net/en/artworks/25450776`}>
						<span
							className={`border-b-[1px] border-white text-xs italic text-white`}>
							Photo by うず塩 on Pixiv
						</span>
					</Link>
					<div className={`flex gap-4`}>
						{/* Display Social Media List */}
						{SocialMediaList.map((social, key) => (
							<Link key={key} href={social.link} target={'_blank'}>
								<social.icon
									className={`h-8 w-8 cursor-pointer text-gray-500 transition duration-200 hover:text-${social.color}`}
								/>
							</Link>
						))}
					</div>
				</div>
				<div
					className={`absolute bottom-16 flex flex-col items-center sm:bottom-0`}>
					<span className={`font-fira-code text-sm text-white`}>
						Scroll Down
					</span>
					<IconCaretDown className={`h-8 w-8 animate-bounce text-white`} />
				</div>
			</div>
		</div>
	)
}

export default AboutMe

const SocialMediaList = [
	{
		icon: IconGithub,
		link: 'https://github.com/vanirvan',
		color: 'github', // from 'tailwindcss-brand-color' will be parse into 'text-github'
	},
	{
		icon: IconTwitter,
		link: 'https://twitter.com/van_irvan678',
		color: 'twitter',
	},
	{
		icon: IconMail,
		link: 'mailto:vanir1812@gmail.com',
		color: 'youtube',
	},
]
