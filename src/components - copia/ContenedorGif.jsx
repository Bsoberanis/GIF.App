import { useState } from "react"



export const ContenedorGif = ({gifs}) => {
    const [categoria, setCategoria] = useState ('')

  return (
    <>
    <div>          
            {gifs.map (({id,title,url})=>{           
                return (
                    <img key={id} className="w-50 m-5" src={url} alt="image" />

                )
            })}
        </div>
    </>
  )
}
