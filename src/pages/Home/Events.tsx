import CardEvent from '../../components/CardEvent';
import Title from '../../components/Title';

const Events = () => {
	return (
		<section className='min-h-screen py-[5rem] px-14'>
			<div>
				<Title
					title='LATEST NEWS & EVENTS'
					paragraph='Check out our latest news & events'
					align='center'
				/>
			</div>
			<div className='flex items-center gap-6 mt-10'>
				<CardEvent />
				<CardEvent />
				<CardEvent />
			</div>
		</section>
	);
};

export default Events;
