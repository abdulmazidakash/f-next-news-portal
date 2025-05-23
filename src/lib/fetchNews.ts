export const fetchNews = async(category: string='', search: string= '') =>{
	try{
		const response = await fetch(`https://news-api-next-js-chi.vercel.app/api/news?category=${category}&search=${search}`);
		if(!response.ok){
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;

	}catch(error){
		console.error('error fetching news data--->', error);
	}
};