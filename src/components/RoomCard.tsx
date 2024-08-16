import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

type DetailRoom = {
	label: string;
	icon: string;
};
type room = {
	id: number;
	image: string;
	price: number;
	name: string;
	roomDetails: DetailRoom[];
};

interface RoomCardProp {
	room: room;
}

const RoomCard = ({ room }: RoomCardProp) => {
	const [text, setText] = useState<string>('');

	const handlerMouseEnter = useCallback((label: string) => {
		setText(label);
	}, []);

	const handlerMouseLeave = useCallback(() => {
		setText('');
	}, []);
	return (
		<div className='flex items-center h-[250px]  border border-solid border-gray-200 divide-x bg-zinc-50 border-l-0 transition-all duration-300 ease-in-out relative'>
			<figure className='w-1/3 h-full overflow-hidden'>
				<img
					src={room.image}
					alt={room.name}
					loading='lazy'
					className='object-cover w-full h-full transition-all duration-300 origin-left hover:scale-105'
				/>
			</figure>
			<div className='w-1/2 h-full p-5 space-y-4'>
				<h3 className='text-3xl font-semibold text-[#222222]'>{room.name}</h3>
				<p className='text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					obcaecati autem qui debitis excepturi sit libero velit. Eaque, tempora
					facere.
				</p>
				<div className='flex items-center gap-5'>
					{room.roomDetails.map((detail, index) => {
						return (
							<div
								onMouseEnter={() => handlerMouseEnter(detail.label)}
								onMouseLeave={handlerMouseLeave}
								key={index}
								className='flex items-center justify-center h-6 p-1 border border-gray-200 border-dashed cursor-pointer w-7'
							>
								<img src={detail.icon} alt={detail.label} />
								<AnimatePresence mode='wait'>
									{text &&
										text?.toLowerCase() === detail.label.toLowerCase() && (
											<motion.div
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												exit={{ opacity: 0, scale: 0.8 }}
												className='absolute w-fit h-[100px] bg-white -left-4 top-[50%] -translate-y-[50%] flex items-center justify-center shadow-md px-6'
											>
												<p className='flex flex-col items-center justify-center h-full'>
													<span className='block text-xl font-semibold text-gray-600 text-nowrap'>
														{text}
													</span>
													<span className='text-gray-500'>Included</span>
												</p>
											</motion.div>
										)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>
			</div>
			<div className='flex items-center justify-center w-1/4 h-full'>
				<div className='space-y-6'>
					<h4 className='flex flex-col items-center gap-2 uppercase'>
						<span className='text-xl text-[#606060] font-semibold'>
							${room.price}
						</span>
						<span className='font-medium text-gray-500'>per night</span>
					</h4>

					<Link
						className='flex items-center px-3 py-1 font-semibold leading-7 text-blue-500 uppercase transition-all duration-300 ease-in-out rounded-full group hover:bg-blue-500'
						to='#'
					>
						<p className='text-sm group-hover:text-white'>More details</p>
						<span className='flex items-center justify-center w-5 h-5 ml-2 text-white bg-blue-500 rounded-full group-hover:bg-white group-hover:text-blue-500'>
							<ChevronRight strokeWidth={2.5} />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
