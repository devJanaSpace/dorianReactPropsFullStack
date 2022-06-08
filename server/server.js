const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const items = require( './modules/items' );

app.use( express.static( 'server/public' ) );

app.use( bodyParser.json() );
app.use( '/items', items );
const port = 5000;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
})