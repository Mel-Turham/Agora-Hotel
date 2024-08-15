import { Phone, MailIcon, CalendarDays, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '../@/components/ui/button';
import Logo from './Logo';
const Links = [
	{
		to: '/',
		label: 'Home',
	},
	{
		to: '/branch',
		label: 'Branches',
		submenu: [
			{
				to: 'Zante Greece',
				label: 'Zante Greece',
			},
			{
				to: 'Zante italy',
				label: 'Zante italy',
			},
			{
				to: 'Zante uk',
				label: 'Zante uk',
			},
		],
	},
	{
		to: 'rooms',
		label: 'Rooms',
		submenu: [
			{
				to: 'room-lists',
				label: 'Room lists',
			},
			{
				to: 'full-slider',
				label: 'Room details full slider',
			},
			{
				to: 'normal-slider',
				label: 'Room details normal slider',
			},
			{
				to: 'images',
				label: 'Room details images',
			},
		],
	},
	{
		to: 'blogs',
		label: 'Blogs',
	},
	{
		to: 'contacts',
		label: 'Contact us',
	},
];

const Navbar = () => {
	return (
		<>
			<header className='flex flex-col w-full gap-2 bg-white'>
				<div className='flex items-center justify-between px-12 py-2 text-[#908A99] text-sm font-semibold'>
					<span className='font-normal'>Welcome to Agora Hotel</span>
					<div className='flex items-center gap-6'>
						<a
							href='tel:+237 699 83 81 17'
							className='flex items-center gap-1 font-normal'
						>
							<Phone size={16} />
							<span>+237-699-83-81-17</span>
						</a>
						<a
							href='mailto:agoratech@gmail.com'
							className='flex items-center gap-1 font-normal'
						>
							<MailIcon size={16} />
							<span>agoratech@gmail.com</span>
						</a>
					</div>
				</div>
				<hr />
			</header>
			<nav className='sticky top-0 z-20 flex items-center px-16 py-4 bg-white shadow-md'>
				<Logo />
				<menu className='flex items-center gap-8 ml-auto '>
					{Links.map((link) => {
						return (
							<li key={link.label} className='relative group'>
								<NavLink
									to={link.to}
									className={({ isActive }) =>
										`p-2 text-[15px] text-[#606060] font-semibold uppercase duration-300 ease-in-out flex items-center gap-1 ${
											isActive ? 'bg-[#deb666] text-white rounded-sm' : ''
										}`
									}
								>
									<span>{link.label}</span>
									{link.submenu && (
										<ChevronRight
											size={16}
											className='transition-all duration-300 ease-in-out group-hover:rotate-90'
										/>
									)}
								</NavLink>
								{link.submenu && (
									<ul className='absolute group-hover:flex flex-col gap-4 w-[250px] bg-white shadow-md top-[100%]  transition-transform duration-300 ease-in-out  p-4 -z-10 rounded-md hidden '>
										{link.submenu.map((submenu) => {
											return (
												<NavLink
													key={submenu.label}
													to={submenu.to}
													className='text-[16px] text-[#908A99] font-medium hover:text-[#606060] '
												>
													{submenu.label}
												</NavLink>
											);
										})}
									</ul>
								)}
							</li>
						);
					})}
					<Button
						size='lg'
						className='gap-2 font-semibold uppercase rounded-none'
					>
						<CalendarDays size={18} />
						<span>Reserver</span>
					</Button>
				</menu>
			</nav>
		</>
	);
};
export default Navbar;
