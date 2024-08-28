import { useGif } from "../hooks/useGif"
import { BuscarGif } from "./BuscarGif"
import { ContenedorGif } from "./ContenedorGif"

// functional component
export const GifApp = () => {

    const {handleGetGif,gifs } = useGif()

    return(
        // fragment
        //props = una propiedad que vuaja entre componentes 
        <>
          <BuscarGif handleGetGif={handleGetGif}/>
          <ContenedorGif gifs={gifs}/>
            
        </>
    )
}
    

