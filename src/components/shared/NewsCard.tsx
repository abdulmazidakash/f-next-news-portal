import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

//   src="https://images.unsplash.com/photo-1747134392520-e3181e0bc399?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const NewsCard = ({ item }: any) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href="/">
        <Image
          src={item?.strCategoryThumb}
        
          width={500}
          height={360}
          alt="City skyline"
		  className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200'
        />
      </Link>
	  <div>
		<h2 className="text-xl font-semibold my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam!</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, inventore. Dolorem ipsam animi ea vel doloremque illo placeat debitis fugiat?</p>
          <Link href={'/'}>
            <Button variant={'default'}>Read More</Button>
          </Link>
	  </div>
    </div>
  )
}

export default NewsCard
