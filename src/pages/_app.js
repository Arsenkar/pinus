import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
