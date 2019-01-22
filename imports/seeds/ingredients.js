import casual from 'casual';
import { Ingredients } from '../api/ingredients.js';

export const createIngredients = (num) => {
  //Clear ingredients
  Ingredients.remove({});
  //Add ingredients
  for(let i=0 ; i<num ; i++){
    Ingredients.insert({
      name: casual.word,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}
