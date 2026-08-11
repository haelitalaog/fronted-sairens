export type UserRole = "ADMIN" | "USUARIO";


export interface User {
  id: string;
  name: string;
  email: string;
  carnet: string;
  age: number;
  weight: number;
  height: number;
  role: UserRole;
}


export interface UserRecord extends User {
  password: string;
}


export interface LoginCredentials {
  email: string;
  password: string;
}
