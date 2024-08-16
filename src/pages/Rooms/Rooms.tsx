import Container from '../../components/Container';
import RoomCard from '../../components/RoomCard';
import { rooms } from '../../db/data';

const Rooms = () => {
	return (
		<Container className='flex flex-col gap-5 py-20'>
			{rooms.map((room) => {
				return <RoomCard room={room} key={room.id} />;
			})}
		</Container>
	);
};
export default Rooms;
