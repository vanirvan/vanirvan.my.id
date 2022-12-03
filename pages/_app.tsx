import '../styles/globals.css'
import '../styles/scroll.css'
import type { AppProps } from 'next/app'
// import { useEffect } from 'react'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import Sidebar from '../components/Sidebar'
// import Footer from '../components/Footer'

// import fonts from fontsource.org
import '@fontsource/fira-code'
import '@fontsource/roboto'

export default function App({ Component, pageProps }: AppProps) {
	// useEffect(() => {
	// 	const body = document.body
	// 	body.classList.add('debug-screens')
	// }, [])
	return (
		<>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<title>Vanirvan</title>
			</Head>
			<NextNProgress color={`#65c3c8`} height={6} startPosition={0.3} />
			<div className={`relative w-full bg-gray-100 font-roboto`}>
				<Sidebar />
				<Component {...pageProps} />
				{/* <Footer /> */}
			</div>
		</>
	)
}
