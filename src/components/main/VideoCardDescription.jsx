import { useState, useEffect } from 'react';
import { getStatistics } from '../../api/fetch';

export default function VideoCardDescription({video}){
    const [videoStats, setVideoStats] = useState({
        "viewCount": "",
        "likeCount": "",
        "favoriteCount": "",
        "commentCount": ""
    });

    useEffect(()=>{
        getStatistics(video.id.videoId)
            .then((response)=>response.json())
                .then((json)=>setVideoStats(json.items[0].statistics))
                    .catch((err)=>console.error(err));
    },[]);

    useEffect(()=>{},[videoStats]);

    return(
        <div className="card-body d-block">
                <h6 className="card-title text-truncate">{video.snippet.title}</h6>
                <p className="card-text">{video.snippet.description}</p>
                <p className='card-text'>view:{videoStats.viewCount}</p>
                <p className='card-text'>like:{videoStats.likeCount}</p>
        </div>
    )

}
