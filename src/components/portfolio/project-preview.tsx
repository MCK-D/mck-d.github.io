/** Replace the contents of this plain div with your own image or video. */
export function ProjectPreview({
  name,
  color,
}: {
  name: string
  color: string
}) {
  return (
    <div
      className={`project-preview preview-${color}`}
      role="img"
      aria-label={`${name} project preview placeholder`}
    />
  )
}
