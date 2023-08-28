import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayerLayout from './VideoPlayerLayout';
import LikenDislikeButtons from './LikenDislikeButtons';
import CommentsSection from './CommentsSection';
import VideoCardDescription from './VideoCardDescription';

function VideoDetail() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comments, setComments] = useState([]);
    const { videoId } = useParams();

const handleLike = () => {
    setLikes(likes + 1);
}

const handleDislike = () => {
    setDislikes(dislikes + 1);
}

const video = {
    id: videoId,
    title: 'Video Title',
    channel: 'Channel Name',
    description: 'Video Description',
    url: 'Video URL',
    likes: 0,
    dislikes: 0,
    comments: []
}

return (
    <div>
        <VideoPlayerLayout video={video} />
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <LikenDislikeButtons 
        likes={likes} 
        dislikes={dislikes} 
        onLike={handleLike} 
        onDislike={handleDislike}
        />
        <VideoCardDescription
        video={video}
        />
        <CommentsSection comments={comments} videoId={video.id} />
    </div>
)
}

export default VideoDetail;