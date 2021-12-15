import React from 'react'

const VideoItem = (props) => {
    return (
        <li>
            <img 
                src={props.video.snippet.thumbnails.medium.url}
                alt='video thumbnail'
            />
        </li>
    )
}

export default VideoItem;
