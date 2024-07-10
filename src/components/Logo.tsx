import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = ({size}:{size : string}) => {
	return (
		<Link to='/' className={`flex flex-col items-center `}>
			<h1
				className={` font-semibold text-[#908A99] mt-2 cursor-pointer text-${size}`}
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
