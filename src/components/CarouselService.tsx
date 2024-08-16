import Title from './Title';
import { carouselElments as data } from '../db/data';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

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
		<section className='px-[15px] flex flex-col items-center py-[4rem]'>
			<Title
				title='OUR AWESOME SERVICES'
				paragraph='Check out our awesome services'
				align='center'
			/>
			<div className='flex w-full px-10 mt-16 gap-7 '>
				<figure className='relative flex w-2/3 h-full overflow-hidden rounded-sm'>
					{data.map((item) => {
						return (
							<motion.img
								initial={{ x: index }}
								animate={{ x: -index * 321.4 }}
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
								className='object-cover h-full brightness-60'
							/>
						);
					})}
				</figure>
				<div className='w-2/4'>
					{data.map((item, i) => {
						return (
							<div
								key={item.id}
								className={`relative flex items-center gap-4 p-2 mb-5 ring-1 ring-gray-200 last:mb-0 transition-all duration-300 ease-in rounded-sm ${
									i * 2 === index
										? 'bg-[#333333] text-gray-100 shadow-lg'
										: 'text-gray-500 bg-white'
								}`}
							>
								{i * 2 === index && (
									<div className='absolute w-0 h-0 border-t-8 border-b-4 border-l-8 border-r-8 -left-4 border-t-transparent border-r-[#333333] border-b-transparent border-l-transparent'></div>
								)}
								<figure className='h-full ps-[12px]'>
									<img
										src={item.icon}
										alt={item.title}
										className='object-cover w-full h-full '
									/>
								</figure>
								<figcaption
									onClick={() => handleNext(i * 2)}
									className='space-y-0.5 cursor-pointer'
								>
									<h3 className='text-xl font-bold'>{item.title}</h3>
									<p className='text-sm font-medium'>{item.desc}</p>
								</figcaption>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CarouselService;
