/**
 * Main()
 * ------------------------------
 * will render main page.
 * ToDo: need to set up the containers, and layout for the page.
 * @returns 
 */

import { useEffect, useState } from "react"
import testAPI from "../../api/fetch";
import Video from "./Video";

export default function Main(){
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        testAPI().then((response)=>response.json()).then((json)=>setVideos(json.items)).catch((err)=>console.error(err));
    },[]);
    return(
        <div>
            <Video video={videos[0]}/>
            <p>
                {videos.map((video)=>(<>{console.log(video.title)}</>))}
                
            </p>
            
        </div>
    )
}