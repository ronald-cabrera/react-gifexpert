

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VO81cX9j3eKIku3WL6agTKy8sHwLx1kY&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    return data.map( image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));
}