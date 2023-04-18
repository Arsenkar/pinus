const Contact = () => {
	return (
		<div>
			<div className='pt-12 pb-32 container '>
				<h1 className='text-2xl font-bold text-center p-4'>
					Let's work together{' '}
				</h1>
				<form className='max-w-[600px] m-auto'>
					<div className='grid grid-cols-2 gap-2'>
						<input
							className='border shadow-lg p-3 outline-none'
							type='text'
							placeholder='Name'
						/>
						<input
							className='border shadow-lg p-3 outline-none'
							type='email'
							placeholder='Email'
						/>
					</div>
					<input
						className='border shadow-lg p-3 outline-none w-full my-2'
						type='text'
						placeholder='Subject'
					/>
					<textarea
						className='border shadow-lg p-3 resize-none outline-none w-full h-52'
						cols='30'
						rows='30'
						placeholder='Message'
					></textarea>
					<button className='p-3 border-none bg-black/90 text-white/75 w-28 mt-2'>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
