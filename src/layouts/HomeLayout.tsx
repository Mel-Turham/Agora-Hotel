import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import Container from '../components/Container';

const HomeLayout = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Navbar />
			<main className='mx-auto '>
				{pathname !== '/' && (
					<Container className='bg-[#F5F3F0] py-16'>
						<h1 className='text-2xl font-medium text-gray-600 capitalize'>
							{pathname.slice(1)}
						</h1>
						<div className='flex items-center gap-1 mt-2 font-semibold text-gray-500 capitalize'>
							<span>Home</span> / <span>{pathname.slice(1)}</span>
						</div>
					</Container>
				)}
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
export default HomeLayout;
