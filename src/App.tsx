import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import { ErrorPage, Blogs, Branch, Contacts, Home, Rooms } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeLayout />}>
					<Route index element={<Home />} />
					<Route path='branch' element={<Branch />} />
					<Route path='blogs' element={<Blogs />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='rooms' element={<Rooms />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
