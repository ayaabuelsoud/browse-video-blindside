import React from 'react'
import { Link } from 'react-router-dom';

const RelatedItem = (props) => {
    let video = props.data;
    return (
        <Link to={`/video/${video.id}`}>
            <div className="card-body" >
                <img className='card-img-top mb-2' width="auto" height="175" src={video.thumbnail} alt={video.title} />
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.release_date}</p>
            </div>
        </Link>
    )

}
export default RelatedItem
