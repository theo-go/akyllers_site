// components/layout.js
import React, { useState, useEffect } from "react";
import Image from 'next/image'

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import PlayButton from "./images/play.png";
import PauseButton from "./images/pause.png";

const allTunes = [
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FTales%20Of%20Pharaohs%2C%20Balloonists%2C%20Lovers%20And%20Yogis.mp3?alt=media&token=77f54d1f-f9eb-4fd8-88f8-658999051a3d",
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FResonate.mp3?alt=media&token=68389111-be75-453f-b19a-76fdc57ab5fb",
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FMist%20After%20Smoke.mp3?alt=media&token=5614749f-e69e-452e-9212-e461eeacd959",
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FFragile.mp3?alt=media&token=18f8f833-c159-4539-b765-ab3bdb458975",
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2F2pm%20Seems%20Like%20an%20Hour%20Ago.mp3?alt=media&token=bdd23806-5a32-4504-a37b-22b9df736f58"
]

const playIcon = (
    <Image src={PlayButton} />
)

const pauseIcon = (
    <Image src={PauseButton} />
)

const parentWrapper = {
    // display: 'flex'
}





export function OuterLayout({ children }) {

    const [playlist, setPlaylist] = useState(allTunes);
    const [tuneIndex, setTuneIndex] = useState(0);
    const [currTune, setCurrTune] = useState();
    console.log(currTune)
    console.log(playlist)

    useEffect(() => {
        // setPlaylist(allTunes);
        setCurrTune(allTunes[0]);
    }, []);


    function handlePlayNext() {
        if (tuneIndex >= playlist.length) {
            setTuneIndex(0)
        } else {
            setTuneIndex(tuneIndex + 1)
            setCurrTune(playlist[tuneIndex])
            console.log(tuneIndex)
            console.log(currTune)
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
            autoPlay={true}
            autoPlayAfterSrcChange={true}
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

