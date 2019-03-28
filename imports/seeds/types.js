import casual from 'casual';
import { Types } from '../api/types.js';

export const createTypes = () => {
  // remove Types
  Types.remove({});
  // set types
  const types = ['EIT','MEST Staff','MEST Fellow','MINC Founders','MINC Fellows'];
  // add the types
  types.forEach((val,ind) => {
    Types.insert({
      type: val,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  });

}
