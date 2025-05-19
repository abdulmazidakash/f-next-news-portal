import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";

const Home = async()=> {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {
  cache: 'no-store'
});

  const news = await data.json();
  console.log('news data----->', news.categories);
  return (
    <div className="py-12">
      <Banner/>

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {news?.categories?.map((item: any) =>(<NewsCard key={item?.idCategory} item={item}/>)
          )}
          
        </div>
      </div>
    </div>
  );
}
export default Home