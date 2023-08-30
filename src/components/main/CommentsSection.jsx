import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
import { useParams } from "react-router";

export default function CommentsSection(){
    const {id} = useParams();
    const [comments, setComments] = useState(()=> JSON.parse(localStorage.getItem(`${id}`) || []));
    const [loaded, setLoaded] = useState(false);
    /* should be
        [{id:[{author:comment},...]},...] */

    /** load comments from localStorage */
    useEffect(() => {
        const localComments = JSON.parse(localStorage.getItem(`${id}`));
        console.log(localComments);
        if(localComments){
            setComments(localComments);
            console.log(comments);
        }
    },[id]);

    useEffect(() => {
        localStorage.setItem(`${id}`, JSON.stringify(comments));
        if(comments){
            setLoaded(true);
        }
        else{
            setLoaded(false);
        }
    },[comments]);

    return(
        <div>
            <CommentsForm comments={comments} setComments={setComments}/>
            { loaded ? (
                <ul class="list-group">
                    {comments.map((comment,index)=>(
                        <li class="list-group-item" key={`${id}index${index}`}>
                            <CommentsList comment={comment} />
                        </li>
                    ))}
                

                </ul>) 
                : (<p>the comment section is not loaded</p>)}
        </div>
    )
}