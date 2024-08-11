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
			<div className='grid w-full h-[65vh] grid-cols-4 gap-8 my-8 px-10 grid-cover '>
				{/* <figure className='col-span-2 row-span-2 duration-300 ease-in-out bg-gray-600 rounded-lg hover:scale-105'></figure>
				<figure className='col-span-2 bg-green-600 rounded-lg'></figure>
				<figure className='bg-indigo-500 rounded-lg'></figure>
				<figure className='bg-purple-600 rounded-lg'></figure> */}
				{DiscoverData.map((item) => {
					const { id, image, title } = item;
					return (
						<figure
							key={id}
							className='relative overflow-hidden duration-300 ease-in-out bg-red-300 rounded-md hover:scale-[1.02]'
						>
							<img
								src={image}
								alt={title}
								className='object-fill object-center w-full h-full brightness-75'
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
