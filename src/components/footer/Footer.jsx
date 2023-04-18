import Link from 'next/link'
import { AiFillFacebook } from 'react-icons/ai'
import { CiInstagram } from 'react-icons/ci'
import { IoIosArrowDropupCircle } from 'react-icons/io'
const Footer = () => {
	return (
		<div className='bg-black/90 w-full pb-2'>
			<div className='border-b '>
				<div className='container pt-14 text-white/70 '>
					<h3 className='uppercase text-6xl font-medium pb-12'>Pinus</h3>
					<div className='flex justify-between pb-12 max-[700px]:flex-col'>
						<ul className='flex '>
							<li>
								<Link href='#Home'>
									<h4 className='text-xl font-medium'>Home</h4>
								</Link>
							</li>
							<li className='px-14'>
								<h4 className='text-2xl font-medium'>More</h4>
								<div className='flex  flex-col'>
									<Link className='pt-2 text-lg font-light' href='/our-story'>
										Our Story
									</Link>
									<Link className='pt-2 text-lg font-light' href='/menu'>
										Menu
									</Link>
									<Link className='pt-2 text-lg font-light' href='/contact'>
										Contact Us
									</Link>
								</div>
							</li>
							<Link className='hover:cursor-pointer pt-2 duration-500' href='/'>
								<IoIosArrowDropupCircle size={40} />
							</Link>
						</ul>
						<form className='pt-12'>
							<div className='border-b  max-w-[274px]'>
								<input
									placeholder='enter your email address'
									className='py-1 pr-2 text-white outline-none bg-transparent input'
								/>
								<button>
									<svg
										class='fill-current text-white undefined'
										width='44'
										height='8'
										viewBox='0 0 44 8'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											transform='scale(1.5714285714285714 1)'
											d='M27.3536 4.35356C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464468C23.9763 0.269206 23.6597 0.269206 23.4645 0.464468C23.2692 0.65973 23.2692 0.976313 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53554C23.6597 7.7308 23.9763 7.7308 24.1716 7.53554L27.3536 4.35356ZM-4.37114e-08 4.5L27 4.5L27 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
										></path>
									</svg>
								</button>
							</div>
							<div className='flex pt-2'>
								<Link href='/'>
									<AiFillFacebook size={25} />
								</Link>
								<Link href='https://www.instagram.com/pinuscafe32/'>
									<CiInstagram size={25} />
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
			<p className='p-4 flex justify-center items-center text-white/70 text-xs font-semibold'>
				© 2022 BLUE BOTTLE COFFEE Inc., All Rights Reserved
			</p>
		</div>
	)
}

export default Footer
