export const getGifs = async(catego) => {

  const url =`https://api.giphy.com/v1/gifs/search?api_key=lPIoXBViCTnkFfnyGohI6ktkH6rwYGKi&q=${catego}&limit=10`
  const resp = await fetch( url );
  const {data} = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  })
  return gifs;
}