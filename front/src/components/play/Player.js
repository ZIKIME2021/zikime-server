import React, { Component } from 'react';
import styled from 'styled-components';
import Hls from 'hls.js';

const PlayerWrapper = styled.div`
    position: relative;
    margine: 2px 0;
`;

const PlayerInner = styled.div`
`;
const VideoStyle = {
    width: '28vw',
    height: 400,
    background: '#000'
}

class Player extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    componentDidMount(){


        if(Hls.isSupported() && this.player){

            
            const video = this.player;
            const streamURL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
            
            video.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
            
            const hls = new Hls();
            hls.loadSource(streamURL);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_LOADED, function(){
                video.play();
            });
        }
    }

    render() {
        return (
            <PlayerWrapper>
                <PlayerInner>
                    <video controls={false} style={VideoStyle} ref={(player => this.player = player)} autoPlay={true}></video>
                </PlayerInner>
            </PlayerWrapper>
        );
    }
}

export default Player;