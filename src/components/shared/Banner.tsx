import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import banner from '@/assets/next-js-banner.jpg'

const Banner = () => {
  return (
	<div>
		<div className='bg-slate-100 dark:bg-gray-800 dark:text-white rounded-md'>
			<div className='px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
				{/* image  */}
			<div>
				<Image src={banner} alt='banner' className='rounded-md' />
			</div>
			<div className='space-y-4 flex flex-col'>
				<h4 className='text-sm font-medium text-gray-500'>Technologies</h4>
				<p className='text-3xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, consequatur?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure, quisquam saepe laboriosam nam blanditiis ducimus adipisci beatae fugiat cupiditate asperiores, ipsa reiciendis, quasi doloribus similique? Officia magni dolorem illo, velit nobis quae atque. 
				<br /> <br />
				em ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure, quisquam saepe laboriosam nam blanditiis ducimus adipisci beatae fugiat cupiditate asperiores, ipsa reiciendis, quasi doloribus similique? Officia magni dolorem illo, velit nobis quae atque. 
				</p>
				<Button variant='default'>Read More</Button>
			</div>
			</div>
		</div>
	</div>
  )
}

export default Banner