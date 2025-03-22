import { useState } from 'react';


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

      {/* listado de gifs */}     
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
          {categories.map( categoria => {
            return (<li key={categoria}>{categoria}</li>)
          })}
      </ol>



      {/* gif item */}

    </>
  )
}
