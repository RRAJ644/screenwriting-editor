import { IUser } from '@/types/User'
import User from '@/models/User'

export default class UserRepository {
  private static instance: UserRepository

  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }
    return UserRepository.instance
  }

  public async create(user: IUser): Promise<IUser> {
    try {
      return await User.create(user)
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('An unknown error occurred during user creation')
    }
  }

  public async getUserByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email })
  }

  public async getUserByUsername(username: string): Promise<IUser | null> {
    return User.findOne({ username })
  }
}
