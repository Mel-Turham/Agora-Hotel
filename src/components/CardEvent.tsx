import { CircleUserRound, Clock, MessagesSquare } from 'lucide-react';
import Event from '../assets/images/event_1.jpg';

const CardEvent = () => {
	return (
		<article className='border border-gray-100 border-solid shadow-sm'>
			<figure className='h-[250px] w-full bg-red-600 overflow-hidden rounded-sm'>
				<img src={Event} alt='' className='object-cover w-full h-full' />
			</figure>
			<div className='flex flex-col gap-4 p-4'>
				<h3 className='text-xl font-semibold text-gray-600'>
					Hotel Zante in pictures
				</h3>
				<p className='text-sm font-medium text-gray-500 line-clamp-3 text-pretty'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
					voluptates sapiente? Dolorem debitis, exercitationem aut quos
					dignissimos nobis quidem a quam, minima molestiae eligendi praesentium
					doloremque? Temporibus sit ipsam exercitationem.
				</p>

				<div className='flex flex-wrap items-center gap-3'>
					<div className='flex items-center gap-1'>
						<CircleUserRound width={18} className='text-gray-400' />
						<span className='text-sm font-semibold text-gray-400 uppercase'>
							Admin
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<Clock width={18} className='text-gray-400' />
						<span className='text-sm font-semibold text-gray-400 uppercase'>
							June 17, 2018
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<MessagesSquare width={18} className='text-gray-400' />
						<span className='text-sm font-semibold text-gray-400 uppercase'>
							1 Comments
						</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CardEvent;
