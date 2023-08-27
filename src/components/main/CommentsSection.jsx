import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentsList';

function CommentsSection({ videoId }) {
    const [comments, setComments] = useState([]);
   
    const getComments = async () => {
        try {
        const response = await fetch(`/api/comments/${videoId}`);
        const data = await response.json();
        setComments(data.items);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };
    
    const handleAddCommemnt = async (comment) => {
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment),
        })
    
        if (response.ok) {
            const data = await response.json()
            setComments([...comments, data]);
        } else {
            console.error('Error adding comment:', response);
        } 
    } catch (error) {
            console.error('Error adding comment:', error);
            }
        };


React.useEffect(() => {
    getComments();
}, []);


    return (
        <div>
            <CommentForm videoId={videoId} onAddComment={handleAddCommemnt} />
            <CommentList comments={comments} />
        </div>
    );
}

export default CommentsSection;