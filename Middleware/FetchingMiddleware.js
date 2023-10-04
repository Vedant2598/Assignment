const axios=require('axios')

const fetching_middleware=async(req,res,next)=>{

    //ADDING TRY  CATCH TO AVOID THE ERRORS DURING FETCH
    try{

        await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs',{headers:'x-hasura-admin-secret: 32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'})
        .then((res)=>{
            
            req.blogFetch=res.data
            next()
        })
    }
    catch(e){
    //    console.log(e.response.data.error)
       
       res.send(e.response.data.error)
    }
    
}
module.exports={fetching_middleware}