import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
    const [commentText, setCommentText] = useState('');
    const [author, setAuthor] = useState('');

    const handleCommentSubmit =() => {
        const comment = { author, text: commentText };
        onAddComment(comment);
        setAuthor('');
        setCommentText('');
};

return (
    <div className="comment-form">
        <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            />
        <textarea
            placeholder="Say something..."
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            />
        <button onClick={handleCommentSubmit}>Add Comment</button>
    </div>
);
}

export default CommentForm;