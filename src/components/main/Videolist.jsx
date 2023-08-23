import { useState, useEffect } from "react";

export function Videolist({video}){
    const [errMsg, setErrMsg] = useState(false);

    return(
        <div className="card h-50" key={video.id.videoId} >
            <img src={`${video.snippet.thumbnails.high.url}`} className="card-img-top img-responsive"  />
            <div className="card-body d-block">
                <h5 className="card-title">{video.snippet.title}</h5>
                <p className="card-text text-truncate">{video.snippet.description}</p>
            </div>
        </div>
    )
}