const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const routerMovies = require('./src/routes/movies');

const conn = require('./src/database/config/testConnection');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use(routerMovies);



app.listen(PORT,() => {
    conn.connect((error)=>{
        if(error) throw error;
        console.log('Connect to database movies_db');
    });
    console.log(`Server listening on port ${PORT}`)
});