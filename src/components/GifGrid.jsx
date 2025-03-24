import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

const {images, isLoading } = useFetchGifs( category )

console.log({ images, isLoading });




/* =>SEGUNDO METODO  
useEffect(() => {
    getGifs(catego)
      .then(newImages => setImages(newImages));
  }, [ ]);
*/


  return (
    <>
      <h3>{ category }</h3>

      {/*=>PRIMER METODO*/}
      {
        isLoading && (<h2>Cargando...</h2>) 
      }


{/* 
       =>SEGUNDO METODO
      {
        isLoading
        ? (<h2>Cargando...</h2>) 
        : null
      }
 */}
 
      
      <div className="card-grid">
        { images.map( ( image ) => 
          (<GifItem key={image.id}
                        { ...image }
          />
        ))}
      </div>
    </>
  )
}
