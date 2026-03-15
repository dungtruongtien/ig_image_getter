'use client'

interface VideoDisplayProps {
  videoUrl: string
  thumbnailUrl: string
  title: string
  onReset: () => void
}

export default function VideoDisplay({ videoUrl, thumbnailUrl, title, onReset }: VideoDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full overflow-hidden rounded-xl shadow-lg bg-black">
        <video
          src={videoUrl}
          poster={thumbnailUrl || undefined}
          controls
          playsInline
          className="w-full max-h-[500px]"
          aria-label={title}
        />
      </div>

      <div className="flex w-full gap-3">
        <a
          href={videoUrl}
          download="instadown-reel.mp4"
          className="flex-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:from-purple-600 hover:to-pink-600"
        >
          Download Reel
        </a>
        <button
          onClick={onReset}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50"
        >
          New Reel
        </button>
      </div>

      <p className="text-xs text-gray-600 text-center">
        Note: Instagram CDN links are time-limited. Download promptly.
      </p>
    </div>
  )
}
