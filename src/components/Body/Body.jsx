import { useEffect, useState } from "react";
import AddItem from '../AddItem/AddItem';
import InventoryList from '../InventoryList/InventoryList';

const Body=( props )=>{
    const [ items, setItems ] = useState( [] );
//  GET call for items in useEffect
    return(
        <div>
            <h2>Body</h2>
            <p>props: { JSON.stringify( props ) }</p>
            <AddItem />
            <InventoryList items={ items }/>
        </div>
    )
}

export default Body;