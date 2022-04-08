import React from 'react'
import VideoItem from './VideoItem'
import {Grid} from '@material-ui/core'

function VideoList({videos, handleVideoSelect}) {
  const listVideos = videos.map(video => <VideoItem handleVideoSelect={handleVideoSelect} video={video}/>)
  return (
    <Grid container spacing={10}>
      {listVideos}
    </Grid>
  )
}

export default VideoList