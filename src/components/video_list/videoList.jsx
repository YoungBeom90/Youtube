import React from 'react'
import VideoItem from '../video_item/videoItem'

const VideoList = (props) => {
    return (
        <div>
            {props.videos.map(video => <VideoItem video={video} key={video.id} />)}
        </div>
    )
}

export default VideoList