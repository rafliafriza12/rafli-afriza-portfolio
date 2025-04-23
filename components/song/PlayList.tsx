"use client";
import { useRef, useState, useEffect } from "react";
import styles from "../../style/playlist.module.css";
import {
  ArrowRightToLine,
  ArrowLeftToLine,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { playlist } from "@/datas/playlist";
import { PlaylistType } from "@/types";
const PlayList = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [dataArray, setDataArray] = useState<Uint8Array | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState<boolean>(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleNext);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleNext);
      }
    };
  }, [currentSong]);

  const initializeAudioContext = () => {
    if (!audioContext) {
      const newAudioContext = new AudioContext();
      setAudioContext(newAudioContext);
      setupAudioAnalyser(newAudioContext);
    }
  };

  const togglePlay = async () => {
    if (audioRef.current) {
      initializeAudioContext();
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  // PERUBAHAN: Modifikasi fungsi handleTimeUpdate untuk mengupdate CSS variable
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const newCurrentTime = audioRef.current.currentTime;
      setCurrentTime(newCurrentTime);

      // TAMBAHAN: Update CSS variable untuk progress slider
      const rangeInput = document.getElementById("myRange");
      if (rangeInput && duration > 0) {
        const progress = (newCurrentTime / duration) * 100;
        rangeInput.style.setProperty("--progress", `${progress}%`);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const setupAudioAnalyser = (newAudioContext: AudioContext) => {
    if (audioRef.current && !analyser) {
      const source = newAudioContext.createMediaElementSource(audioRef.current);
      const analyserNode = newAudioContext.createAnalyser();
      source.connect(analyserNode);
      analyserNode.connect(newAudioContext.destination);
      analyserNode.fftSize = 256;
      const bufferLength = analyserNode.frequencyBinCount;
      const newDataArray = new Uint8Array(bufferLength);
      setAnalyser(analyserNode);
      setDataArray(newDataArray);
      drawVisualizer(analyserNode, newDataArray);
    }
  };

  const drawVisualizer = (analyser: AnalyserNode, dataArray: Uint8Array) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = () => {
      requestAnimationFrame(renderFrame);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#31363F";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / dataArray.length) * 2.5;
      let barHeight;
      let x = 0;
      for (let i = 0; i < dataArray.length; i++) {
        barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgb(${barHeight + 100},50,150)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };
    renderFrame();
  };

  // PERUBAHAN: Modifikasi fungsi handleSeek untuk mengupdate CSS variable
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = Number(event.target.value);
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);

      // TAMBAHAN: Update CSS variable untuk slider fill
      const progress = (seekTime / duration) * 100;
      event.target.style.setProperty("--progress", `${progress}%`);
    }
  };

  const handleNext = () => {
    if (audioRef.current) {
      const nextSong = (currentSong + 1) % playlist.length;
      setCurrentSong(nextSong);
      audioRef.current.src = playlist[nextSong].src;
      audioRef.current.load();
      audioRef.current.play();
      initializeAudioContext();
      setIsPlaying(true);
    }
  };

  const handleChoose = (choosed: number) => {
    if (audioRef.current) {
      if (currentSong === choosed) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
          initializeAudioContext();
        }
        setIsPlaying(!isPlaying);
        return;
      }
      setCurrentSong(choosed);
      audioRef.current.src = playlist[choosed].src;
      audioRef.current.load();
      audioRef.current.play();
      initializeAudioContext();
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (audioRef.current) {
      const prevSong = (currentSong - 1 + playlist.length) % playlist.length;
      setCurrentSong(prevSong);
      audioRef.current.src = playlist[prevSong].src;
      audioRef.current.load();
      audioRef.current.play();
      initializeAudioContext();
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    handleLoadedMetadata();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-5 bg-[#1E1E1E]/50 rounded-2xl gap-5 duration-300">
      <div className={`w-full flex flex-col gap-3 ${isOpen ? "" : "hidden"}`}>
        <button onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}>
          {!isPlaylistOpen ? <Menu color="white" /> : <X color="white" />}
        </button>
        <div
          className={`w-full duration-300 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#888888] scrollbar-track-[#1E1E1E]/50 ${
            isPlaylistOpen
              ? "h-[300px] overflow-x-hidden flex flex-col gap-2 py-3"
              : "h-0 overflow-hidden flex flex-col gap-2"
          } bg-transparent`}
        >
          {playlist.map((song: PlaylistType, i: number) => {
            return (
              <div
                key={i}
                onClick={() => handleChoose(i)}
                className={`cursor-pointer w-[98%] px-3 flex gap-4 hover:bg-[#888888]/50 py-3 rounded-[5px] ${
                  currentSong === i ? "bg-[#888888]/50" : "bg-transparent"
                }`}
              >
                <Image
                  width={45}
                  height={45}
                  src={song.cover}
                  alt={song.artist}
                />
                <div className=" flex flex-col gap-1">
                  <h1 className="text-white font-bold">{song.songTitle}</h1>
                  <h1 className="text-gray-300 text-sm">{song.artist}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className={`bg-[#31363F] rounded-2xl w-full duration-300 ${
          isOpen ? "h-[150px]" : "h-[0px]"
        }`}
      ></canvas>
      <h1 className={`text-lg font-bold text-white duration-300 text-center`}>
        {playlist[currentSong].title}
      </h1>
      <audio
        ref={audioRef}
        src={playlist[currentSong].src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={() => isPlaying && audioRef.current?.play()}
      />
      <div
        className={`flex items-center w-full duration-300 z-0 relative justify-center`}
      >
        <div className={`flex items-center gap-10`}>
          <button
            onClick={handlePrev}
            className="text-white rounded cursor-pointer font-bold"
          >
            <ArrowLeftToLine strokeWidth={3} />
          </button>
          <button
            onClick={togglePlay}
            className="text-white rounded cursor-pointer font-bold"
          >
            {isPlaying ? <Pause strokeWidth={3} /> : <Play strokeWidth={3} />}
          </button>
          <button
            onClick={handleNext}
            className="text-white rounded cursor-pointer font-bold"
          >
            <ArrowRightToLine strokeWidth={3} />
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-white cursor-pointer duration-300 absolute right-0`}
        >
          {isOpen ? (
            <ChevronDown strokeWidth={3} />
          ) : (
            <ChevronUp strokeWidth={3} />
          )}
        </button>
      </div>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className={styles.slider}
        id="myRange"
      />

      <div className={`flex justify-between w-full mt-2 text-white`}>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default PlayList;
