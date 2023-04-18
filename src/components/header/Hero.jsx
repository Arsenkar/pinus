const Hero = ({ heading, content }) => {
	return (
		<div className='mb-12 w-full h-screen ' id='Home'>
			<video
				src={require('../../../public/cafe.mp4')}
				autoPlay
				muted
				loop
				className='video absolute top-0 '
			/>

			{/* Overlay */}
			<div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' />
			<div className='absolute top-0 flex items-center justify-center flex-col text-[#F6F5F4]  w-full h-full p-8 z-10'>
				<h2 className='sm:text-5xl text-4xl font-bold font[][Gideon Roman]'>
					{heading}
				</h2>
				<p className=' max-w-[600px] text-white/70 text-left sm:text-center py-5 text-xl'>
					{content}
				</p>
			</div>
		</div>
	)
}

export default Hero
