import { useState } from 'react';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  console.log(categories)
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}

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
