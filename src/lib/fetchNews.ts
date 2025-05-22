export const fetchNews = async(category: string='', search: string= '') =>{
	try{
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php?category=${category}&search=${search}`);
		if(!response.ok){
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json();
		return data.categories;

	}catch(error){
		console.error('error fetching news data--->', error);
	}
}