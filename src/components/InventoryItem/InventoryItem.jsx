import { useEffect, useState } from "react";
import axios from 'axios';

const InventoryItem=( props )=>{
    const [ hook, setHook ] = useState( null );
    const sellMe = () =>{
        console.log( `in sellMe:`, props.item.id );
        axios.delete( '/items/' + props.item.id ).then( ( response )=>{
            console.log( response.data );
            props.getItems();
        }).catch( ( err )=>{
            console.log( err );
            alert( 'error deleting item from db' );
        })
    }

    return(
        <div>
            <h2>{ props.item.description }</h2>
            <p>{ props.item.size }, { props.item.color } <button onClick={ sellMe }>Sell</button></p>
        </div>
    )
}

export default InventoryItem;