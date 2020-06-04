import { Account } from './account'

export interface Auth {
  userName: string;
  password: string;
}
export interface User {
  token: string;
  user: Account;
}