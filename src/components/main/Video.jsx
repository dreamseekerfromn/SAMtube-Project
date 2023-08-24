import { useEffect, useState } from "react";

export default function Video({video}){
    /** this state hook will be used to check the video is ready to render or not */
    const [videoReady, setVideoReady] = useState(false);

    /** if video is not ready, change the hook to true */
    useEffect(()=>{
        if(video){
            setVideoReady(true);
        }
        else{
            setVideoReady(false);
        }
    },[video]);

    return(
        <div>
            {videoReady ? (
                <iframe id="existing-iframe-example"
                    width="640" height="360"
                    src={`https://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1`}
                    style={{border: "solid 4px #37474F"}}
                ></iframe>
            ) : null}
        </div>     
    )
}
