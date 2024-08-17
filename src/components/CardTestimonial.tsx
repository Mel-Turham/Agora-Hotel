import { Star } from 'lucide-react';
interface Props {
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
}: Props) => {
	return (
		<div className='flex flex-col items-center gap-5'>
			<div className='relative flex flex-col items-center px-8 py-6 transition-all duration-500 ease-in-out bg-white rounded-sm shadow-sm ring ring-gray-50/5 hover:-translate-y-2 hover:shadow-lg h-[250px]'>
				<div className='flex flex-col gap-1 mb-1 item-center'>
					<h3 className='text-[#858a99] text-[22px] capitalize font-medium text-center'>
						{feedBack}
					</h3>
					<div className='flex items-center justify-center gap-1'>
						{Array.from({ length: raitingUser }, (_, index) => (
							<Star fill='#deb666' strokeWidth={0} width={20} key={index} />
						))}
					</div>
				</div>
				<p className='text-[#858a99]  text-center leading-6  text-sm mt-4'>
					{comment}
				</p>
				<div className='absolute  -bottom-2 left-[110px] border-t-[9px] border-b-0 border-solid border-t-white border-x-transparent border-x-[15px]'></div>
			</div>
			<div className='flex items-center mt-2'>
				<img
					src={UserImage}
					alt={UserName}
					loading='lazy'
					className='rounded-full'
				/>
				<div className='ml-3'>
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
