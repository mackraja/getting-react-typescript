export interface Alert {
  message: string,
  statusCode: number,
  error?: string,
}

type Accounts = { [index: string]: string }

export const AccountType: Accounts = {
  1: "Admin",
  2: "SuperAdmin",  
}

export enum AccountStatus {
  Pending,
  Opened,
  Accepted
}

export enum ActionType {
  ALERT,

  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  LIST_ACCOUNTS,

  GET_ACCOUNT,

  LOGIN,
  USER_DETAILS,
  LOGOUT,
}

export interface Action<T> {
  type: ActionType;
  payload: T;
}