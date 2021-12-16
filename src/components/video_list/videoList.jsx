import React from 'react';
import VideoItem from '../video_item/videoItem';
import styles from './video_list.module.css';

const VideoList = (props) => {
    return (
        <ul className={styles.videos}>
            {props.videos.map(video => <VideoItem video={video} key={video.id} />)}
        </ul>
    )
}

export default VideoList