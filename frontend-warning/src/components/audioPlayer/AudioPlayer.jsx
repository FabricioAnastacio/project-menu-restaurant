import { useEffect, useRef, useState } from 'react';
import { Volume2, Play, Pause } from "lucide-react";
import music from '../../sounds/dragonballZ.mp3';
import './AudioPlayer.css'
import useAutoPlay from '../../hooks/useAutoPlay';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(.7);
  const [viwerV, setviwerV] = useState(true);
  
  useAutoPlay(audioRef);

  useEffect(() => {
    const audio = audioRef.current;
    
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    }
    
    const loadMetadata = () => {
      setDuration(audio.duration);
    }

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadMetadata);
    audio.addEventListener("play", setPlaying);

    return () => {
      audio.removeEventListener("play", setPlaying);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadMetadata);
    }
  }, []);

  const formatTime = (secunds) => {
    const timeMax = 60; 
    const min = Math.floor(secunds / timeMax);
    const sec = Math.floor(secunds % timeMax);

    return `${min}:${String(sec).padStart(2, "0")}`;
  }

  const handlePlayPause = async () => {
    if (playing) audioRef.current.pause();
    else await audioRef.current.play();

    setPlaying(!playing);
  }

  const viwerVolume = () => {
    setviwerV(!viwerV);
  }

  return(
    <div className="player">
      <audio ref={ audioRef }>
        <source src={ music } />
      </audio>
      <button onClick={ handlePlayPause }>
        { playing ? <Pause size={20} /> : <Play size={20} /> }
      </button>
      <div className="barTime_btmPlayPause">
        <span>{ formatTime(currentTime) }</span>
        <input
          className="duration_bar"
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />
        <span>{ formatTime(duration) }</span>
      </div>
      <div className="Volume_container">
        <button onClick={ viwerVolume }>
          { <Volume2 size={20} /> }
        </button>
        <input
          style={ { display: `${ viwerV ? 'none' : 'block' }` } }
          className="Volume_Bar"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            setVolume(e.target.value);
            audioRef.current.volume = e.target.value;
          }}
        />
      </div>
    </div>
  )
}
