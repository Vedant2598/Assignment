const _=require('lodash')
const {SearchCache}=require('../CacheStorage/CacheStorage')

const BlogSearch=(req,res)=>{
    let blogs=req.blogFetch.blogs
    let search=String(req.query.query)

    let result=[]
    let pop_items=[]
    let index=0
    
    
    //FIRST KEY SEARCH
    _.filter(blogs,(x)=>{
        try{

            
            let s=String(x.title).toLowerCase().match(search.toLowerCase())
            
            if(s)
            {
                result.push(blogs[index])
                pop_items.push(index)
            }
            
            index+=1
        }
        catch(e){
            console.log(index)
        }
    })

    //REMOVE ITEMS TO RESEARCH
    _.filter(pop_items,(x)=>{
        blogs.splice(x,1)
    })

    index=0
    
    // SECOND RELATED SEARCH
    if(_.words(search).length>1)
    {
        try{

            _.filter(blogs,x=>{
                let strs=String(x.title).toLowerCase().match(_.words(search)[0])
                if(strs)
                {
                    result.push(blogs[index])
                }
                index+=1
            })
        }
        catch(e){
            console.log(index)
        }
    }

    res.json(result)
    SearchCache(search,JSON.stringify(result))
}


module.exports={BlogSearch}