import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ catego }) => {
  getGifs(catego);

  return (
    <>
      <h3>{ catego }</h3>
    </>
  )
}
