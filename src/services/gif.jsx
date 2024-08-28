const api_key ='NVnyAr6E7rxBL0aSNmN0CCai12y5KLx8'

const limit = 1

export const reqGif = async(categoria) => {
    try{
        const resp = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
        const { data } = await resp.json()
        const gifs = data.map((gif)=>({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url

        }))

        return gifs
    }catch (err){
        console.error(err)
    }
}