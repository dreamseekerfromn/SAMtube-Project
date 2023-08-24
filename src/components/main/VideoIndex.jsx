import { useEffect, useState } from "react"
import { VideoCard } from "./VideoCard";

export default function VideoIndex({videos}){
    return(
        <div className="row">
                    {videos.map((video)=>
                        (<div className="col-md-3 p-2">
                            <VideoCard video={video}/>
                        </div>)
                    )}
        </div>
    )
}