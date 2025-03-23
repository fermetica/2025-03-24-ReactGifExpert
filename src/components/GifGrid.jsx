import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ catego }) => {

  useEffect(() => {
    getGifs(catego);
  }, [ ]);
  


  return (
    <>
      <h3>{ catego }</h3>
    </>
  )
}
