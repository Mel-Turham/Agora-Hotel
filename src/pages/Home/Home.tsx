import Hero from '../../components/Hero';
import { DatePickerWithRange } from '../../@/components/ui/DateRange';
import { Button } from '../../@/components/ui/button';
import Title from '../../components/Title';
import { ChevronRight } from 'lucide-react';
import About1 from '../../assets/images/about1.jpg';
import About2 from '../../assets/images/about2.jpg';
import { rooms } from '../../db/data';
import { Tilt } from '@jdion/tilt-react';
import CardRoom from '../../components/CardRoom';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PersonStanding } from 'lucide-react';
import CarouselService from '../../components/CarouselService';
import Video from './Video';
import Discover from './Discover';
import Testimonials from './Testimonials';
type guestsType = {
	id: number;
	older: string;
	numberOfguest: number;
};

const guests: guestsType[] = [
	{ id: 1, older: 'Adults', numberOfguest: 1 },
	{
		id: 2,
		older: 'Children',
		numberOfguest: 0,
	},
];

const Home = () => {
	const [isHovered, setIsHoverred] = useState<number | null>(null);
	const [show, setShow] = useState<boolean>(false);
	const [guestArr, setGuessArr] = useState<guestsType[]>(guests);
	const [direction, setDirection] = useState(1);

	const handlerOver = (id: number) => {
		setIsHoverred(id);
	};

	const handlerLeave = () => {
		setIsHoverred(null);
	};

	const Decrement = (id: number) => {
		if (id == 1) {
			const newGuess = guestArr.map((item) =>
				item.id === id && item.numberOfguest > 1
					? { ...item, numberOfguest: item.numberOfguest - 1 }
					: item,
			);

			setGuessArr(newGuess);
		} else {
			const newGuess = guestArr.map((item) =>
				item.id === id && item.numberOfguest > 0
					? { ...item, numberOfguest: item.numberOfguest - 1 }
					: item,
			);
			setGuessArr(newGuess);
		}
		setDirection(-1);
	};

	const Increment = (id: number) => {
		const newGuess = guestArr.map((item) =>
			item.id === id && item.numberOfguest < 5
				? { ...item, numberOfguest: item.numberOfguest + 1 }
				: item,
		);
		setGuessArr(newGuess);
		setDirection(1);
	};

	const variants = {
		initial: (direction: number) => ({
			y: direction > 0 ? 30 : -30,
			opacity: 0,
		}),
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		exit: (direction: number) => ({
			y: direction > 0 ? 30 : -30,
			opacity: 0,
			transition: { duration: 0.3, ease: 'easeInOut' },
		}),
	};

	const totalOfGuess = useCallback(() => {
		const total = guestArr.reduce((acc, curr) => {
			return acc + curr.numberOfguest;
		}, 0);
		return total;
	}, [guestArr]);

	useEffect(() => {
		totalOfGuess();
	}, [totalOfGuess]);

	const guestItem = guestArr.map((item) => {
		return (
			<div
				key={item.id}
				className='flex items-center justify-between w-full h-full'
			>
				<div className='flex flex-col'>
					<span className='font-semibold capitalize'>{item?.older} :</span>

					{item?.older === 'Adults' ? (
						<span>{'Age: 18+'} years old</span>
					) : (
						<span>{'Age: 1+'} years old</span>
					)}
				</div>
				<div className='flex items-center gap-2 overflow-auto'>
					<Button
						onClick={() => Decrement(item.id)}
						className='text-center rounded w-7 h-7'
					>
						-
					</Button>
					<AnimatePresence custom={direction}>
						<div className='flex items-center justify-center overflow-hidden'>
							<motion.div
								key={item.numberOfguest}
								custom={direction}
								initial='initial'
								animate='animate'
								exit='exit'
								variants={variants}
							>
								{item.numberOfguest}
							</motion.div>
						</div>
					</AnimatePresence>
					<Button
						onClick={() => Increment(item.id)}
						className={`text-center rounded w-7 h-7 ${
							item.numberOfguest === 5 ? 'cursor-not-allowed' : 'cursor-pointer'
						}`}
					>
						+
					</Button>
				</div>
			</div>
		);
	});

	const handleFocus = useCallback(() => {
		setShow((prev) => !prev);
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
					<div className='relative flex flex-col w-1/3 gap-2'>
						<span className='font-semibold'>Guests</span>
						<div
							className='border border-solid border-[#858a99] rounded-sm py-3 px-2 cursor-pointer'
							onClick={handleFocus}
						>
							<label className='flex items-center gap-1 font-semibold'>
								<div className='flex items-center'>
									<PersonStanding className='w-5 h-5' /> Total of Guess:{' '}
								</div>
								<input
									readOnly
									value={totalOfGuess()}
									className='outline-none cursor-pointer'
								/>
							</label>
						</div>

						{show && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2, ease: 'easeOut' }}
								className='rounded-md shadow-lg w-[350px] py-10 px-6  flex flex-col gap-7 -top-[180px] absolute bg-white overflow-hidden left-[50%] translate-x-[-50%]'
							>
								{guestItem}
							</motion.div>
						)}
					</div>
					<Button
						disabled={true}
						className='w-1/3 uppercase rounded-sm mt-8 h-[48.5px] text-[16px] disabled:cursor-not-allowed'
					>
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

			<section className='bg-[#F1F0ED]  px-[15px] flex flex-col items-center py-[4rem]'>
				<Title
					title='Our favorite rooms'
					paragraph='Check out now our best rooms'
					align='center'
				/>

				<div className='room grid w-full grid-cols-4 grid-rows-2 h-[100%] mt-8 gap-4 px-10'>
					{rooms.map((room) => {
						const { image, id, price, roomDetails, name } = room;
						return (
							<CardRoom
								key={id}
								image={image}
								id={id}
								roomDetails={roomDetails}
								name={name}
								price={price}
								isHovered={isHovered}
								onMouseEnter={handlerOver}
								onMouseLeave={handlerLeave}
							/>
						);
					})}
				</div>
				<Button
					variant={'default'}
					className='flex items-center p-6 mt-12 font-semibold uppercase rounded-sm w-fit group'
				>
					See all rooms
					<ChevronRight className='w-5 h-5 mt-0.5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out' />
				</Button>
			</section>
			<CarouselService />
			<Video />
			<Discover/>
			<Testimonials/>
		</>
	);
};
export default Home;
