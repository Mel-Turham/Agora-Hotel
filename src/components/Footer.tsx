import {
	ChevronRight,
	EarthIcon,
	Facebook,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
} from 'lucide-react';
import Logo from './Logo';
import { useState } from 'react';

const Footer = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<footer className='bg-[#f1f1f1c2] divide-y pt-4 shadow-md'>
			{/* link and orther stuff! */}
			<div className='flex justify-between gap-3 px-16 py-8'>
				<div className='flex flex-col w-1/4 gap-2'>
					<Logo />

					<p className='text-sm leading-7 text-gray-500 text-pretty'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
						vitae nobis molestiae, ducimus nostrum cum id minima a distinctio
						natus?
					</p>
				</div>
				<div className='space-y-6'>
					<h2 className='text-lg font-medium text-gray-500 uppercase'>
						Latest news
					</h2>
					<div className='space-y-5 text-gray-500'>
						<p>Agora Hotel in pictures</p>
						<p>10 things you should know</p>
						<p>Hotel Zante Weddings</p>
						<p>Live your myth in Greece</p>
						<p>Post without feuatured image</p>
					</div>
				</div>
				<div className='space-y-6'>
					<h2 className='text-lg font-medium text-gray-500 uppercase'>
						Use full links
					</h2>
					<div className='space-y-5 text-gray-500'>
						<p className='flex items-center'>
							<ChevronRight /> <span>Loction</span>
						</p>
						<p className='flex items-center'>
							<ChevronRight /> <span>Gallery</span>
						</p>
						<p className='flex items-center'>
							<ChevronRight /> <span>Contact us</span>
						</p>
						<p className='flex items-center'>
							<ChevronRight /> <span>About us</span>
						</p>
						<p className='flex items-center'>
							<ChevronRight /> <span>My Bookings</span>
						</p>
					</div>
				</div>
				<div className='space-y-6'>
					<h2 className='text-lg font-medium text-gray-500 uppercase'>
						Contact us
					</h2>
					<div className='space-y-5 text-gray-500'>
						<p className='flex items-center gap-1'>
							<MapPin className='w-5 h-5' /> <span>Douala cameroun</span>
						</p>
						<p className='flex items-center gap-1'>
							<Phone className='w-5 h-5' /> <span>Phone: 123-457-789 </span>
						</p>
						<p className='flex items-center gap-1'>
							<Mail className='w-5 h-5' />{' '}
							<span>E-mail: exemple@gmail.com</span>
						</p>
						<div className='flex items-center gap-4'>
							<Facebook />
							<Twitter />
							<Youtube />
						</div>
					</div>
				</div>
			</div>
			<div className='relative flex items-center justify-between px-16 py-5'>
				{/* copyright */}
				<p className='text-gray-500'>
					{' '}
					&copy; 2024 Agora Hotel. Designed by{' '}
					<span className='text-orange-400'>Mel Turham</span>{' '}
				</p>
				{/* langages choses */}
				<div
					onClick={() => setIsOpen((prev) => !prev)}
					className='flex items-center gap-2 text-gray-500 cursor-pointer'
				>
					<EarthIcon /> <span>English</span>
				</div>
				{isOpen && (
					<div className='absolute bg-white h-[150px] w-[250px] right-[4rem] -top-[8.5rem] shadow-sm rounded-sm'></div>
				)}
			</div>
		</footer>
	);
};
export default Footer;
