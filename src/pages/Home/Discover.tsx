import { Button } from '../../@/components/ui/button';
import Title from '../../components/Title';
import { DiscoverData } from '../../db/data';

const Discover = () => {
	return (
		<section className=' px-[15px] flex flex-col items-center py-[4rem]'>
			<Title
				title='DISCOVER GREECE'
				paragraph='Places you must explore this summer'
			/>
			<div className='grid w-full grid-cols-4 gap-8 px-10 my-8 grid-cover h-[70svh]'>
				{DiscoverData.map((item) => {
					const { id, image, title } = item;
					return (
						<figure
							key={id}
							className='relative overflow-hidden duration-300 ease-in-out rounded-md hover:scale-[1.02] h-full w-full'
						>
							<img
								src={image}
								alt={title}
								className='object-cover object-left-top w-full h-full brightness-75'
							/>
							<h3 className='absolute w-full text-xl font-semibold text-gray-100 bottom-5 left-5'>
								{title}
							</h3>
							<div className='absolute top-0 w-full h-full bg-gradient-to-tr from-rose-50 to-rose-100 opacity-15'></div>
						</figure>
					);
				})}
			</div>
			<div className='mt-3'>
				Check more <Button className='uppercase rounded-none'>Places</Button> now
			</div>
		</section>
	);
};

export default Discover;
