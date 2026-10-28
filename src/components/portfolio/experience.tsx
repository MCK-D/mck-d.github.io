import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  X,
} from "lucide-react"
import { Popover } from "@base-ui/react/popover"
import { timeline } from "../../data/portfolio"
import { useTimeline } from "../../hooks/use-timeline"
import { Reveal } from "./reveal"

export function Experience() {
  const {
    sectionRef,
    trackRef,
    active,
    paused,
    setPaused,
    detail,
    setDetail,
    interact,
    goTo,
  } = useTimeline(timeline.length)
  return (
    <section
      ref={sectionRef}
      id="experience"
      className="experience section-pad"
      aria-labelledby="experience-title"
      onPointerDown={interact}
      onPointerMove={interact}
      onKeyDown={interact}
      onFocusCapture={interact}
    >
      <div className="timeline-heading">
        <Reveal>
          <h2 id="experience-title">
            Learning
            <br />
            by building.
          </h2>
        </Reveal>
        <div>
          <p>
            Teams I’ve joined. Places I’ve learned.
            <br />A journey through work and education.
          </p>
          <span>Swipe through. Explore each stop.</span>
        </div>
      </div>
      <div className="timeline-stage">
        <div className="timeline-rail" aria-hidden="true" />
        <div
          ref={trackRef}
          className="timeline-track"
          role="region"
          aria-roledescription="carousel"
          aria-label="Experience timeline"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return
            if (event.key === "ArrowRight") {
              event.preventDefault()
              goTo((active + 1) % timeline.length)
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault()
              goTo(Math.max(active - 1, 0))
            }
            if (event.key === "Home") {
              event.preventDefault()
              goTo(0)
            }
            if (event.key === "End") {
              event.preventDefault()
              goTo(timeline.length - 1)
            }
          }}
        >
          {timeline.map((event, index) => (
            <article
              className="timeline-event"
              data-active={active === index}
              key={event.id}
              aria-label={`${index + 1} of ${timeline.length}: ${event.title}`}
            >
              <Popover.Root
                open={detail === event.id}
                onOpenChange={(open, details) => {
                  if (
                    details.reason === "trigger-press" &&
                    details.event.target instanceof Element &&
                    details.event.target.closest(".timeline-trigger")
                  ) {
                    details.cancel()
                    return
                  }
                  interact()
                  setDetail(open ? event.id : null)
                }}
              >
                <Popover.Trigger
                  className="timeline-trigger"
                  render={<div />}
                  nativeButton={false}
                  role="group"
                  tabIndex={-1}
                  openOnHover
                  delay={180}
                  closeDelay={180}
                  aria-label={`Explore ${event.title}: ${event.role}`}
                >
                  <span className="timeline-date">
                    <span className="timeline-date-label">{event.date}</span>
                    <span className="timeline-node" aria-hidden="true" />
                  </span>
                  <span className="timeline-copy">
                    <span className="timeline-kind">{event.kind}</span>
                    <span className="timeline-title">{event.title}</span>
                    <span className="timeline-role">{event.role}</span>
                    <span className="timeline-place">{event.place}</span>
                    <span className="timeline-summary">{event.summary}</span>
                  </span>
                </Popover.Trigger>
                <Popover.Trigger
                  className="timeline-detail-trigger"
                  aria-label={`Read details about ${event.title}`}
                >
                  Details <ArrowUpRight size={18} />
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Positioner
                    side="top"
                    align="start"
                    sideOffset={12}
                    collisionPadding={20}
                    className="timeline-popover-positioner"
                  >
                    <Popover.Popup
                      className="timeline-popover"
                      onPointerMove={interact}
                    >
                      <div className="timeline-popover-heading">
                        <Popover.Title>{event.title}</Popover.Title>
                        <Popover.Close aria-label="Close event details">
                          <X size={20} />
                        </Popover.Close>
                      </div>
                      <p className="timeline-detail-note">{event.note}</p>
                      <Popover.Description>{event.details}</Popover.Description>
                      <ul
                        className="tags"
                        aria-label="Subjects and technologies"
                      >
                        {event.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </Popover.Popup>
                  </Popover.Positioner>
                </Popover.Portal>
              </Popover.Root>
            </article>
          ))}
        </div>
      </div>
      <div className="timeline-controls">
        <div className="timeline-pagination" aria-label="Choose timeline event">
          {timeline.map((event, index) => (
            <button
              key={event.id}
              aria-label={`Go to ${event.title}, ${event.date}`}
              aria-current={active === index ? "step" : undefined}
              onClick={() => goTo(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <span className="timeline-count">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(timeline.length).padStart(2, "0")}
        </span>
        <button
          className="timeline-autoplay"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={16} /> : <Pause size={16} />}
          <span>{paused ? "Resume autoplay" : "Pause autoplay"}</span>
        </button>
        <div className="timeline-arrows">
          <button
            aria-label="Previous timeline event"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            <ArrowLeft />
          </button>
          <button
            aria-label="Next timeline event"
            onClick={() => goTo((active + 1) % timeline.length)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
