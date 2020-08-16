import { Request, Response } from 'express';

// Model
import UserModel from '../models/UserModel';

class UserController {
  async index(request: Request, response: Response) {
    try {
      const { id } = request.query;
      
      const _id = Number(id);
      
      const users = await UserModel.getAll(_id);

      return response.status(200).json(users);
      
    } catch (error) {
      return response.status(500).json({
        message: error.message
      });
    }

  }

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const _id = Number(id);

      const user = await UserModel.findById(_id);

      return response.status(200).json(user);

    } catch (error) {
      return response.status(500)
        .json({
        message: error.message
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

  async update(request: Request, response: Response) {
   
    try {
      
      const { id } = request.params;
      const { login, password } = request.body;
   
      const _id = Number(id);
  
      const userId = await UserModel.findById(_id);
      
      if(userId.length == 0) {

        return response.status(404).json({
          message: 'User not found!'
        });
        
      }
      
      if(!login && !password ) {
        return response.status(400).json({
          message: 'Enter which field you want to update'
        });
      }
      
      const data = { id, login, password }
      
      const user = await UserModel.update(data);
      
      if(user) {
        return response.status(200).json({
          message: 'User updated successfully!'
        });
      }

    } catch (error) {
      
      response.status(500).json({
        message: error.message
      });

    }
  
  }

  async delete(request: Request, response: Response) {
    try {
    
      const { id } = request.params;
  
      if(!id) {
        return response.status(400).json({
          message: 'Please enter a valid id!'
        });
      }

      const _id = Number(id);

      const userID = await UserModel.findById(_id);

      if(!userID.length) {
        return response.status(404).json({
          message: 'User not found!'
        });
      }
      
      const userDelete = await UserModel.delete(_id);

      return response.status(200).json({
        message: 'User delete successfully!'
      });

    } catch (error) {
      return response.status(500).json({
        message: error.message
      });
    }
    
  }

}

export default new UserController;