import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import logoImg from '../../../public/logo.jpg'

const Header = () => {
	const [nav, setNav] = useState(false)
	const [color, setColor] = useState('trans')
	const [link, setLink] = useState('link')

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY > 90) {
				setColor('black')
			} else {
				setColor('trans')
			}
		}

		window.addEventListener('scroll', changeColor)
	})

	return (
		<header>
			<div
				className={`${color} fixed top-0 right-0 left-0 z-20 ease-in-out duration-500`}
			>
				<div className='container'>
					<nav className='flex z-20 justify-between items-center p-4 text-[#F6F5F4] '>
						<Link href='/' className='hover:cursor-pointer  z-20'>
							<Image
								src={logoImg}
								width={52}
								height={52}
								className='text-white z-2 w-[75px] h-[75px] rounded-[100%]'
							/>
						</Link>
						<ul className='hidden sm:flex z-20'>
							<li className='p-4'>
								<Link className='link' href='/'>
									Home
								</Link>
							</li>
							<li className='p-4'>
								<Link className='link' href='/menu'>
									Menu
								</Link>
							</li>
							<li className='p-4'>
								<Link className='link' href='/our-story'>
									Our Story
								</Link>
							</li>
							<li className='p-4'>
								<Link className='link' href='/contact'>
									Contact
								</Link>
							</li>
						</ul>
						<div
							onClick={handleNav}
							className='block cursor-pointer z-10 sm:hidden burger'
						>
							{nav ? <IoClose size={30} /> : <FiMenu size={25} />}
						</div>
						<div
							className={
								nav
									? 'sm:hidden absolute top-[7rem] right-6 w-[250px] flex justify-center items-center   bg-black/90 ease-in duration-300 rounded-md '
									: 'sm:hidden absolute top-[7rem] right-[-100%] w-full  flex justify-center items-center   bg-black/90 ease-in duration-300 rounded-md'
							}
						>
							<ul>
								<li className='p-4 text-4xl hover:text-gray-400'>
									<Link href='/' onClick={handleNav}>
										Home
									</Link>
								</li>
								<li className='p-4 text-4xl hover:text-gray-400'>
									<Link onClick={handleNav} href='/menu'>
										menu
									</Link>
								</li>
								<li className='p-4 text-4xl hover:text-gray-400'>
									<Link onClick={handleNav} href='/our-story'>
										Our Story
									</Link>
								</li>
								<li className='p-4 text-4xl hover:text-gray-400'>
									<Link onClick={handleNav} href='/contact'>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
