import { useEffect, useState } from "react";
import AddItem from '../AddItem/AddItem';
import InventoryList from '../InventoryList/InventoryList';
import axios from 'axios';

const Body=( props )=>{
    const [ items, setItems ] = useState( [] );
    //  GET call for items in useEffect
    useEffect( ()=>{
        getItems() }, [] ); // end useEffect

    const getItems = ()=>{
        axios.get( '/items' ).then( ( response )=>{
            setItems( response.data );
        }).catch( ( err )=>{
            console.log( err );
            alert( 'error getting items from server' );
        })
    } // end getItems

    return(
        <div>
            <h2>Body</h2>
            <p>props: { JSON.stringify( props ) }</p>
            <AddItem getItems={ getItems }/>
            <InventoryList items={ items } getItems={ getItems }/>
        </div>
    )
}

export default Body;