import { useState, useEffect } from "react";
//
export function Videolist({video}){
    const [errMsg, setErrMsg] = useState(false);

    return(
        <div className="card h-25 w-100" key={video.id.videoId} >
            <img src={`${video.snippet.thumbnails.high.url}`} className="card-img-top img-responsive"  />
            <div className="card-body d-block">
                <h6 className="card-title text-truncate">{video.snippet.title}</h6>
                <p className="card-text">{video.snippet.description}</p>
            </div>
        </div>
    )
}