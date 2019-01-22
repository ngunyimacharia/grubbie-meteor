import casual from 'casual';
import { OptionCategories } from '../api/optioncategories.js';

export const createOptionCategories = () => {
  // remove Types
  OptionCategories.remove({});
  // set types
  const categories = ['General','Vegeterian'];
  // add the types
  categories.forEach((val,ind) => {
    OptionCategories.insert({
      name: val,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  });

}
