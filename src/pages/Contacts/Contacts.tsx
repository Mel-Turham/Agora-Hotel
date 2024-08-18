import { Button } from '../../@/components/ui/button';
import Container from '../../components/Container';

const Contacts = () => {
	return (
		<Container className='flex py-20 text-gray-500'>
			<div className='w-1/2 mt-6 overflow-hidden bg-white border border-gray-200 border-solid shadow-lg rounded-xl'>
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
			<div className='grid w-1/2 grid-rows-2'>
				<div className='bg-red-600'></div>
				<div className='h-full bg-fuchsia-600'></div>
			</div>
		</Container>
	);
};
export default Contacts;
