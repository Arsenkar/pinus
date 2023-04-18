import HeroImg from '@/components/Hero-img/HeroImg'
import OurStory from '@/components/our-story/OurStory'
import storyImg from '../../public/story.jpg'

const ourStory = () => {
	return (
		<div className='our'>
			<HeroImg
				head={'Read the Our Story'}
				cont='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '
				img={storyImg}
			/>
			<OurStory />
		</div>
	)
}

export default ourStory
