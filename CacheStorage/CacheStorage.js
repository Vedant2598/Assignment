const CacheStorage=(time)=>{
    let timer=time*1000
    let cacheData=[]
    let index=0

    return function(search,value){

        
        if(search!=null && value!=null)
        {
            cacheData.push({title:String(search).toLowerCase(),result:value})
            
            if(timer!=null)
            {
                let remove_index=index
                setTimeout(() => {
                    console.log("cache deleted")
                    cacheData.splice(remove_index,1)
                    index-=1
                }, timer);
            }
            index+=1

        }   
        else if(search!=null && value==null)
        {
            let results=null
            
                cacheData.filter(x=>{
                    if(x.title==String(search).toLowerCase())
                    {
                       
                        results=x.result
                        
                    }
                })


                if(results)
                {
                    return results
                }
                else
                {
                    return false
                }
 
        }
       
    }
}

// PASS THE INT PARAMETER TO DELETE CACHE AFTER PARTICULAR SECONDS OR ELSE SET TO NULL 
let SearchCache=CacheStorage(120)


module.exports={SearchCache}