import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStatistics } from '../../api/fetch';
/**
 * VideoPlayerList()
 * ---------------------------------
 * a single card to contain thumbnail, title, and description of a video.
 * 
 * @param {React.prop} - react prop to hold a single video info. 
 */
export function VideoPlayerList({video}){
    const [loaded, setloaded] = useState(false);
    const [videoStat, setVideoStat] = useState({
        viewCount:"",
        likeCount:"",
        favoriteCount:"",
        commentCount:"",
    });

    //grab statistics & attatch to videoStat
    useEffect(()=>{
        getStatistics(video.id.videoId)
            .then((response)=>response.json())
                .then((json)=>setVideoStat(json.items[0].statistics))
                    .catch((err)=>console.error(err));
    },[]);

    useEffect(()=>{
        if(videoStat){
            setloaded(true);
        }
        else{
            setloaded(false);
        }
    },[videoStat]);

    return(
        <>
            {loaded ? (
            <Link to={`/show/${video.id.videoId}`}>
                <img src={`${video.snippet.thumbnails.high.url}`} className="card-img-top img-responsive"  />
                <div className="card-body d-block">
                    <h6 className="card-title">{video.snippet.title}</h6>
                    <p className="card-text">{video.snippet.channelTitle}</p>
                </div>
            </Link>
            ) : (<div><p>video is not properly loaded</p></div>)}
        </>
    )
}