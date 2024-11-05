export interface User {
    givenName: String,
    surName: string,
    email: string,
    password: string
}

export interface Credentials {
    email: string;
    password: string
}

export interface LoggedInUser {
    fullname: string,
    email: string
}