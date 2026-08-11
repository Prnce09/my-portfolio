import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import backgroundMusic from "../assets/music/background.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const location = useLocation();

  const [showMusicScreen, setShowMusicScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Music screen sirf Home page par
    if (location.pathname === "/") {
      setShowMusicScreen(true);
      setIsPlaying(false);

      audio.pause();
      audio.currentTime = 0;
    } else {
      setShowMusicScreen(false);
      setIsPlaying(false);

      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
    };
  }, [location.pathname]);

  const enableMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0.25;
      await audio.play();

      setIsPlaying(true);
      setShowMusicScreen(false);
    } catch (error) {
      console.error("Music play error:", error);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
      />

      {/* Enter With Music Screen */}
      {showMusicScreen && location.pathname === "/" && (
        <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center">
          <div className="text-center px-6">

            <div className="mb-8">
              <div className="text-6xl mb-6 animate-pulse">
                🎵
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white">
                Welcome to
              </h1>

              <h2 className="text-4xl md:text-6xl font-black text-cyan-400 mt-2">
                Prince's Portfolio
              </h2>

              <p className="text-zinc-400 mt-5 text-sm md:text-base">
                Experience the portfolio with music
              </p>
            </div>

            <button
              onClick={enableMusic}
              className="
                px-8 py-4
                rounded-2xl
                bg-cyan-400
                text-black
                font-bold
                text-lg
                shadow-lg
                shadow-cyan-500/30
                hover:scale-105
                hover:bg-cyan-300
                transition-all
                duration-300
              "
            >
              🎵 Enter with Music
            </button>

            <p className="text-zinc-600 text-xs mt-5">
              Click to enter
            </p>

          </div>
        </div>
      )}

      {/* Music Control Button */}
      {location.pathname === "/" && !showMusicScreen && (
        <button
          onClick={toggleMusic}
          className="
            fixed
            bottom-6
            left-6
            z-[9999]
            w-12
            h-12
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            flex
            items-center
            justify-center
            hover:bg-cyan-400
            hover:text-black
            hover:scale-110
            transition-all
            duration-300
          "
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>
      )}
    </>
  );
}