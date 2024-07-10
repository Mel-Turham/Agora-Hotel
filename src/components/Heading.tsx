import { motion } from 'framer-motion';
const Heading = () => {
	return (
		<div className='absolute flex flex-col items-center justify-center gap-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
			<div className='overflow-hidden'>
				<motion.h2
					initial={{ y: '-90%', opacity: 0 }}
					transition={{
						duration: 0.5,
						mass: 3,
						type: 'spring',
						delay: 0.6,
						ease: 'linear',
					}}
					whileInView={{ y: '0%', opacity: 1 }}
					className='relative overflow-hidden font-extrabold text-white uppercase text-7xl'
				>
					Enjoy your holidays
				</motion.h2>
			</div>
			<div className='flex justify-between p-4 items-center w-[50%] text-white font-normal text-[28px]'>
				<div className='w-1/2 overflow-hidden '>
					<motion.div
						initial={{ x: '-110%', opacity: 0 }}
						// animate={{ x: '0%', opacity: 1 }}
						whileInView={{ x: '0%', opacity: 1 }}
						transition={{ duration: 0., mass: 3, ease: 'linear' }}
						className='w-full h-2 transform skew-y-3 border-t-2 border-b-2 border-white border-solid'
					></motion.div>
				</div>
				<div className='w-2/3 overflow-hidden '>
					<motion.p
						initial={{ y: '80%', opacity: 0 }}
						whileInView={{ y: '0%', opacity: 1 }}
						transition={{ duration: .5, mass: 2 , ease:'linear', type:'spring', delay:.3}}
						className='font-semibold text-center '
					>
						Navagio beach
					</motion.p>
				</div>
				<div className='w-1/2 overflow-hidden '>
					<motion.div
						initial={{ x: '110%', opacity: 0 }}
						// animate={{ x: '0%', opacity: 1 }}
						whileInView={{ x: '0%', opacity: 1 }}
						transition={{ duration: 1, mass: 3, ease: 'linear' }}
						className='w-full h-2 border-t-2 border-b-2 border-white border-solid '
					></motion.div>
				</div>
			</div>
		</div>
	);
};
export default Heading;
