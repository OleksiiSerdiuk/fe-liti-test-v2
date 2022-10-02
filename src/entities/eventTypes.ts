export interface IUserData {
  email: string,
  password: string
}

export type UserStoreState = {
  isLoading: boolean,
  userResponse: {
    success: boolean,
    error?: string
  },
  userData: IUserData,
}

