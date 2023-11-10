const express = require('express');

const app = express();

app.get('/', (request,response) =>{
    response.send('oi turu?')
})


app.listen(3000, () => { console.log ('The server 3000 has started')})