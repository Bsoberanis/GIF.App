const[gif , setGif] = useState('')

    const url_image = 'https://www.azilen.com/blog/everything-must-know-spring-boot-application-scratch/'
   
    //async|await
   
    const reqGif =async() => {
        await fetch('https://www.azilen.com/blog/everything-must-know-spring-boot-application-scratch/').then(async(resp)=>{
            await resp.json().then((data)=> {
                
            })
        } ).catch(console.error)

    }
