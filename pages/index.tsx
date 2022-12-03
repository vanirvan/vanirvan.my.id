import Head from 'next/head'
import AboutMe from '../components/Home/AboutMe'
import Projects from '../components/Home/Projects'

const Home = () => {
	return (
		<>
			<Head>
				<title>Home - Vanirvan</title>
			</Head>
			<div className={`relative flex h-full w-full flex-col font-roboto`}>
				<AboutMe />
				<Projects />
			</div>
		</>
	)
}

export default Home
