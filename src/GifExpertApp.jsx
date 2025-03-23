import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories([...categories,'Robotech']);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory setearCategoria={setCategories}                   
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
