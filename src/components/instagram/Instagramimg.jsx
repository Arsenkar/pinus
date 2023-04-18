import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'

const Instagramimg = ({ img }) => {
	return (
		<div className='relative'>
			<Image src={img} alt='instagram' className='w-full h-full' />
			{/* overlay */}
			<div className='flex  justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 duration-500 group cursor-pointer:'>
				<p className='text-gray-300 opacity-0 group-hover:opacity-100 duration-500'>
					<Link href='https://www.instagram.com/pinuscafe32/'>
						<FiInstagram size={45} className='z-10' />
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Instagramimg
