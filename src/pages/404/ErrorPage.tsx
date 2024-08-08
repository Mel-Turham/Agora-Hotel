import { Link } from 'react-router-dom';
import { Button } from '../../@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
const ErrorPage = () => {
	return (
		<section className='flex items-center justify-center min-h-svh'>
			<div className='space-y-5'>
				<h1 className='text-6xl font-bold text-center text-gray-500 uppercase '>
					Page not found <br /> 404
				</h1>
				<p className='text-center text-gray-400'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
					nobis.
				</p>
				<div className='flex items-center justify-center'>
					<Button className='mx-auto'>
						<ChevronLeft />
						<Link to='/'>Back home</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
export default ErrorPage;
