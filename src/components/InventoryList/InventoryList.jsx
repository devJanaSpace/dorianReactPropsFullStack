import { useEffect, useState } from "react";
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryList=( props )=>{
    const [ hook, setHook ] = useState( null );
 
    return(
        <div>
            <h2>InventoryList</h2>
            {
                props.items.map( 
                    thisItem =>(
                        <InventoryItem item={ thisItem } getItems={ props.getItems }/>
                    )
                )
            }
        </div>
    )
}

export default InventoryList;