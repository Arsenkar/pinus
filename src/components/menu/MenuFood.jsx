const MenuFood = () => {
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
							Yiyecekler
						</h4>

						<div className='menu-flex  border-t'>
							<ul className='text-white/80 pb-4'>
								<h5 className='uppercase  ul-title py-4 text-white '>
									Kahvaltı
								</h5>
								<li>
									<p>Kahvaltı Tabağı</p>
								</li>
								<li>
									<p>Tost Tabağı</p>
								</li>
								<li>
									<p>Sucuklu Yumurta</p>
								</li>
								<li>
									<p>Sahanda Yumurta</p>
								</li>
								<li>
									<p>Menemen</p>
								</li>
							</ul>
							<ul className='text-white/80 pb-4'>
								<h5 className='uppercase ul-title py-4 text-white'>
									Fast Food
								</h5>
								<li>
									<p>Patso</p>
								</li>
								<li>
									<p>Kumru</p>
								</li>
								<li>
									<p>Karışık Tost</p>
								</li>
								<li>
									<p>Special Tost</p>
								</li>
								<li>
									<p>Patates Tabağı</p>
								</li>
							</ul>
						</div>

						<div className=' border-t'>
							<h5 className='uppercase  text-c font-bold pt-4 text-xl'>
								Dondurma
							</h5>
							<div className='menu-flex menu-padding'>
								<ul className='py-4 text-white/80'>
									<li>
										<p>Limon</p>
									</li>
									<li>
										<p>Vişne</p>
									</li>
									<li>
										<p>Çilek</p>
									</li>
									<li>
										<p>Şirin baba</p>
									</li>
									<li>
										<p>karadut</p>
									</li>
								</ul>
								<ul className='text-white/80'>
									<li>
										<p>Sade(maraş)</p>
									</li>
									<li>
										<p>kakao</p>
									</li>
									<li>
										<p>Çikolata Parçalı</p>
									</li>
									<li>
										<p>Balbadem</p>
									</li>
									<li>
										<p>Orman Meyveli</p>
									</li>
									<li>
										<p>Bubble Gum</p>
									</li>
								</ul>
							</div>
						</div>

						<div className='border-t'>
							<h5 className='uppercase font-bold pt-4 text-xl text-center'>
								Tatlı
							</h5>
							<div className='menu-flex menu-padding'>
								<ul className='text-white/80 '>
									<li>
										<p>Fıstık Rüyası</p>
									</li>
									<li>
										<p>Red Velvet</p>
									</li>
									<li>
										<p>Mono Latte</p>
									</li>
									<li>
										<p>Karamelli Triliçe</p>
									</li>
									<li>
										<p>Ballı Cevizli</p>
									</li>
								</ul>
								<ul className='text-white/80 pb-8'>
									<li>
										<p>Çikolata</p>
									</li>
									<li>
										<p>Orman Meyveli</p>
									</li>
									<li>
										<p>Frambuazlı</p>
									</li>
									<li>
										<p>Cheesecake</p>
									</li>
									<li>
										<p>Tiramisu </p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuFood
