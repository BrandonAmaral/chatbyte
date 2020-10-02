import { getRepository } from 'typeorm';

import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  displayName: string;
}

class ChangeDisplayNameService {
  public async execute({ user_id, displayName }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('You have to be authenticated to change the display name', 401);
    }

    if (displayName == '') {
      displayName = user.display_name;
    }

    user.display_name = displayName;
    await usersRepository.save(user);

    return user;
  }
}

export default ChangeDisplayNameService;
