const {SearchCache}=require('../CacheStorage/CacheStorage')

const CacheMiddleware=(req,res,next)=>{
    let cache=SearchCache(req.query.query,null)
    

        if(cache==false)
        {
            next()
        }
        else
        {
            res.json(JSON.parse(cache))
        }
    
    
}
 
module.exports={CacheMiddleware}