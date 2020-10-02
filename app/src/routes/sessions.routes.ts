import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// Authenticate User
sessionsRouter.post('/auth', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authUser = new AuthenticateUserService();
    const { user, token } = await authUser.execute({
      email,
      password
    });

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default sessionsRouter;
