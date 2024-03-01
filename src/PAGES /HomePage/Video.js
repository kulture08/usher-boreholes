import React from 'react';
import styled from 'styled-components'
import ReactPlayer from 'react-player'


function Video() {
    return (
        <VideoSec >
            <ReactPlayer width='100%'
          height='100%' url='https://www.youtube.com/embed/zwoibCl1R8o?autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Fprolificboreholes.co.zw&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1'
          
  
          controls/>
        </VideoSec>
    )
}

const VideoSec = styled.section`
    @media(min-width:768px){
        height:660px;
    }
    @media(min-width:1200px){
        height:100vh;
    }
`;

export default Video