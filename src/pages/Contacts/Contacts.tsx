import { Button } from '../../@/components/ui/button';
import Container from '../../components/Container';

const Contacts = () => {
	return (
		<Container className='py-20 text-gray-500 '>
			<div className='mx-auto'>
				<div className='mx-auto'>
					<div className='grid grid-cols-1 gap-6 text-center md:px-0 md:grid-cols-3'>
						<div className='overflow-hidden bg-white border border-gray-200 border-solid shadow-lg rounded-xl'>
							<div className='p-6'>
								<svg
									className='flex-shrink-0 w-10 h-10 mx-auto text-gray-400'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1'
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<p className='mt-6 text-lg font-medium text-gray-900'>
									+237-658-80-05-88
								</p>
								<p className='mt-1 text-lg font-medium text-gray-900'>
									+237-699-83-81-17
								</p>
							</div>
						</div>

						<div className='overflow-hidden bg-white border border-gray-200 border-solid shadow-lg rounded-xl'>
							<div className='p-6'>
								<svg
									className='flex-shrink-0 w-10 h-10 mx-auto text-gray-400'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1'
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<p className='mt-6 text-lg font-medium text-gray-900'>
									contact@example.com
								</p>
								<p className='mt-1 text-lg font-medium text-gray-900'>
									agorahotel@gmail.com
								</p>
							</div>
						</div>

						<div className='overflow-hidden bg-white border border-gray-200 border-solid shadow-lg rounded-xl'>
							<div className='p-6'>
								<svg
									className='flex-shrink-0 w-10 h-10 mx-auto text-gray-400'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1'
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1'
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<p className='mt-6 text-lg font-medium leading-relaxed '>
									Douala, cameroun
								</p>
							</div>
						</div>
					</div>

					<div className='mt-6 overflow-hidden bg-white border border-gray-200 border-solid shadow-lg rounded-xl'>
						<div className='px-6 py-12 sm:p-12'>
							<h3 className='text-3xl font-semibold text-center '>
								Send us a message
							</h3>

							<form action='#' method='POST' className='mt-14'>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
									<div>
										<label htmlFor='' className='text-base font-medium'>
											{' '}
											Your name{' '}
										</label>
										<div className='mt-2.5 relative'>
											<input
												type='text'
												name=''
												id=''
												placeholder='Enter your full name'
												className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-[#deb666]'
											/>
										</div>
									</div>

									<div>
										<label htmlFor='' className='text-base font-medium'>
											{' '}
											Email address{' '}
										</label>
										<div className='mt-2.5 relative'>
											<input
												type='email'
												name=''
												id=''
												placeholder='Enter your full name'
												className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-[#deb666]'
											/>
										</div>
									</div>

									<div>
										<label htmlFor='' className='text-base font-medium'>
											{' '}
											Phone number{' '}
										</label>
										<div className='mt-2.5 relative'>
											<input
												type='tel'
												name=''
												id=''
												placeholder='Enter your full name'
												className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-[#deb666]'
											/>
										</div>
									</div>

									<div>
										<label htmlFor='' className='text-base font-medium '>
											{' '}
											Company name{' '}
										</label>
										<div className='mt-2.5 relative'>
											<input
												type='text'
												name=''
												id=''
												placeholder='Enter your full name'
												className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-[#deb666]'
											/>
										</div>
									</div>

									<div className='sm:col-span-2'>
										<label htmlFor='' className='text-base font-medium'>
											{' '}
											Message{' '}
										</label>
										<div className='mt-2.5 relative'>
											<textarea
												name=''
												id=''
												placeholder=''
												className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-none rfocus:outline-none focus:border-blue-600 caret-[#deb666]'
												rows={6}
											></textarea>
										</div>
									</div>

									<div className='sm:col-span-1'>
										<Button
											type='submit'
											className='inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 border-transparent rounded-md focus:outline-none '
										>
											Send
										</Button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
export default Contacts;
