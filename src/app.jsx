import { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/videoList';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('useEffect');

    const API_KEY = 'AIzaSyAqDZ7LBnjfq_TN4j2sLQsh5gPYzOfJ2Jc';

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []);

  return <VideoList videos={videos} />
}

export default App;
