const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("Hello Brother, Brotherrr, Namaste Brother");
})

app.listen(PORT, (err) => {
    if(err){
        console.log('Error occurred');
    }
    console.log(`App is running on port number: ${PORT}`)
})