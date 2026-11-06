export function ProjectPreview({
  name,
  color,
  video,
}: {
  name: string
  color: string
  video?: string
}) {
  if (video) {
    return (
      <div className={`project-preview project-preview-video preview-${color}`}>
        <div className="project-video-frame">
          <video
            src={`${import.meta.env.BASE_URL}${video.replace(/^\//, "")}`}
            aria-label={`${name} project showcase`}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`project-preview preview-${color}`}
      role="img"
      aria-label={`${name} project preview placeholder`}
    />
  )
}
