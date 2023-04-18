import Image from 'next/image'
import Link from 'next/link'
import story from '../../../public/story-bg.jpg'

const Story = () => {
	return (
		<div className='relative'>
			<Image
				src={story}
				className=' w-full h-[500px] sm:h-[845px] bg-center bg-cover story-img'
				width={1920}
				height={100}
			/>
			<div className=' container'>
				<div className=' absolute top-0 flex justify-between flex-col text-white px-8 pt-20 sm:pt-56'>
					<p className='max-w-md text-xl mb-8 '>
						From seed to cup, we’ve gone to interminable lengths to realize
						coffee’s full potential. Come experience coffee as we do.
					</p>
					<Link
						className='tracking-widest  text-sm text-black sm:hover:opacity-70 bg-white duration-100 text uppercase max-w-[460px] text-center px-9 py-4'
						href='/our-story'
					>
						Our Story
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Story
