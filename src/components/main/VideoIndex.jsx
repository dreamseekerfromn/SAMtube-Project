import { useEffect, useState } from "react"
import { VideoCard } from "./VideoCard";

export default function VideoIndex({videos}){
    return(
        <div className="row">
                    {videos.map((video)=>
                        (<div className="col-md-3 p-2">
                            <div className="card h-25 w-100" key={video.id.videoId} >
                                <VideoCard video={video}/>
                            </div>
                        </div>)
                    )}
        </div>
    )
}