import Image from 'next/image'
import storyImage from '../../../public/story-ımg.jpg'

const OurStory = () => {
	return (
		<div className='container'>
			<h3 className='py-12 text-5xl font-medium'>PinusCafe</h3>
			<p className='text-lg'>
				I’ve now been working at Coffee Collective for more than 7 years. Kenya
				and more specifically Kieni is one of the places that you keep on
				hearing about. This is due to our 13 years old relationship but also the
				coffee that we have all year long.
			</p>
			<Image
				className='w-full py-12 sm:h-[600px] h-[300px]'
				src={storyImage}
				width={600}
				height={300}
			/>
			<p className='text-lg pb-20'>
				Coffee from Kenya has for a long time been an eye-opener for a lot of
				people in the specialty coffee world. It is to me a flavour profile that
				really shows that coffee is a cherry, a fruit! Once you understand that,
				coffee becomes a whole new world. On a Monday morning, Dan, our driver,
				came to pick us up. The direction of the region of Nyeri is to visit
				Josephat and Charles who runs the wet mill station Kieni. It is always a
				unique feeling to be at a place that you have seen in pictures so many
				times. Unfortunately, we came on a wrong day as the depulper was getting
				fixed and the sad reality of climate change has caused the river to dry
				off. We all hear about the devastating results of climate change in our
				western society and it’s hard to acknowledge it when you are somehow far
				away from it. Being there, and witnessing the entire wet mill not
				functioning throws you back to reality. Luckily they could use the water
				from their neighbour's mill Kiamabara situated a few meters higher.
				Kieni and Kiamabara are part of the same society called Mugaga which
				includes 5 wet mills. In those situations, they can help each other but
				also provide different options for the members to drop their coffee at
				multiple places. Joseph is one of them. Member of the society for
				several years and a regular at Kieni, he was on his way to bring his
				daily harvest to Kiamabara that day. Kieni and its surroundings There is
				a school next to the mill that we had the chance to visit. The teacher
				sat down with us to share a bit of her routine and explained life at the
				school. Being a company where we want to convince people that there is a
				good future in coffee farming, it was very interesting to hear about
				students’ mindsets. I realise that growing coffee in Kenya is something
				very common. Everybody has a few trees in their garden. Some people are
				growing it as a full-time job but a lot are doing it as a side activity.
				Through my journey, I’ve met many different factory members with
				different backgrounds. I found it very interesting that you can see the
				same diversity at the farm level as the one we can experience in coffee
				shops in our country. On delivery days, wet mills are very much a
				gathering point for the whole area.
			</p>
		</div>
	)
}

export default OurStory
