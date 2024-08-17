import Title from './Title';
import { carouselElments as data } from '../db/data';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Container from './Container';

const CarouselService = () => {
	const [index, setIndex] = useState(0);
	const totalItems = data.length * 2;
	const handleNext = useCallback(
		(i: number) => {
			setIndex(i);
		},
		[setIndex],
	);
		useEffect(() => {
			const interval = setInterval(() => {
				setIndex((prevIndex) => (prevIndex + 2) % totalItems);
			}, 3000); // Change image every 3 seconds

			return () => clearInterval(interval); // Clear interval on component unmount
		}, [totalItems]);
	return (
		<section className=' flex flex-col items-center py-[4rem]'>
			<Title
				title='OUR AWESOME SERVICES'
				paragraph='Check out our awesome services'
				align='center'
			/>
			<Container className=' w-full  flex justify-between mt-16 h-[25rem]'>
				<figure className='relative flex h-full overflow-hidden rounded-sm w-[50%]'>
					{data.map((item) => {
						return (
							<motion.img
								initial={{ x: index }}
								animate={{ x: -index * 295.10}}
								transition={{
									duration: 0.3,
									stiffness: 60,
									type: 'spring',
									mass: 0.5,
								}}
								key={item.id}
								src={item.image}
								alt={item.title}
								loading='lazy'
								className='object-cover h-full min-w-[100%] brightness-60'
							/>
						);
					})}
				</figure>
				<div className='flex flex-col h-full gap-4 w-[45%]'>
					{data.map((item, i) => {
						return (
							<div
								key={item.id}
								className={`relative flex items-center gap-2  ring-1 ring-gray-200 transition-all duration-300 ease-in rounded-sm px-2 py-[0.9rem] ${
									i * 2 === index
										? 'bg-[#333333] text-gray-100 shadow-lg'
										: 'text-gray-500 bg-white'
								}`}
							>
								{i * 2 === index && (
									<div className='absolute w-0 h-0 border-t-8 border-b-4 border-l-8 border-r-8 -left-4 border-t-transparent border-r-[#333333] border-b-transparent border-l-transparent'></div>
								)}
								<figure className='h-8 w-1/1 ps-[12px]  flex items-center justify-center'>
									<img src={item.icon} alt={item.title} />
								</figure>
								<figcaption
									onClick={() => handleNext(i * 2)}
									className='space-y-0.5 cursor-pointer'
								>
									<h3 className='text-base font-bold'>{item.title}</h3>
									<span className='text-xs line-clamp-2 '>{item.desc}</span>
								</figcaption>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
};

export default CarouselService;
