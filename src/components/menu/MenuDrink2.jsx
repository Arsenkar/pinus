const MenuDrink2 = () => {
	return (
		<div className='m-8 text-white max-w-[700px] m'>
			<div className='container'>
				<div
					style={{
						backgroundImage:
							'url(https://static.wixstatic.com/media/aacc0e_8d07917d1b53467eb486aed1de615b33~mv2.jpg/v1/fill/w_640,h_926,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aacc0e_8d07917d1b53467eb486aed1de615b33~mv2.jpg)',
					}}
					className='bg-center bg-cover'
				>
					<h3 className='text-center text-5xl pt-8'>Pinus Cafe</h3>

					<div className='max-w-[500px] m'>
						<h4 className='uppercase text-center text-2xl font-light pb-4'>
							Kahve
						</h4>
						<div className='menu-flex  border-t'>
							<ul className='text-white/80 pb-4 block text-c m-a'>
								<h5 className='uppercase text-medium font-semibold text-white'>
									SICAK
								</h5>
								<div className='block max-w-[150px] text-sm'>
									<li>
										<p>
											(Turk, Kahvesi, Dobble Türk K, Dibek Kahvesi, Damla
											Sakizli, Menengic Kahvesi, Espresso, Americano,Cappuccino,
											Latte, White Mocha, Filtre Kahve, Sicak Gikolata)
										</p>
									</li>
								</div>
							</ul>
							<ul className='text-white/80 pb-4 m-a'>
								<h5 className='uppercase text-medium font-semibold text-white'>
									SOGUK
								</h5>
								<li>
									<p>Ice Americano</p>
								</li>
								<li>
									<p>Ice Caramel Latte</p>
								</li>
								<li>
									<p>Frappe</p>
								</li>
								<li>
									<p>Ice Filter Coffee</p>
								</li>
							</ul>
						</div>

						<div className='text-center border-t'>
							<ul className='text-white/80 block py-8 m-a'>
								<h5 className='uppercase text-xl font-semibold text-white pb-2'>
									NARGILE
								</h5>

								<li>
									<p>Love 66</p>
								</li>
								<li>
									<p>Lady Killer</p>
								</li>
								<li>
									<p>Üzum Mix</p>
								</li>
								<li>
									<p>Hawait Tath Ors.</p>
								</li>
								<li>
									<p>Pinus Karisim</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuDrink2
