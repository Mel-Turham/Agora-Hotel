import { CircleUserRound, Clock, MessagesSquare } from 'lucide-react';

type Props = {
	image: string;
	titleEvent: string;
	descEvent: string;
	EventAuthor: string;
	EventDate: Date | null;
	Comments: number;
};

const CardEvent = ({
	image,
	titleEvent,
	descEvent,
	EventAuthor,
	EventDate,
	Comments,
}: Props) => {
	const day = EventDate?.getDate()
	return (
		<article className='border border-gray-100 border-solid shadow-sm'>
			<figure className='h-[250px] w-full  overflow-hidden'>
				<img
					src={image}
					alt={titleEvent}
					loading='lazy'
					className='object-cover w-full h-full'
				/>
			</figure>
			<div className='flex flex-col gap-4 p-4'>
				<h3 className='text-xl font-semibold text-gray-600'>{titleEvent}</h3>
				<p className='text-sm font-medium text-gray-500 line-clamp-3 text-pretty'>
					{descEvent}
				</p>

				<div className='flex flex-wrap items-center gap-x-6 gap-y-1'>
					<div className='flex items-center gap-1'>
						<CircleUserRound width={18} className='text-gray-400' />
						<span className='text-sm font-semibold text-gray-400 uppercase'>
							{EventAuthor}
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<Clock width={18} className='text-gray-400' />
						<span className='text-sm font-semibold text-gray-400 uppercase'>
							{day}, Juin 2024
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<MessagesSquare width={18} className='text-gray-400' />
						<span className='text-sm font-semibold text-gray-400 uppercase'>
							{Comments} {Comments > 1 ? 'Comments' : 'Comment'}
						</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CardEvent;
