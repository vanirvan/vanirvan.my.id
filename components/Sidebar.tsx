import Link from 'next/link'
import { useRouter } from 'next/router'
import IconHouse from './icons/iconHouse'
import IconHouseFill from './icons/iconHouseFill'
import IconWindow from './icons/iconWindow'
import IconWindowFill from './icons/iconWindowFill'

const Sidebar = () => {
	const router = useRouter()

	return (
		<div
			className={`fixed bottom-0 z-10 flex w-full transform justify-center gap-4 overflow-hidden border-[1px] border-white/50 bg-white/25 py-2 backdrop-blur-md sm:bottom-auto sm:left-4 sm:top-[50%] sm:w-max sm:-translate-y-1/2 sm:flex-col sm:rounded-full sm:py-0`}>
			{MenuList.map((menu, key) => (
				<Link key={key} href={menu.link}>
					<div
						className={`cursor-pointer rounded-2xl transition duration-200 ${
							router.pathname == menu.link
								? 'bg-primary-400'
								: 'bg-transparent hover:bg-secondary-300/50'
						} flex h-12 w-12 items-center justify-center`}>
						{router.pathname == menu.link ? (
							<menu.iconSelected className={`h-8 w-8 text-white`} />
						) : (
							<menu.icon className={`h-8 w-8 text-gray-500`} />
						)}
					</div>
				</Link>
			))}
		</div>
	)
}

export default Sidebar

const MenuList = [
	{
		icon: IconHouse,
		iconSelected: IconHouseFill,
		link: '/',
	},
	{
		icon: IconWindow,
		iconSelected: IconWindowFill,
		link: '/project',
	},
]
