import { useEffect, useState } from "react";

const _template=( props )=>{
    const [ hook, setHook ] = useState( null );
 
    return(
        <div>
            <h2>_template</h2>
            <p>props: { JSON.stringify( props ) }</p>
        </div>
    )
}

export default _template;