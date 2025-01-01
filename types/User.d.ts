import { Types } from 'mongoose'

export interface IUser {
  name: string
  email: string
  password:string
  avatar: string
  username: string
}

type User = {
  _id: Types.ObjectId
  name: string
  email: string
  password:string
  avatar: string
  username: string
  refreshToken: string
  scripts: Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

export interface IUserRepository {
  create(user: IUser): Promise<IUser>
  getUserByEmail(email: string): Promise<IUser | null>
  getUserByUsername(username: string): Promise<IUser | null>
}

export interface IUserService {
  createUser(
    name: string,
    email: string,
    password:string,
    avatar: string,
    username: string
  ): Promise<IUser>
}
