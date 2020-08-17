import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from '../middleware/Token';

import UserModel from '../models/UserModel';

interface IUser {
  login: string;
  password: string;
}

class AuthenticateController {
  async login(request: Request, response: Response) {
    try {
      const { login, password } = request.body;

      if(!login || !password) {
        return response.status(400).json({
          message: 'Enter login and password'
        });
      }

      const user = await UserModel.findOne(login);

      bcrypt.compare(password, user.password, function(err, res) {
        if(res) {
          return response.status(200).json({
            auth: true,
            message: 'Login authorized',
            token: jwt.generateToken({id: user.id})
          });
        } 

        return response.status(401).json({
          message: 'Login Unauthorized'
        });

      });

    } catch (error) {
      return response.status(500).json({
        message: error.message
      })
    }
  }

  async logout(request: Request, response: Response) {
    response.status(200).send({ auth: false, token: null });
  }
}

export default new AuthenticateController;