import db from '../database/connections';

class TypesCollectionsModel {
  getAll(id?: number) {
    try {

      const query = db('types_collections')
        .select('*');
      
      if(id) {
        return query.where({ id });
      }

      return query;
      
    } catch (error) {
      throw error;
    }
  }

  findById(id: number) {
    try {
      
      const query = db('types_collections')
        .select('*').where({ id });

      return query;

    } catch (error) {

      throw error;      
    
    }
  }
}

export default new TypesCollectionsModel;