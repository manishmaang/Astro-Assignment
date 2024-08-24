const express = require('express');
const app = express();
const distributionRoutes = require('./routes/distribution');
const { initializeData } = require('./controllers/distributionController');

initializeData(); 

app.use('/api', distributionRoutes);

app.listen(3000,function(){
    console.log('server is running');
})
