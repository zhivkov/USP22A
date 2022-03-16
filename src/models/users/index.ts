export interface Children {
    firstName: string;
    lastName: string;
    school?: string;
}

export interface User {
    name: string;
    age: number;
    isMarried: boolean;
    children: Children[];
}