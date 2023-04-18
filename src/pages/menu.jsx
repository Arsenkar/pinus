import HeroImg from '@/components/Hero-img/HeroImg'
import MenuDrink from '@/components/menu/MenuDrink'
import MenuDrink2 from '@/components/menu/MenuDrink2'
import MenuFood from '@/components/menu/MenuFood'
import menuImg from '../../public/menu.jpg'

const menu = () => {
	return (
		<div>
			<HeroImg
				head={'This is our Menu'}
				cont={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
				}
				img={menuImg}
			/>
			<MenuFood />
			<MenuDrink />
			<MenuDrink2 />
		</div>
	)
}

export default menu
