import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = ( newCategory ) => {

    if(categories.includes(newCategory)) {
      console.log("ya existe");  
      return;}
    console.log(newCategory);

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        //setearCategoria={setCategories}   
        onNewCategory = { (value) => onAddCategory(value) }         
      />

      {/* listado de gifs */}
      <ol>
          {categories.map( categoria => {
            return (<li key={categoria}>{categoria}</li>)
          })}
      </ol>



      {/* gif item */}

    </>
  )
}
