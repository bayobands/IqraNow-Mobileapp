"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./NamesLayout.module.css";

const AudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // percent

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(percent);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = bar.clientWidth;

    const audio = audioRef.current;
    if (audio && audio.duration) {
      audio.currentTime = (clickX / width) * audio.duration;
    }
  };

  return (
    <div className={styles.audioPlayer}>
      <button onClick={togglePlay} className={styles.audioButton}>
        {isPlaying ? "⏸" : "▶"}
      </button>

      <div className={styles.progressBarContainer} onClick={handleSeek}>
        <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
      </div>

      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default AudioPlayer;
