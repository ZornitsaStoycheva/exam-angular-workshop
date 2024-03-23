

export interface Book {
    
    likes: string[],
    buyBook: string[],
    _id: BookId,
    author: string,
    description: string,
    image: string,
    price: string,
    title: string,
    createdAt: string,
    owner: string
}

export interface BookId {
    _id: string
}