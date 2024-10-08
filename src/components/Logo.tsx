import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to='/' className={`flex flex-col items-center w-fit `}>
			<h1
				className={` font-medium text-[#908A99]  cursor-pointer text-3xl`}
			>
				Agora Hotel
			</h1>
			<div className='flex self-end gap-1'>
				{Array.from({ length: 5 }, (_, index) => {
					return <Star size={12} key={index} className='text-orange-300' />;
				})}
			</div>
		</Link>
	);
};
export default Logo;
