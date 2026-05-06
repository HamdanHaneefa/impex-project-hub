import { useRef, useState, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

interface PortraitVideoProps {
  src: string;
  poster?: string;
}

export function PortraitVideo({ src, poster }: PortraitVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force load the first frame on mobile
    const loadThumbnail = () => {
      video.load();
      // Seek to 0.1 seconds to show first frame
      video.currentTime = 0.1;
    };

    // Load thumbnail when video metadata is loaded
    video.addEventListener("loadedmetadata", loadThumbnail);
    
    // Also try to load immediately
    if (video.readyState >= 1) {
      loadThumbnail();
    }

    return () => {
      video.removeEventListener("loadedmetadata", loadThumbnail);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      onClick={togglePlay}
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto cursor-pointer group rounded-2xl overflow-hidden shadow-elegant border border-white/10 bg-muted"
      style={{ aspectRatio: "9/16" }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => setThumbnailLoaded(true)}
        onSeeked={() => setThumbnailLoaded(true)}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Play button overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur border-2 border-white/40 flex items-center justify-center shadow-brand transition-transform group-hover:scale-110">
            <Play className="h-7 w-7 text-white ml-1" fill="white" />
          </div>
        </div>
      )}

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-black/40 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors z-10"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 text-white" />
        ) : (
          <Volume2 className="h-4 w-4 text-white" />
        )}
      </button>
    </div>
  );
}
