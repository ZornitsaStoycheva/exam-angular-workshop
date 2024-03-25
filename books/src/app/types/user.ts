export interface User {
    
        _id: string,
        email: string,
        password: string,
        username: string,
        __v: number
}

export interface Prifile {
    username: string,
    email: string
}
export interface AuthUser {
    email: string,
    password: string,
    rePasword: string,
    username: string,
    _id: string
}

export interface UserId {
    _id: string
}