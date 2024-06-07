import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './utils/constants';
import { VideoCard, AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

export const VideoContainer = () => {

  const [videos,setVideos] = useState([])

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async()=> {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
        {
            videos.map((video,key)=>{
           return ( 
            <Link to={"/watch?v="+video.id} key={key} style={{maxWidth:"30%"}}>
                <VideoCard key={video.id} info={video} />
            </Link>
           )
        })
        }        
    </div>
  )
}
