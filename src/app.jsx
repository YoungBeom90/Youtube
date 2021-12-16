import { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/searchHeader';
import VideoDetail from './components/video_detail/videoDetail';
import VideoList from './components/video_list/videoList';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = query => {
    youtube.search(query)
    .then(videos => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        {selectedVideo && 
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} /> 
          </div>
        }
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  )
}

export default App;
