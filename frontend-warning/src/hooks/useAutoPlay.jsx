import { useEffect } from "react";

function useAutoPlay(audioRef) {
  useEffect(() => {
    const events = [
      "pointerdown",
      "pointermove",
      "mousedown",
      "mousemove",
      "touchstart",
      "touchmove",
      "wheel",
      "scroll",
      "keydown",
    ];

    const play = async () => {
      try {
        await audioRef.current.play();
      } catch {
        events.forEach((e) => {
          window.addEventListener(e, play, { once: true });
        })
      }
    }

    play();
    audioRef.current.volume = 0.08;
    
    return () => {
      events.forEach((e) => {
        window.removeEventListener(e, play);
      })
    }
  },[audioRef])
}

export default useAutoPlay;
