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
    const userRepository = getRepository(User);

    const checkUsername = await userRepository.findOne({
      where: { username }
    });

    if (checkUsername) {
      throw new AppError('Username already taken');
    }

    const checkEmail = await userRepository.findOne({
      where: { email }
    });

    if (checkEmail) {
      throw new AppError('Email already taken');
    }

    if (display_name == null) {
      display_name = username;
    }

    if (profile_picture == null) {
      profile_picture = 'default.png';
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      username,
      display_name,
      email,
      password: hashedPassword,
      profile_picture,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
