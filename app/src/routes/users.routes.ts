import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

// Create User
usersRouter.post('/', async (request, response) => {
  try {
    const { username, display_name, email, password, profile_picture } = request.body;

    const createNewUser = new CreateUserService();

    const user = await createNewUser.execute({
      username,
      display_name,
      email,
      password,
      profile_picture,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
