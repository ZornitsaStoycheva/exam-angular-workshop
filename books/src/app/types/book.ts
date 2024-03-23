

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
    _onweId: string
}

export interface BookId {
    _id: string
}