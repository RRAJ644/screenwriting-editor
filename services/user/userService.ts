import { IUser, IUserRepository, IUserService } from '@/types/User'
import UserRepository from '@/repositories/UserRepository'

export class UserService implements IUserService {
  private userRepository: IUserRepository

  constructor() {
    this.userRepository = UserRepository.getInstance()
  }

  public async createUser(
    name: string,
    email: string,
    password:string,
    avatar: string,
    username: string
  ): Promise<IUser> {

    const existingUser = await this.userRepository.getUserByEmail(email)
    if (existingUser) {
      throw new Error('User with this email already exists')
    }

    const existingUsername = await this.userRepository.getUserByUsername(username)
    if (existingUsername) {
      throw new Error('Username is already taken')
    }

    const newUser = await this.userRepository.create({ name,email,password,avatar,username,})

    return newUser
  }
}


