import {useState} from 'react'
import { reqGif } from '../services/gif'

export const useGif = () => {
    
    const [gifs, setGif] = useState([])
    


    const handleGetGif = (e, categoria) =>{
        // evita la carga completa del navegador
        e.preventDefault ()

        reqGif('').then((gifs) =>{
            setGif(gifs)
        })
    }

    // return hook
    return{
       handleGetGif, 
        gifs
    }
}