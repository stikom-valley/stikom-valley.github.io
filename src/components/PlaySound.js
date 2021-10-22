import { useState } from "react";
import Sound from "react-sound";
import NarutoSong from "../assets/naruto_song.mp3"

const PlaySound = (
    handleSongPlaying,
    handleSongLoading,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div>
            <button className="font-mono text-lg text-gray-800 text-center mt-10" onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play amazing muzik' : "Please don't stop"}</button>
            <Sound
                url={NarutoSong}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={300 /* in milliseconds */}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    )
}

export default PlaySound