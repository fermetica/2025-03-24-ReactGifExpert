import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ catego }) => {

  const [images, setImages] = useState([]);

 //=>PRIMER METODO
  const getImages = async() => {
    const newImages = await getGifs(catego);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, [ ]);


/* =>SEGUNDO METODO  
useEffect(() => {
    getGifs(catego)
      .then(newImages => setImages(newImages));
  }, [ ]);
*/


  return (
    <>
      <h3>{ catego }</h3>

      <ol>
        { images.map( ({id, title}) =>(
          <li key={id}>{title}</li>
        )
        
      )}
       
        
      </ol>


    </>
  )
}
