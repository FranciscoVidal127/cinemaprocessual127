interface YouTubeEmbedProps {
  url: string
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?/]+)/)
  return match ? match[1] : null
}

export default function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  const videoId = getYouTubeId(url)
  if (!videoId) return null

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[var(--color-surface-elevated)]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
