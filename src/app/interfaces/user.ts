export interface IUser {
  id: string;
  name: string;
  username: string;
  password: string;
}

export interface IAuthPayload {
  username: string;
  password: string;
}
