import { useEffect, useState } from "react";
import axios from 'axios';

const AddItem=( props )=>{
    const [ item, setItem ] = useState( {} );
    const [ color, setColor ] = useState( "red" );
    const [ description, setDescription ] = useState( "" );
    const [ size, setSize ] = useState( "tiny" );

 
    const addItem = (event) =>{
        console.log( 'in addItem' ); 
        setItem(
            {
                description: description,
                size: size,
                color: color
            }
        )
        // add item (POST)
        axios.post( '/items', {
            description: description,
            size: size,
            color: color
        } ).then( ( response )=>{
            console.log( response.data );
            props.getItems();
        }).catch( ( err )=>{
            console.log( err );
            alert( 'error adding item to server' );
        })
    }
    const colorChange = (event) =>{
        console.log( 'in colorChange:', event.target.value ); 
        setColor( event.target.value );
    }
    const descriptionChange = (event) =>{
        console.log( 'in descriptionChange:', event.target.value ); 
        setDescription( event.target.value );
    }
    const sizeChange = (event) =>{
        console.log( 'in sizeChange:', event.target.value ); 
        setSize( event.target.value );
    }
    return(
        <div>
            <h2>AddItem</h2>
            <input type="text" placeholder="description" onChange={ descriptionChange } ></input>
            <select onChange={ sizeChange }>
                <option>tiny</option>
                <option>small</option>
                <option>medium</option>
                <option>large</option>
                <option>huge</option>
                <option>ginormous</option>
            </select>
            <select onChange={ colorChange }>
                <option>red</option>
                <option>orange</option>
                <option>yellow</option>
                <option>green</option>
                <option>blue</option>
                <option>purple</option>
            </select>
            <button onClick={ addItem }>Add Item</button>
            <p>current item: { JSON.stringify( item ) }</p>
        </div>
    )
}

export default AddItem;