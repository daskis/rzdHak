export interface IUser {
    name: string,
    password: string
    role: string
    _id: string
}
export interface IGenericResponse {
    status: string;
    message: string;
}