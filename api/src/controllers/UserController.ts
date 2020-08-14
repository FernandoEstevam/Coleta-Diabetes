import { Request, Response } from 'express';

// Model
import UserModel from '../models/UserModel';

class UserController {
  async index(request: Request, response: Response) {
    try {
      const { id } = request.params;
  
      const _id = Number(id);
      
      const users = await UserModel.select(_id);
  
      return response.status(200).json({
        users
      });
      
    } catch (error) {
      return response.status(500).json({
        message: error.meesage
      });
    }

  }

  async create(request: Request, response: Response) {
    const { login, password } = request.body;

    if(!login || !password) {
      return response.status(400).json({
        error: "Informe usuário e senha!"
      });
    }

    const data = {login, password}

    const user = await UserModel.insert(data);

    return response.status(201).json({
      message: 'Dados inseridos com sucesso!'
    });

  }

}

export default new UserController;