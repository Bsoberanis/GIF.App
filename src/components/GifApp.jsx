export const GisfApp = () => {

   const[gif , setGif] = useState('')

    const url_image = 'https://www.azilen.com/blog/everything-must-know-spring-boot-application-scratch/'
   
    //async|await
   
    const reqGif =async() => {
        await fetch('https://www.azilen.com/blog/everything-must-know-spring-boot-application-scratch/').then(async(resp)=>{
            await resp.json().then((data)=> {
                
            })
        } ).catch(console.error)

    }

    return(
       <>
        <div>
            <button calssName='btn btn-primary'>Generar Gif</button>
        </div>
            <img className = 'w-50 m-5' src={''} alt='image'/>

    </> 
    )


    
    
}