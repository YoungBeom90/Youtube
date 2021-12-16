import React from 'react';
import VideoItem from '../video_item/videoItem';
import styles from './video_list.module.css';

const VideoList = ({videos, onVideoClick, display}) => {
    return (
        <ul className={styles.videos}>
            {videos.map(video => <VideoItem video={video} key={video.id} onVideoClick={onVideoClick} display={display} />)}
        </ul>
    )
}

export default VideoList