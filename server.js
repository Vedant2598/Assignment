const express=require('express')
const app=express()
const server=require('http').createServer(app)
const axios=require('axios')
const _=require('lodash')


//MIDDLEWARE WHICH FETCH THE DATA FROM THE API
const {fetching_middleware}=require('./Middleware/FetchingMiddleware')
const {CacheMiddleware}=require('./Middleware/CacheMiddleware')

// FUNCTION IMPORTS
const {BlogSearch}=require('./Performers/BlogSearch')
const {BlogStatus}=require('./Performers/BlogStatus')


// REST API
app.get('/api/blog-stats',fetching_middleware,BlogStatus)

app.get('/api/blog-search',CacheMiddleware,fetching_middleware,BlogSearch)


app.listen(3005,()=>{
    console.log('http://localhost:3005')
})