import { ChevronDown, Star } from 'lucide-react';
interface Props {
	id: number;
	feedBack: string;
	raitingUser: number;
	comment: string;
	UserImage: string;
	UserName: string;
	country: string;
	capital: string;
}

const CardTestimonial = ({
	feedBack,
	raitingUser,
	comment,
	UserImage,
	UserName,
	country,
	capital,
	id,
}: Props) => {
	return (
		<div className='flex flex-col items-center gap-5'>
			<div className='relative flex flex-col items-center px-8 py-6 transition-all duration-500 ease-in-out bg-white rounded-sm shadow-sm ring ring-gray-50/5 hover:-translate-y-2 hover:shadow-lg'>
				<div className='flex flex-col gap-1 mb-1 item-center'>
					<h3 className='text-[#858a99] text-[22px] capitalize font-medium text-center'>
						{feedBack}
					</h3>
					<div className='flex items-center justify-center gap-1'>
						{Array(raitingUser).fill(
							<Star fill='#deb666' strokeWidth={0} width={20} key={id} />,
						)}
					</div>
				</div>
				<p className='text-[#858a99]  text-center leading-6  text-sm mt-4'>
					{comment}
				</p>
				<ChevronDown
					fill='#fff'
					strokeWidth={1}
					className='absolute text-gray-100 -bottom-6 left-[85px] '
					width={60}
					height={40}
				/>
			</div>
			<div className='flex items-center gap-3 mt-2'>
				<img
					src={UserImage}
					alt={UserName}
					loading='lazy'
					className='rounded-full'
				/>
				<div className=''>
					<h4 className='text-lg capitalize text-[#606060] font-medium'>
						{UserName}
					</h4>
					<p className='text-[13.5px] text-[#858a99]'>
						<span>{capital}</span>, <span>{country}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardTestimonial;
