"use client"
import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'

import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'

export const Navbar = () => {
	 const pathname = usePathname();

	 const {isDarkMode, toggleTheme} : any = useContext(ThemeContext);

  return (
	<header className={`py-4 shadow-md ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
		<nav className='max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex justify-between items-center font-semibold'>
			{/* logo */}
			<div className='text-xl font-bold'>
				<Link href={'/'}>Daily News</Link>
			</div>
			{/* desktop menu  */}
			<NavigationMenu className='hidden lg:flex'>
			<NavigationMenuList>
				<NavigationMenuItem className='flex items-center space-x-8'>
					<NavigationMenuLink className={`${pathname === '/news'? 'text-red-500 font-semibold' : 'hover:text-red-500'}`} href='/news'>News</NavigationMenuLink>
					<NavigationMenuLink className='hover:text-red-500' href='services'>
					
					<NavigationMenuTrigger className='dark:bg-gray-900 dark:text-white'>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='text-gray-600 shadow-md px-5 py-4 space-y-2'>
							<li><NavigationMenuLink href='/services/web'>Web Development</NavigationMenuLink></li>
							<li><NavigationMenuLink href='/services/apps'>Mobile Apps</NavigationMenuLink></li>
							<li><NavigationMenuLink href='/services/seo'>SEO</NavigationMenuLink></li>
						</ul>
						
						
						
					</NavigationMenuContent>
					</NavigationMenuLink>
					<NavigationMenuLink className={`${pathname === '/about'? 'text-red-500 font-semibold' : 'hover:text-red-500'}`} href='/about'>About</NavigationMenuLink>
					<NavigationMenuLink className={`${pathname === '/contact'? 'text-red-500 font-semibold' : 'hover:text-red-500'}`} href='/contact'>Contact</NavigationMenuLink>
					
				</NavigationMenuItem>
			</NavigationMenuList>
			</NavigationMenu>

			{/* color switcher and login button  */}
			<div className='hidden lg:flex items-center space-x-4'>
				<div onClick={toggleTheme} className='flex items-center'>
					<span className='mr-2'>Dark Mode</span>
					<Switch />

				</div>
				<Button variant="default">Login</Button>

			</div>

			{/* mobile hamburger menu  */}
			<MobileMenu/>
			
		</nav>
	</header>
  )
}
