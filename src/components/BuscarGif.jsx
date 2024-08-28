import { useState } from "react"



export const BuscarGif = ({handleGetGif}) => {
    const [categoria, setCategoria] = useState ('')
  
   const handleSubmit = (e) => {
        e.preventDefault();
        handleGetGif(categoria); 
    };

    return (
   
 
    
    <>
      <div>
                <form className="d-flex" onSubmit={(e)=> { handleGetGif(e,categoria) }}>
                    <input type='text' className="from.control me-2" onChange={(e)=>{setCategoria(e.target.vallue)}}/>
                    <input type='submit'value='Buscar' className="btn btn-outline.success"/>
                </form>
            </div>
    </>
  )
}
