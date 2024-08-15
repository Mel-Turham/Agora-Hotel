import CardEvent from '../../components/CardEvent';
import Title from '../../components/Title';
import { cartEventArray as datas } from '../../db/data';

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
				{datas.map((data) => {
					// Destructuring the object of data
					const {
						image,
						descEvent,
						EventAuthor,
						EventDate,
						Comments,
						titleEvent,
					} = data;
					return (
						<CardEvent
							key={data.id}
							image={image}
							descEvent={descEvent}
							EventAuthor={EventAuthor}
							EventDate={EventDate}
							titleEvent={titleEvent}
							Comments={Comments}
						/>
					);
				})}
				{/* 
				<CardEvent />
				<CardEvent /> */}
			</div>
		</section>
	);
};

export default Events;
