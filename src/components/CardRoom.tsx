import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

type RoomDetails = {
	label: string;
	icon: string;
};

type CardRomType = {
	image: string;
	id: number;
	price: number;
	name: string;
	isHovered: number | null;
	roomDetails: RoomDetails[];
	onMouseEnter: (id: number) => void;
	onMouseLeave: () => void;
};

const CardRoom = ({
	image,
	price,
	id,
	name,
	roomDetails,
	onMouseEnter,
	onMouseLeave,
	isHovered,
}: CardRomType) => {
	const [tooltip, setTooltip] = useState<string | null>(null);
	const handleTooltip = useCallback((label: string) => {
		setTooltip(label);
	}, []);

	const handleTooltipLeave = useCallback(() => {
		setTooltip(null);
	}, []);

	return (
		<div
			onMouseEnter={() => onMouseEnter(id)}
			onMouseLeave={onMouseLeave}
			className='relative overflow-hidden rounded-sm shadow-md cursor-pointer'
		>
			<span className='absolute px-5 py-1 font-semibold text-gray-500 bg-white rounded-sm shadow-sm top-3 right-3 text-[12px] z-10'>
				$ {price} / night
			</span>
			<figure className='w-full h-full'>
				<img
					src={image}
					alt={name}
					loading='lazy'
					className={`object-cover w-full h-full transition-all duration-300 ease-linear origin-left ${
						isHovered === id ? 'scale-x-105' : ''
					}`}
				/>
			</figure>

			<figcaption className='absolute bottom-0 left-0 flex items-center justify-center w-full p-2 text-xl font-semibold text-gray-500 bg-white'>
				{isHovered === id ? (
					roomDetails.map((detail, index) => {
						return (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3, ease: 'linear' }}
								key={index + 1}
								className='flex w-full h-full tooltip_container justify-evenly'
							>
								<div
									onMouseEnter={() => handleTooltip(detail.label)}
									onMouseLeave={handleTooltipLeave}
									className={` flex items-center justify-center  w-7 h-7  border border-dashed p-1 `}
								>
									<img src={detail.icon} alt={detail.label} />
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
											className='absolute z-20 flex flex-col items-center px-5 py-1 font-semibold bg-white rounded-sm shadow-lg tooltip w-fit text-nowrap'
										>
											<span className='text-[14px] uppercase leading-6'>
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
						className='text-[1.1rem] text-center capitalize'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: 'linear' }}
					>
						{name}
					</motion.span>
				)}
			</figcaption>
		</div>
	);
};

export default CardRoom;
