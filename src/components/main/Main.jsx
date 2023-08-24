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
import { Videolist } from "./Videolist";

export default function Main(){
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        testAPI().then((response)=>response.json()).then((json)=>setVideos(json.items)).catch((err)=>console.error(err));
    },[]);

    return(
        <main>
            <div className="container-fluid mb-3" >
                <div className="row">
                    <div className="col-md-9">
                        {/** left column for video & comments & etc */}
                        <Video video={videos[0]}/>
                    </div>
                    <div className="col-md-3">
                        {/** right column for a list */}
                        {videos.map((video)=>(<Videolist video={video}/>))}
                    </div>
                </div>
            </div>
        </main>
    )
}