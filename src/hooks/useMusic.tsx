import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";
import { useState as useClientState } from "react";
import { TRACKS, type Track } from "@/components/site/data";

interface MusicContextType {
  currentTrack: Track | undefined;
  playing: boolean;
  currentTime: number;
  duration: number;
  togglePlayPause: () => void;
  handleTrackSelect: (track: Track) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSeek: (time: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

function MusicProviderInner({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | undefined>();
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasAutoStarted = useRef(false);
  const pendingAutoPlay = useRef(false);

  const tracksWithAudio = TRACKS.filter((track) => track.audioUrl);
  const baaweTrack = TRACKS.find((track) => track.title === "Baawe");
  const activeTrack = currentTrack || baaweTrack || tracksWithAudio[0];

  // Load Baawe on mount, seek to 0:10, attempt autoplay
  useEffect(() => {
    const track = baaweTrack || tracksWithAudio[0];
    if (!track?.audioUrl || !audioRef.current) return;

    const audio = audioRef.current;
    audio.src = track.audioUrl;
    audio.load();
    setCurrentTrack(track);

    const tryAutoPlay = () => {
      audio.currentTime = 10;

      audio
        .play()
        .then(() => {
          setPlaying(true);
          hasAutoStarted.current = true;
          pendingAutoPlay.current = false;
        })
        .catch(() => {
          // Browser blocked autoplay — play on first user interaction
          pendingAutoPlay.current = true;
        });
    };

    // canplay fires earlier than canplaythrough — more reliable for autoplay
    const onCanPlay = () => {
      audio.removeEventListener("canplay", onCanPlay);
      tryAutoPlay();
    };

    // If audio is already ready (cached), fire immediately
    if (audio.readyState >= 3) {
      tryAutoPlay();
    } else {
      audio.addEventListener("canplay", onCanPlay);
    }

    return () => audio.removeEventListener("canplay", onCanPlay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // On first user interaction anywhere on the page, trigger pending autoplay
  useEffect(() => {
    const tryPlay = () => {
      if (!pendingAutoPlay.current || hasAutoStarted.current) return;
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
          hasAutoStarted.current = true;
          pendingAutoPlay.current = false;
        })
        .catch(() => {});
    };

    const events = ["click", "keydown", "touchstart", "scroll"];
    events.forEach((ev) =>
      window.addEventListener(ev, tryPlay, { once: true, passive: true })
    );
    return () =>
      events.forEach((ev) => window.removeEventListener(ev, tryPlay));
  }, []);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setPlaying(false);
      setCurrentTrack((prev) => {
        const idx = tracksWithAudio.findIndex(
          (t) => t === (prev || baaweTrack)
        );
        return tracksWithAudio[(idx + 1) % tracksWithAudio.length];
      });
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current || !activeTrack?.audioUrl) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const handleTrackSelect = (track: Track) => {
    if (!track.audioUrl || !audioRef.current) return;
    const audio = audioRef.current;
    audio.src = track.audioUrl;
    audio.load();
    setCurrentTrack(track);
    setCurrentTime(0);
    setDuration(0);
    setPlaying(false);
    
    // Wait for audio to be ready before playing
    const onCanPlay = () => {
      audio.removeEventListener("canplay", onCanPlay);
      audio.play().then(() => setPlaying(true)).catch(() => {});
    };
    
    audio.addEventListener("canplay", onCanPlay);
  };

  const handleNext = () => {
    const idx = tracksWithAudio.findIndex((t) => t === activeTrack);
    handleTrackSelect(tracksWithAudio[(idx + 1) % tracksWithAudio.length]);
  };

  const handlePrevious = () => {
    const idx = tracksWithAudio.findIndex((t) => t === activeTrack);
    handleTrackSelect(
      tracksWithAudio[idx > 0 ? idx - 1 : tracksWithAudio.length - 1]
    );
  };

  const handleSeek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <MusicContext.Provider
      value={{
        currentTrack: activeTrack,
        playing,
        currentTime,
        duration,
        togglePlayPause,
        handleTrackSelect,
        handleNext,
        handlePrevious,
        handleSeek,
      }}
    >
      {children}
      <audio ref={audioRef} />
    </MusicContext.Provider>
  );
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    // Return a placeholder during SSR
    return <>{children}</>;
  }
  
  return <MusicProviderInner>{children}</MusicProviderInner>;
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) {
    // Return a safe default instead of throwing an error
    return {
      currentTrack: undefined,
      playing: false,
      currentTime: 0,
      duration: 0,
      togglePlayPause: () => {},
      handleTrackSelect: () => {},
      handleNext: () => {},
      handlePrevious: () => {},
      handleSeek: () => {},
    };
  }
  return ctx;
}