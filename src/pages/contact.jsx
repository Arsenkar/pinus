import HeroImg from '@/components/Hero-img/HeroImg'
import Contact from '@/components/contact/Contact'
import heroImg from '../../public/contact.jpg'

const contact = () => {
	return (
		<div>
			<HeroImg
				head={'Bize Ulaşın'}
				cont={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '
				}
				img={heroImg}
			/>
			<Contact />
		</div>
	)
}

export default contact
