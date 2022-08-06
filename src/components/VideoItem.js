import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { videos } from '../data/videos';
import ReactPlayer from 'react-player';
import RelatedItem from './RelatedItem';
import Comment from './Comment'
const defaultComments = [
    { "userName": "Aya", "content": "@abdallah Right! (This is default comment 4)" },
    { "userName": "Abdallah", "content": "Nature always has a way of connecting and communicating with us. (This is default comment 3)" },
    { "userName": "Islam", "content": "Wow ! (This is default comment 2)" },

    { "userName": "Aya", "content": "This is so beautiful! (This is default comment 1)" },

];
const VideoItem = () => {
    const [show, setShow] = useState(true);
    const [comments, setComments] = useState(defaultComments)
    const [comment, setComment] = useState("");
    const params = useParams()
    const { videoId } = params;
    const navigate = useNavigate()
    const video = videos.find(video => video.id == videoId);
    const currUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!video) {
        navigate("/")
    }
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "newcomment") {
            setComment(value);
        }
    
      }
    
      const handleSubmit = () => {
        if(comment){
        const userName = currUser.userName
        setComments([{userName,content:comment},...comments])
        setComment("")
        } else {
            alert("comment box should not be empty.")
        }
      }
    const relatedVideos = videos.filter(currVideo => video.id != currVideo.id && video.category == currVideo.category)
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className="card cardplay col-lg-8 col-sm-12 mt-5">
                        <div className="card-body">

                            {<ReactPlayer url={video.path} width="560" height="315" controls={true} autoPlay={true} />}

                            <h5 className="card-title">{video.title}</h5>
                            <p class="card-text">{video.description}</p>
                            <p class="card-text"><small class="text-muted">{video.release_date}</small></p>
                        </div>

                        <div className="card-footer">
                            <button className='btn btn-primary' onClick={() => setShow(!show)}>{show ? `Hide` : 'Show'} Comments</button>
                            {show ? <div>

                                <div className='AddComment'>
                                        <div className="form-group mt-2">
                                            <div className='row'>
                                                <input className="form__input form-control col-lg-9 mt-1" onKeyPress={(e) => {if(e.key === 'Enter'){ return handleSubmit()}}} onChange={(e) => handleInputChange(e)} value={comment} type="text" id="newcomment" placeholder="write a comment" />
                                                <button type="submit" onClick={() => handleSubmit()} class="btn btn-primary float-right ml-auto col-lg-2 mt-1">Submit</button>
                                            </div>
                                        </div>
                                    <div className='comments-container'>
                                        {comments.map(comment => <Comment data={comment} />)}
                                    </div>


                                </div>


                            </div> : null}

                        </div>

                    </div>

                    <div className='col-md-4 col-sm-12 mt-5'>
                        <h3>Related videos</h3>
                        {relatedVideos.map(item => <RelatedItem data={item} />)}
                    </div>

                </div>
            </div>
        </div>
    )

}
export default VideoItem