import Image from 'next/image'
import aboutImg from '../../../public/about.jpg'

const About = () => {
	return (
		<div className='container sm:py-12 py-8'>
			<div className='flex justify-between items-center sm:flex-row flex-col'>
				<Image
					src={aboutImg}
					width={400}
					height={500}
					className='w-[400px] h-[500px] rounded-sm'
				/>
				<div className='text-right sm:pr-10 pt-10 sm:pl-8 '>
					<h2 className='sm:text-left text-center text-4xl font-medium pb-4'>
						About Us
					</h2>
					<p className='max-w-[500px] text-base sm:text-left text-center'>
						Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
						metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
						numune kitabı oluşturmak üzere bir yazı galerisini alarak
						karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
						olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
						kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
						sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
						yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
						Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
						popüler olmuştur.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
