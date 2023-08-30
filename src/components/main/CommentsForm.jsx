import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function CommentsForm({comments, setComments}){
    //const [comment, setComment] = useState([]);
    const {id} = useParams();
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");

    function handleAuthorChange(e){
        console.log(e.target.value)
        setAuthor(e.target.value);
    }

    function handleCommentChange(e){
        console.log(e.target.value)
        setComment(e.target.value);
    }

    useEffect(()=>{},[author]);
    useEffect(()=>{},[comment]);
    useEffect(()=>{
        localStorage.setItem(`${id}`, JSON.stringify(comments));
    },[comments]);
    /*
    function handleTextChange(event) {
        setComment({
          ...comment,
          [event.target.id]: event.target.value,
        });
    }
    */
/*
    function updateComments(e){
        const form = document.getElementById(e.target.id);
        
        if(author.length != 0 && comment.length != 0){
            const temp = (comments[id] ? [[author, comment]] : Object.assign(comments[id],[author, comment]));
            setComments({...comments, [id]:[...comments[id],temp]});
            window.localStorage.setItem('comments', JSON.stringify(comments));
            
        }
        else{
            alert("The comment & the writer fields cannot be empty.")
        }
        form.reset();
    }
*/

    function updateComments(e){
        const form = document.getElementById(e.target.id);
        
        if(author.length != 0 && comment.length != 0){
            setComments([...comments, {author:author,comment:comment,date:new window.Date()}]); 
             
        }
        else{
            alert("The comment & the writer fields cannot be empty.")
        }
        form.reset();
    }
    /**
     * submitHandler()
     * -----------------------------------
     * submit event handler for a form. 
     * @param {event} e 
     */
    function submitHandler(e){
        e.preventDefault();
        updateComments(e);
    }

    return(
        <div class="input-group">
            <form id={`form_${id}`} onSubmit={(e)=>submitHandler(e)}>
                <input type="text" className="form-control" id={`author${id}`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>handleAuthorChange(e)} ></input>
                <textarea className="form-control" id={`comment${id}`} aria-label="With textarea" onChange={(e)=>handleCommentChange(e)}></textarea>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}