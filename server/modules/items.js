const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

router.get( '/', ( req, res )=>{
    console.log( '/items GET' );
    const queryString = `SELECT * FROM items`;
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        res.sendStatus( 500 );
    });
});

router.post( '/', ( req, res )=>{
    console.log( '/items POST:', req.body );
    const queryString = `INSERT INTO items ( size, color, description ) VALUES ( $1, $2, $3 )`;
    const values = [ req.body.size, req.body.color, req.body.description ];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 201);
    }).catch( ( err )=>{
        res.sendStatus( 500 );
    });
});

router.delete( '/:id', ( req, res )=>{
    console.log( '/items DELETE:', req.params );
    // DELETE FROM items WHERE id='32';

    const queryString = `DELETE FROM items WHERE id=$1`;
    const values = [ req.params.id ];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        res.sendStatus( 500 );
    });
});

module.exports = router;