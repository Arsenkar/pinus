import Link from 'next/link'
import {
	default as IgImg1,
	default as IgImg4,
} from '../../../public/instagram-foto/img-1.jpg'
import IgImg2 from '../../../public/instagram-foto/img-2.jpg'
import IgImg3 from '../../../public/instagram-foto/img-3.jpg'
import IgImg5 from '../../../public/instagram-foto/img-5.JPG'
import IgImg6 from '../../../public/instagram-foto/img-6.jpg'
import Instagramimg from './Instagramimg'

const Instagram = () => {
	return (
		<div className='container py-24 text-center'>
			<h3 className='text-3xl font-semibold'>Follow our on Instagram</h3>
			<Link
				className='block text-xl pb-8 pt-1'
				href='https://www.instagram.com/pinuscafe32/'
			>
				@pinuscafe32
			</Link>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-[430px]:grid-cols-1 gap-2 p-4'>
				<Instagramimg img={IgImg1} />
				<Instagramimg img={IgImg2} />
				<Instagramimg img={IgImg3} />
				<Instagramimg img={IgImg4} />
				<Instagramimg img={IgImg5} />
				<Instagramimg img={IgImg6} />
			</div>
		</div>
	)
}

export default Instagram
