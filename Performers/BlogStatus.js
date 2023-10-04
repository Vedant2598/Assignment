const _=require('lodash')
const axios=require('axios')

const BlogStatus=async(req,res)=>{
    let blog=req.blogFetch
    let blogs=blog.blogs
    
    //COUNT THE SUM OF THE BLOGS
    let sum_of_blog=_.countBy(blogs)
    sum_of_blog=Object.values(sum_of_blog)[0]



    //LONGEST TITLE
    let title_length=0
    let longest_title_blog=null
       
    _.filter(blogs,(x)=>{
        let size=x.title.length
        
        if(size>title_length)
        {
            title_length=size
            longest_title_blog=x
        }
    })
    
    // the number of blogs with titles containing the word "privacy."
    let privacy_title_count=0
    try{    
       await axios.get("http://localhost:3005/api/blog-search?query=privacy")
        .then((response)=>{
            privacy_title_count=response.data.length
        })
    }
    catch(e){ 
        console.log(e)
    }

 
    

    //RESPONSES
    let response={  
        total:sum_of_blog,
        longest_title:longest_title_blog.title,
        privacy_title_count:privacy_title_count,
      
        }

    res.json(response)
}

module.exports={BlogStatus}