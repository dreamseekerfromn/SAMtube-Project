import { useEffect, useState } from "react"
import { VideoCard } from "./VideoCard";

/**
 * VideoIndex()
 * -----------------------------------
 * a container for the list of videos.
 * @param {*} param0 
 * @returns 
 */
export default function VideoIndex({videos}){
    return(
        <div className="row">
                    {videos.map((video)=>
                        (<div className="col-md-3 col-sm-12 p-2">
                            <div className="card h-25 w-100" key={video.id.videoId} >
                                <VideoCard video={video}/>
                            </div>
                        </div>)
                    )}
        </div>
    )
}