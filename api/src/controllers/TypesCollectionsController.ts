import { Request, Response } from 'express';
import TypesCollectionsModel from '../models/TypesCollectionsModel';

class TypesCollectionsController {
  async index(request: Request, response: Response) {
    try {
      const { id } = request.query;

      if(id) {
        
        const types = await TypesCollectionsModel.getAll(Number(id));
        
        response.status(200).json({
          message: 'Types Collections',
          types
        });

      }

      const type = await TypesCollectionsModel.getAll();

      response.status(200).json(type);
      
    } catch (error) {
      
    }
  }

  async show(request: Request, response: Response) {
    try {
      
      const { id } = request.params;

      const typeId = await TypesCollectionsModel.findById(Number(id));

      return response.status(200).json(typeId);

    } catch (error) {

      return response.status(500).json({
        messagem: error.message
      })
    
    }
  }
}

export default new TypesCollectionsController;