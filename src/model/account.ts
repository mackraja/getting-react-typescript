
export interface Account {
  id?: number | string,
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  emailVerified: boolean,
  phoneNumber: number,
  status: boolean,
  role?: number,
  scope?: [string],
}

export interface AccountList {
  rows: Account[],
  count: number
}

export type AccountOrder = 'asc' | 'desc';