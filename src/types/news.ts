export interface NewsItem {
	idCategory: string;
	strCategory: string;
	strCategoryThumb: string;
	strCategoryDescription: string;
}

export interface NewsCardProps {
	item: NewsItem;
}