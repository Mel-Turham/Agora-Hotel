import Container from '../../components/Container';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { branches } from '../../db/data';

const variantsInfo = {
	hidden: { maxWidth: '35px' },
	isHovered: { maxWidth: '450px' },
};

const variantsFig = {
	hidden: { x: 0 },
	show: { x: 40 },
};

const Branch = () => {
	const [hoveredBranch, setHoveredBranch] = useState<number | null>(null);

	const handleMouseEnter = useCallback((id: number) => {
		setHoveredBranch(id);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setHoveredBranch(null);
	}, []);

	return (
		<section>
			<Container className='grid grid-cols-3 gap-16 py-10 '>
				{branches.map((branch) => (
					<BranchCard
						key={branch.id}
						branch={branch}
						isHovered={hoveredBranch === branch.id}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					/>
				))}
			</Container>
		</section>
	);
};

interface BranchCardProps {
	branch: (typeof branches)[0];
	isHovered: boolean;
	onMouseEnter: (id: number) => void;
	onMouseLeave: () => void;
}

const BranchCard = ({
	branch,
	isHovered,
	onMouseEnter,
	onMouseLeave,
}: BranchCardProps) => (
	<article
		onMouseEnter={() => onMouseEnter(branch.id)}
		onMouseLeave={onMouseLeave}
		className='relative overflow-hidden rounded-md'
	>
		<motion.figure
			className='relative h-full'
			variants={variantsFig}
			animate={isHovered ? 'show' : 'hidden'}
			transition={{ mass: 40 }}
		>
			<div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 z-[1]'></div>
			<motion.img
				src={branch.figure}
				alt={branch.localisation}
				loading='lazy'
				className='object-cover w-full h-full rounded-md'
			/>
			<h2 className='absolute z-10 w-full text-2xl font-medium text-white bottom-4 left-5'>
				{branch.city}
			</h2>
		</motion.figure>
		<motion.div
			variants={variantsInfo}
			animate={isHovered ? 'isHovered' : 'hidden'}
			transition={{ duration: 0.5, mass: 30 }}
			className='absolute top-[50%] left-2 translate-y-[-50%] bg-white py-5 ps-2.5 pr-2 shadow-md rounded-sm flex flex-col gap-3 overflow-hidden cursor-pointer z-10'
		>
			<InfoItem icon={MapPin} text={branch.localisation} />
			<InfoItem icon={Phone} text={branch.phone} />
			<InfoItem icon={Mail} text={branch.email} />
		</motion.div>
	</article>
);

const InfoItem = ({
	icon: Icon,
	text,
}: {
	icon: typeof Mail;
	text: string;
}) => (
	<div className='flex items-center gap-2'>
		<div className='pr-1'>
			<Icon className='text-gray-600' strokeWidth={1} width={18} />
		</div>
		<p className='text-sm text-gray-500 text-nowrap'>{text}</p>
	</div>
);

export default Branch;
