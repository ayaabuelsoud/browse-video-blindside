import React from 'react';
import { Link } from 'react-router-dom';

const OverViewItem = (props) => {
    const video = props.data;

    return (
        <Link className="col-md-6" to={`/video/${video.id}`}>
            <div className="card mb-2">
                <img className='card-img-top mt-2' src={video.thumbnail} width={570} height={315} alt={video.title} />
                <div class="card-body">
                    <h5 class="card-title">{video.title}</h5>
                    <p class="card-text">{video.description}</p>
                    <p class="card-text"><small class="text-muted">{video.release_date}</small></p>
                </div>
            </div>
        </Link>
    )
}
export default OverViewItem;
