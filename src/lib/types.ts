export interface Review {
  id: number;
  user: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  longDescription: string;
  coverImage: string;
  genre: string;
  rating: number;
  reviews: Review[];
}

export interface CartItem {
  book: Book;
  quantity: number;
}
