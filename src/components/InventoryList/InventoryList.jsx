import { useEffect, useState } from "react";
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryList=( props )=>{
    const [ hook, setHook ] = useState( null );
 
    return(
        <div>
            <h2>InventoryList</h2>
            <p>props: { JSON.stringify( props ) }</p>
        </div>
    )
}

export default InventoryList;