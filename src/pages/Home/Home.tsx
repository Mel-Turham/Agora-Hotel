import Hero from '../../components/Hero';
import { DatePickerWithRange } from '../../@/components/ui/DateRange';
import { Button } from '../../@/components/ui/button';
import Title from '../../components/Title';
import { ChevronRight } from 'lucide-react';
import About1 from '../../assets/images/about1.jpg'
import About2 from '../../assets/images/about2.jpg'

import { Tilt } from 'react-tilt';


const defaultOptions = {
	reverse: true,
	max: 10,
	perspective: 2000, 
	speed: 100, 
	transition: true, 
	axis:'X', 
	easing: 'cubic-bezier(.03,.98,.52,.99)', 
	

};

const Home = () => {
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
					<Tilt className='w-1/2 h-[300px] relative' option={defaultOptions}>
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
								className='absolute object-cover  h-full aspect-auto -top-[50px] -left-10 rounded-sm shadow-lg'
							/>
						</div>
					</Tilt>
				</div>
			</section>
		</>
	);
};
export default Home;
