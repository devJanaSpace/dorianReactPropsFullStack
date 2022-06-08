import { useEffect, useState } from "react";

const InventoryItem=( props )=>{
    const [ hook, setHook ] = useState( null );
 
    return(
        <div>
            <h2>InventoryItem</h2>
            <p>props: { JSON.stringify( props ) }</p>
        </div>
    )
}

export default InventoryItem;