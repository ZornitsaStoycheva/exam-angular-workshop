

// export interface Book {

import { User, UserId } from "./user"

    
//     likes: string[],
//     buyBook: string[],
//     _id: BookId,
//     author: string,
//     description: string,
//     image: string,
//     price: string,
//     title: string,
//     owner: string[]
// }

export interface BookId {
    _id: string
}

export interface Book {
    _id: string,
    title: string,
    author: string,
    image: string,
    description: string,
    price: string,
    owner: UserId,
    likes: string[]
}

export interface BookDetails {
    
    title: string,
    author: string,
    image: string,
    description: string,
    price: string,
    
}