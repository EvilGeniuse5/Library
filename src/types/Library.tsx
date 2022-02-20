export interface IAuthor {
	id: number;
	name: string;
}

export interface IBook {
	id: number;
	title: string;
	price: number;
	authorId: number;
}
