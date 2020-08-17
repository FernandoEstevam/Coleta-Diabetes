import db from '../database/connections';

interface ICollect {
  date: string;
  time: string;
  collect: string;
  user_id: number;
  type_collections_id: number;
}

class CollectModel {
  
  getlAll(id?: number) {
    
    try {

      const query = db('collections').select('*');
  
      if(id) {
        return query.where({id})
      }

      return query;
      
    } catch (error) {
        
      throw error;

    }
  
  }

  findById(id: number) {
    try {
      
      const query = db('collections').where({id}).select('*');

      return query;

    } catch (error) {
      
      throw error;
    }
  }

  create(data: ICollect) {
    
    try {

      const query = db('collections').insert(data);
  
      return query;
      
    } catch (error) {
        
      throw error;

    }
  
  }

}

export default new CollectModel;