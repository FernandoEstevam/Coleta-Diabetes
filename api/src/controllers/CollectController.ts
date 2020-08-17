import { Request, Response } from 'express';

import CollectModel from '../models/CollectModel';

interface ICollect {
  date: string;
  time: string;
  collect: string;
  user_id: number;
  type_collections_id: number;
}

class CollectController {
  async index(request: Request, response: Response) {
    try {
      
      const { id } = request.query;

      if(id) {
        const collectId = await CollectModel.getlAll(Number(id));

        return response.status(200).json(collectId);
      }

      const collect = await CollectModel.getlAll();

      return response.status(200).json(collect);

    } catch (error) {
      
      throw error;

    }
  }

  async show(request: Request, response: Response) {

    try {
      
      const { id } = request.params;

      if(!id) {

        return response.status(400).json({
          message: 'ID and required'
        });
      }

      const collect = await CollectModel.findById(Number(id));

      if(collect.length) {
        return response.status(200).json(collect);
      }

      return response.status(404).json({
        message: 'Not found'
      });

    } catch (error) {
      
      return response.status(500).json({
        message: error.message
      })

    }

  }
  
  async create(request: Request, response: Response) {
    try {
      
      const { date, time, collect, user_id, type_collections_id } = request.body;

      if(!date || !time || !collect || !user_id || !type_collections_id ) {
        return response.status(400).json({
          message: 'Fill in all fields'
        });
      }

      const data:ICollect = {date, time, collect, user_id, type_collections_id};

      const collectInsert = await CollectModel.create(data); 

      if(collectInsert.length) {
        return response.status(201).json({
          message: 'Collect successfully!'
        });
      }

      return response.status(400).json({
        message: 'Error entering data!'
      });
    
    } catch (error) {

      response.status(500).json({
        message: error.message
      
      }); 
    }
  }
}

export default new CollectController;