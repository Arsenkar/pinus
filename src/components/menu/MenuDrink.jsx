const MenuDrink = () => {
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
							İçecekler
						</h4>

						<div className='menu-flex  border-t'>
							<ul className='text-white/80 pb-4 block text-c m-a'>
								<li>
									<p>Çay</p>
								</li>
								<li>
									<p>Fincan Çay</p>
								</li>
								<h5 className='uppercase text-medium font-semibold text-white'>
									aromalı Çaylar
								</h5>
								<div className='block max-w-[150px] text-sm'>
									<li>
										<p>
											(Kivi Muz, Kuşburnu, Çilek, Limon, karadut, Portakal,
											Kakao, Nane, Limon)
										</p>
									</li>
								</div>
							</ul>
							<ul className='text-white/80 pb-4 pl-8 m-a'>
								<h5 className='uppercase ul-title py-4 text-white'>
									Bitki Çaylar
								</h5>
								<div className='flex'>
									<div>
										<li>
											<p>adaçayı</p>
										</li>
										<li>
											<p>Ihlamur</p>
										</li>
										<li>
											<p>Kış Çayı</p>
										</li>
										<li>
											<p>Kuşburnu</p>
										</li>
									</div>
									<div className='pl-4'>
										<li>
											<p>Yeşil Çay</p>
										</li>
										<li>
											<p>Papatya</p>
										</li>
										<li>
											<p>Rezene</p>
										</li>
										<li>
											<p>Nane Limon</p>
										</li>
									</div>
								</div>
							</ul>
						</div>

						<div className=' border-t'>
							<h5 className='uppercase  text-c font-bold pt-4 text-xl'>
								Soğuk
							</h5>
							<div className='menu-flex menu-padding'>
								<ul className='sm:py-0 py-2 text-white/80 m-a'>
									<h5 className='uppercase text-medium font-semibold text-white'>
										Sodalar
									</h5>
									<div className='block max-w-[150px] text-sm'>
										<li>
											<p>
												(Visne, Orman Meyve, Karpuz Gilek, Limon, Tropikal,
												Seftali, Nar, Mandalina, Yesilçay, Murverli, French
												Üzum, Mango)
											</p>
										</li>
									</div>
								</ul>
								<ul className='text-white/80 m-a'>
									<div className='flex'>
										<div>
											<li>
												<p>Coca Cola</p>
											</li>
											<li>
												<p>Limonata</p>
											</li>
											<li>
												<p>Churchill</p>
											</li>
											<li>
												<p>Kuşburnu</p>
											</li>
											<li>
												<p>Fusetea</p>
											</li>
										</div>
										<div className='pl-4'>
											<li>
												<p>Sprite</p>
											</li>
											<li>
												<p>Eneril</p>
											</li>
											<li>
												<p>Fanta</p>
											</li>
											<li>
												<p>Ayran</p>
											</li>
											<li>
												<p>Su</p>
											</li>
										</div>
									</div>
								</ul>
							</div>
						</div>

						<div className='border-t'>
							<div className='menu-flex menu-padding'>
								<ul className='text-white/80 pb-4 m-a'>
									<h5 className='uppercase ul-title py-4 text-white'>
										PINUS SPECIAL
									</h5>
									<div className='flex'>
										<div>
											<li>
												<p>cilek</p>
											</li>
											<li>
												<p>Bubble Gum</p>
											</li>
											<li>
												<p>Karadut</p>
											</li>
											<li>
												<p>Coconat(enerit)</p>
											</li>
										</div>
										<div className='pl-4'>
											<li>
												<p>Mango</p>
											</li>
											<li>
												<p>Visne</p>
											</li>
											<li>
												<p>Blue</p>
											</li>
											<li>
												<p>Blue(enerit)</p>
											</li>
										</div>
									</div>
								</ul>
								<ul className='text-white/80 pb-4 pl-8 m-a'>
									<h5 className='uppercase ul-title py-4 text-white'>
										MILKSHAKE
									</h5>
									<div className='flex'>
										<div>
											<li>
												<p>Bögurtlen</p>
											</li>
											<li>
												<p>Muz</p>
											</li>
											<li>
												<p>Gilek</p>
											</li>
											<li>
												<p> Visne</p>
											</li>
										</div>
										<div className='pl-4'>
											<li>
												<p>Limon</p>
											</li>
											<li>
												<p>Kakao</p>
											</li>
											<li>
												<p>Karadut</p>
											</li>
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuDrink
