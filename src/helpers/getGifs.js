export const getGifs = async(catego) => {

  const url =`https://api.giphy.com/v1/gifs/search?api_key=lPIoXBViCTnkFfnyGohI6ktkH6rwYGKi&q=${catego}&limit=20`
  const resp = await fetch( url );
  const {data} = await resp.json();
  //console.log('JSON de resp',data);

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  })

  console.log('ESTOS SON LOS GIFS',gifs);
  return gifs;
}