import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
	return (
		<main className='min-h-screen'>
			<Navbar />
			<Outlet />
		</main>
	);
};
export default HomeLayout;
