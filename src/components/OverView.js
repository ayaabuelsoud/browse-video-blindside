import React from 'react';
import OverViewItem from './OverViewItem';
import { videos } from '../data/videos';

const OverView = () => {
    return (
        <div>
            <div className='container'>
                <h3 className='tittle-section'>All Videos</h3>
                <div class="row">
                    {videos.map(video => <OverViewItem data={video} />)}
                </div>
            </div>
        </div>
    )
}
export default OverView;