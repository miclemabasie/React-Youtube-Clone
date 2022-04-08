import React, { Component } from 'react'
import {Grid } from '@material-ui/core'
import { SearchBar, VideoList, VideoDetail } from './components'
// import SearchBar from './components/SearchBar'
// import VideoList from './components/VideoList'
// import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube'


class App extends Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSumit('React and django project')
    }

    handleSumit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResult: 5,
                key: proccess.env.GOOGLE_YOUTUBE_APIKEY,
                q: searchTerm
            }
        });
       
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})       
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        console.log(video)
    }
    
    render () {
        const {selectedVideo, videos} = this.state;
        return (
           <Grid justifyContent='center' container spacing={4}>
            <Grid item xs={12}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSumit}/>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} handleVideoSelect={this.handleVideoSelect}/>
                    </Grid>
                </Grid>
            </Grid>
           </Grid>
        )
    }
}

export default App