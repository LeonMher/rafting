const exp = require('constants');
const express = require('express')
const app = express();
const path = require('path')




app.use(express.static('./public'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})


app.get('/about', (req,res)=>{

    res.sendFile(path.join(__dirname, 'aboutPage.html'))

})



const port  = 4000;

app.listen(port, ()=>{console.log(`listening on port ${port}`)})