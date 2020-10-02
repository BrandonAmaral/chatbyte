import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import ChangeDisplayNameService from '../services/ChangeDisplayNameService';
import secureAuth from '../middlewares/secureAuth';

const usersRouter = Router();

// Create User
usersRouter.post('/create-user', async (request, response) => {
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

// Change Display Name
usersRouter.patch('/change-display-name', secureAuth, async (request, response) => {
  try {
    const { display_name } = request.body;

    const updateDisplayName = new ChangeDisplayNameService();

    const user = await updateDisplayName.execute({
      user_id: request.user.id,
      displayName: display_name
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
});

export default usersRouter;
