import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { NewsCardProps } from '@/types/news'

//   src="https://images.unsplash.com/photo-1747134392520-e3181e0bc399?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/news/${item?._id}`}>
        <Image
        src={item?.imageUrl || "/fallback.jpg"}
        priority
          width={500}
          height={360}
          alt="City skyline"
		  className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200'
        />
      </Link>
	  <div>
		<h2 className="text-xl font-semibold my-3">{item?.title}</h2>
          <p className='text-justify mb-2'>{item?.description?.substring(0, 200)}...</p>
          <Link href={'/'}>
            <Button variant={'default'}>Read More</Button>
          </Link>
	  </div>
    </div>
  )
}

export default NewsCard
