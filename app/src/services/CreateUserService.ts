import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  username: string;
  display_name: string;
  email: string;
  password: string;
  profile_picture: string;
}

class CreateUserService {
  public async execute({ username, display_name, email, password, profile_picture }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsername = await usersRepository.findOne({
      where: { username }
    });

    if (checkUsername) {
      throw new AppError('Username already taken');
    }

    const checkEmail = await usersRepository.findOne({
      where: { email }
    });

    if (checkEmail) {
      throw new AppError('Email already taken');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      display_name: username,
      email,
      password: hashedPassword,
      profile_picture: 'default.png',
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
