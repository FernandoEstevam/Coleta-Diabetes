import db from '../database/connections';
import { query } from 'express';

// Interfaces
interface IUsers {
  id?: number | string;
  login: string;
  password: string;
}

class UserModel {
  getAll(id?: number) {
    try {
      const query = db('users')
        .select('*')
        .orderBy('id')
    
      if(id) {
        return query.where({id});
      }
        
      return query;
        
    } catch (error) {
      throw error;
    }

  }
   
  findById(id: number) {
    try {
      
      const query = db('users')
        .select('*')
        .where({ id });

      return query;

    } catch (error) {

      throw error;
   
    }
  }

  insert(data: IUsers) {

    try {

      const query = db('users').insert(data);
      
      return query;
      
    } catch (error) {
      
      throw error;
      
    }

  }

  update(data: IUsers) {
    try {
      
      const { id, login, password } = data;

      const query = db('users')
      .select('*')
      .where({ id })

      if(login && password) {
        return query.update({login, password});
      }

      if(login) {
        return query.update({login});
      }

      if(password) {
        return query.update({password});
      }
      
      return query;

    } catch (error) {
      
      throw error

    }
  }

  delete(id: number) {
    const query = db('users').where({id}).del();

    return query;
  }

}

export default new UserModel;