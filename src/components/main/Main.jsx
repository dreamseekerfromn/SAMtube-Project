/**
 * Main()
 * ------------------------------
 * will render main page.
 * ToDo: need to set up the containers, and layout for the page.
 * @returns 
 */

import { useEffect, useState } from "react"
import testAPI from "../../api/fetch";


export default function Main(){
    const [videos, setVideos] = useState();
    useEffect(()=>{
        testAPI().then((response)=>response.json()).then((json)=>setVideos(json.items)).catch((err)=>console.error(err));
    },[]);
    return(
        <div>
            <p>
                {console.log(videos)}
            </p>
        </div>
    )
}