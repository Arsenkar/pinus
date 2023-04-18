import About from '@/components/about/About'
import Hero from '@/components/header/Hero'
import Instagram from '@/components/instagram/Instagram'
import Story from '@/components/story/Story'
// (import { Vodei } from '')
const Home = () => {
	return (
		<div>
			<Hero
				heading='Gününü bizim ile başla '
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '
			/>
			<About />
			<Instagram />
			<Story />
		</div>
	)
}

export default Home
