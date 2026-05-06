import { useRef, useState, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

interface PortraitVideoProps {
  src: string;
  poster?: string;
}

export function PortraitVideo({ src, poster }: PortraitVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Use Intersection Observer to load video when it's near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            // Load video metadata and first frame
            video.load();
            setIsLoaded(true);
            
            // Set to first frame once metadata is loaded
            const handleLoadedMetadata = () => {
              video.currentTime = 0.1;
            };
            
            video.addEventListener("loadedmetadata", handleLoadedMetadata, { once: true });
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isLoaded]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      // Silently handle play interruption
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
      ref={containerRef}
      onClick={togglePlay}
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto cursor-pointer group rounded-2xl overflow-hidden shadow-elegant border border-white/10 bg-gradient-to-br from-muted/80 to-muted/40"
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
