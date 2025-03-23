import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) {
      console.log("ya existe");
      return;
    }
    console.log(newCategory);

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map(categoria => {
        return (
          <GifGrid 
            key={categoria}
            catego={categoria}
          />
        )
      })}

    </>
  )
}
