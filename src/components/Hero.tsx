import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import Image from '../../src/assets/images/slider-3-720x470.jpg';
import Heading from './Heading';
import { motion, easeInOut } from 'framer-motion';

const Hero = () => {
	const plugin = useRef(Autoplay({ delay: 8000, stopOnInteraction: true }));
	return (
		<Carousel
			plugins={[plugin.current]}
			opts={{
				align: 'start',
				loop: true,
			}}
			className=' w-[100vw] relative'
		>
			<CarouselContent className='h-screen'>
				<CarouselItem className='relative pl-0'>
					<motion.img
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: 1.5,
							easeInOut,
							mass: 1,
							delay: 0.5,
							ease: 'linear',
							type: 'spring',
							stiffness: 40,
						}}
						src={Image}
						alt='Image 1'
						className='object-cover w-full h-full brightness-75'
					/>
					<Heading />
				</CarouselItem>
				<CarouselItem className='relative w-full pl-0'>
					<motion.img
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1.5,
							easeInOut,
							mass: 1,
							delay: 0.5,
							ease: 'linear',
							type: 'spring',
							stiffness: 40,
						}}
						src={Image}
						alt='Image 1'
						className='object-cover w-full h-full brightness-75'
					/>
					<Heading />
				</CarouselItem>
			</CarouselContent>
			<div className='absolute top-[50%]  left-[50%] w-[90%] translate-x-[-50%]'>
				<CarouselPrevious />
				<CarouselNext />
			</div>

		</Carousel>
	);
};
export default Hero;
