import { NewsItem } from '@/types/news';
import React, { useEffect, useState } from 'react'

function NewsList() {
	const [news, setNews] = useState<NewsItem[]>([]);;
	const [search, setSearch] = useState<string>('');
	const [category, setCategory] = useState<string>('');

	useEffect(()=> {
		
	}, [])
  return (
	<div>NewsList</div>
  )
}

export default NewsList