import { PlayCircleIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Video = () => {
	const [openVideoModel, setOpenVideoModel] = useState<boolean>(false);

	// Logics
	useEffect(() => {
		const body = document.querySelector<HTMLBodyElement>('body')!;
		const escFunction = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpenVideoModel(false);
			}
		};
		if (openVideoModel) {
			body.classList.add('overflow-hidden');
		} else {
			body.classList.remove('overflow-hidden');
		}
		document.addEventListener('keydown', escFunction);
		return () => document.removeEventListener('keydown', escFunction);
	}, [openVideoModel]);
	const onClose = () => {
		setOpenVideoModel(false);
	};
	return (
		<section className='flex items-center justify-center w-full mt-5 bg-fixed bg-center bg-cover brightness-75 bg-bg-video'>
			<div className='h-[500px] flex items-center justify-center'>
				<PlayCircleIcon
					width={120}
					height={150}
					color='#ffff'
					className='cursor-pointer animate-pulse'
					strokeWidth={1}
					onClick={() => setOpenVideoModel(true)}
				/>
			</div>
			<AnimatePresence mode='popLayout'>
				{openVideoModel && (
					<motion.div
						initial={{ opacity: 0}}
						animate={{ opacity: 1}}
						exit={{ opacity: 0, }}
						transition={{ duration: 0.5}}
						className='w-[1000px] h-[480px] bg-black fixed rounded-lg overflow-hidden'
					>
						<button title='Close (Esc)' onClick={onClose}>
							<X className='absolute text-white cursor-pointer w-7 h-7 right-5 top-6' />
						</button>
						<iframe
							className='w-full h-full'
							src='https://www.youtube.com/embed/5ZxApiwDecQ?si=ZXYtgMjep6kKe6cR'
							title='YouTube video player'
							// frameborder='0'
							frameBorder={0}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							// referrerpolicy='strict-origin-when-cross-origin'
							referrerPolicy='strict-origin-when-cross-origin'
							// allowfullscreen
							allowFullScreen
						></iframe>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Video;
