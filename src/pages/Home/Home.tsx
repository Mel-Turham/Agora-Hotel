import Hero from '../../components/Hero';
import { DatePickerWithRange } from '../../@/components/ui/DateRange';
import { Button } from '../../@/components/ui/button';
import Title from '../../components/Title';
import { ChevronRight } from 'lucide-react';
import About1 from '../../assets/images/about1.jpg';
import About2 from '../../assets/images/about2.jpg';
import { rooms } from '../../db/data';

import { Tilt } from '@jdion/tilt-react';
import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {
	const [isHovered, setIsHovered] = useState<number | null>(null);
	const [tooltip, setTooltip] = useState<string | null>(null);
	const handlerOnmouseEnter = useCallback((id: number) => {
		setIsHovered(id);
	}, []);

	const handlerOnmouseLeave = useCallback(() => {
		setIsHovered(null);
	}, []);

	const handleTooltip = useCallback((label: string) => {
		setTooltip(label);
	}, []);
	const handleTooltipLeave = useCallback(() => {
		setTooltip(null);
	}, []);
	return (
		<>
			<section className='relative flex items-center justify-center w-full min-h-screen'>
				<Hero />
				<div className='absolute top-[100%] left-[50%] w-[90%] translate-x-[-50%] translate-y-[-50%] bg-white  rounded-[4px] shadow-md text-[#858a99] z-10 flex items-center px-6 py-8 gap-6'>
					<div className='flex flex-col w-1/3 gap-2'>
						<span className='font-semibold'>Check In/Out</span>
						<DatePickerWithRange className='border border-solid border-[#858a99] rounded-sm py-1' />
					</div>
					<div className='flex flex-col w-1/3 gap-2'>
						<span className='font-semibold'>Guests</span>
						<DatePickerWithRange className='border border-solid border-[#858a99] rounded-sm py-1' />
					</div>
					<Button className='w-1/3 uppercase rounded-sm mt-8 h-[48.5px] text-[16px]'>
						Check availability
					</Button>
				</div>
			</section>
			<section className=' min-h-screen px-[15px] bg-gray-100/25 grid items-center '>
				<div className='flex items-center  justify-between w-[95%] mx-auto h-[500px]  px-3'>
					<div className='flex flex-col w-1/2 gap-[2rem]'>
						<div className='flex flex-col gap-[10px]'>
							<Title
								title='Hotel Agora since 2024'
								paragraph='High quality accommodation service'
							/>
						</div>

						<p className='text-[15px] text-[#858a99] text-pretty leading-7 w-[500px]'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat. Duis autem vel eum iriure dolor in hendrerit in
							vulputate velit molestie consequat, vel illum dolore eu feugiat
							nulla facilisis at vero eros et accumsan.
						</p>
						<Button
							variant={'default'}
							className='flex items-center p-6 font-semibold uppercase rounded-sm w-fit group'
						>
							More details
							<ChevronRight className='w-5 h-5 mt-0.5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out' />
						</Button>
					</div>
					<Tilt
						className='w-1/2 h-[300px] relative '
						options={{
							scale: 1,
							speed: 500,
							max: 25,
							perspective: 1000,
							easing: 'cubic-bezier(.03,.98,.52,.99)',
							reset: true,
							transition: true,
							axis: null,
							reverse: true,
						}}
						
					>
						<div>
							<img
								src={About1}
								alt='about-image'
								loading='lazy'
								className='absolute object-cover h-full rounded-sm shadow-lg aspect-auto top-5 left-[50%] translate-x-[-50%]'
							/>
							<img
								src={About2}
								alt='about-image'
								loading='lazy'
								className=' absolute object-cover  h-full aspect-auto -top-[50px] -left-10 rounded-sm shadow-lg '
							/>
						</div>
					</Tilt>
				</div>
			</section>

			<section className='bg-[#F1F0ED] h-screen px-[15px] flex flex-col items-center py-[4rem]'>
				<Title
					title='Our favorite rooms'
					paragraph='Check out now our best rooms'
					align='center'
				/>

				<div className='room grid w-full grid-cols-4 grid-rows-2 h-[100%] mt-8 gap-4 px-10'>
					{rooms.map((room) => {
						return (
							<div
								onMouseEnter={() => handlerOnmouseEnter(room.id)}
								onMouseLeave={handlerOnmouseLeave}
								key={room.id}
								className='relative overflow-hidden rounded-sm shadow-md cursor-pointer'
							>
								<span className='absolute px-5 py-1 font-semibold text-gray-500 bg-white rounded-sm shadow-sm top-3 right-3 text-[12px] z-10'>
									$ {room.price} / night
								</span>
								<figure className='w-full h-full'>
									<img
										src={room.image}
										alt={room.name}
										loading='lazy'
										className={`object-cover w-full h-full transition-all duration-300 ease-linear origin-left ${
											isHovered === room.id ? 'scale-x-105' : ''
										}`}
									/>
								</figure>
								<AnimatePresence>
									<figcaption className='absolute bottom-0 left-0 flex items-center justify-center w-full text-xl font-semibold text-gray-500 bg-white'>
										{isHovered === room.id ? (
											room.roomDetails.map((detail, index) => {
												return (
													<motion.div
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3, ease: 'linear' }}
														exit={{ opacity: 0 }}
														key={index + 1}
														className='tooltip_container flex justify-evenly w-full h-full bg-white py-1.5'
													>
														<div
															onMouseEnter={() => handleTooltip(detail.label)}
															onMouseLeave={handleTooltipLeave}
															className={` flex items-center justify-center p-2  w-7 h-7 border border-dashed `}
														>
															<img src={detail.icon} />
															{tooltip === detail.label && (
																<motion.div
																	initial={{ y: 0, opacity: 0 }}
																	animate={{ y: -60, opacity: 1 }}
																	transition={{
																		duration: 0.3,
																		ease: 'linear',
																		type: 'spring',
																		mass: 2,
																	}}
																	exit={{ y: 0, opacity: 0 }}
																	className='absolute z-20 flex flex-col items-center px-5 py-1 font-semibold bg-white rounded-sm shadow-sm tooltip w-fit text-nowrap'
																>
																	<span className='text-[16px] uppercase'>
																		{detail.label}
																	</span>
																	<span className='text-[13px] font-normal'>
																		{detail.label} included
																	</span>
																</motion.div>
															)}
														</div>
													</motion.div>
												);
											})
										) : (
											<motion.span
												className='text-center capitalize py-1.5 '
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.3, ease: 'linear' }}
											>
												{room.name}
											</motion.span>
										)}
									</figcaption>
								</AnimatePresence>
							</div>
						);
					})}
				</div>
				<Button
					variant={'default'}
					className='flex items-center p-6 mt-12 font-semibold uppercase rounded-sm w-fit group'
				>
					More details
					<ChevronRight className='w-5 h-5 mt-0.5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out' />
				</Button>
			</section>
		</>
	);
};
export default Home;
