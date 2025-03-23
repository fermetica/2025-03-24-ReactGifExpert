import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

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

      <div className="card-grid">
        { images.map( ( image ) => (<GifItem key={image.id}
                                             { ...image }
                                     />
        ))}
      </div>


    </>
  )
}
