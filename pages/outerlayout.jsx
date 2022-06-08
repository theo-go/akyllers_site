// components/layout.js
import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image'
import {AppContext} from "../components/AppContext";

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import PlayButton from "./images/play.png";
import PauseButton from "./images/pause.png";


const playIcon = (
    <Image src={PlayButton} />
)

const pauseIcon = (
    <Image src={PauseButton} />
)

const parentWrapper = {
    // display: 'flex'
}


function OuterLayout({ children }) {
    const {state: {currTune}, dispatch } = useContext(AppContext)



    // useEffect(() => {
    //     setPlaylist(allTunes);
    //     setCurrTune(allTunes[0]);
    //     console.log('use effect triggered')
    // }, []);


    function handlePlayNext() {
        if (tuneIndex >= playlist.length) {
            setTuneIndex(0)
        } else {
            setTuneIndex(tuneIndex + 1)
            setCurrTune(playlist[tuneIndex])
            console.log(tuneIndex)
            console.log(state.currTune)
        }

    };

    function handleClickPrevious () {
        if (tuneIndex === 0) {
            setTuneIndex(0)
        } else {
            setTuneIndex(tuneIndex - 1)
            setCurrTune(playlist[tuneIndex])
            console.log(tuneIndex)
            console.log(currTune)
        }

    };


    const Player = () => (
        <AudioPlayer
            layout="horizontal"
            // autoPlay={true}
            // autoPlayAfterSrcChange={true}
            muted={false}
            volume={0.7}
            showJumpControls={false}
            showSkipControls={true}
            customAdditionalControls={[]}
            customProgressBarSection={[]}
            customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
            customVolumeControls={[]}
            customIcons={{
                play: playIcon,
                pause: pauseIcon
            }}
    
            src={currTune}
            onEnded={handlePlayNext}
            onClickPrevious={handleClickPrevious}
            onClickNext={handlePlayNext}
        // other props here
        />
    );

    return (
        <div style={parentWrapper}>
            <Player />
            <main>{children}</main>
        </div>
    )
}

export default OuterLayout