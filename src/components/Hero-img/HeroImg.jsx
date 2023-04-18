import Image from 'next/image'

const HeroImg = ({ head, cont, img }) => {
	return (
		<div className='relative' id='Home'>
			<Image
				src={img}
				className=' w-full h-screen '
				width={1920}
				height={100}
			/>

			{/* Overlay */}
			<div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 z-[2]' />
			<div className='absolute top-0 flex items-center justify-center flex-col text-[#F6F5F4]  w-full h-full p-8 z-10'>
				<h2 className='sm:text-5xl sm:text-center text-left  text-4xl font-bold font[][Gideon Roman]'>
					{head}
				</h2>
				<p className='max-w-[550px] text-left sm:text-center text-white/70 py-5 text-xl'>
					{cont}
				</p>
			</div>
		</div>
	)
}

export default HeroImg
