"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
  useAnimate,
  usePresence,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

export type FolderApp = {
  id: string;
  label: string;
  iconSrc: string;
};

type IosAppFolderProps = {
  title?: string;
  items?: FolderApp[];
  onAppClick?: (app: FolderApp) => void;
  className?: string;
};

type Point = {
  x: number;
  y: number;
};

const layoutSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 22,
};

const iconClassName =
  "block h-16 w-16 shrink-0 select-none object-contain sm:h-16 sm:w-16";

/**
 * Icons without a preview animate from the mini-grid's center.
 * An untransformed wrapper provides reliable destination measurements.
 */
function EmergingIcon({
  app,
  containerRef,
  miniGridRef,
  originRef,
}: {
  app: FolderApp;
  containerRef: RefObject<HTMLDivElement | null>;
  miniGridRef: RefObject<HTMLSpanElement | null>;
  originRef: RefObject<Point>;
}) {
  const slotRef = useRef<HTMLSpanElement>(null);
  const [scope, animate] = useAnimate<HTMLImageElement>();
  const [isPresent, safeToRemove] = usePresence();
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const image = scope.current;
    const slot = slotRef.current?.getBoundingClientRect();
    const container = containerRef.current?.getBoundingClientRect();

    if (!image || !slot || !container) {
      if (!isPresent) safeToRemove?.();
      return;
    }

    // During exit, the closed preview has mounted again.
    const destination = !isPresent
      ? miniGridRef.current?.getBoundingClientRect()
      : undefined;

    const centerX = destination
      ? destination.left + destination.width / 2
      : container.left + originRef.current.x;

    const centerY = destination
      ? destination.top + destination.height / 2
      : container.top + originRef.current.y;

    const x = reduceMotion
      ? 0
      : centerX - (slot.left + slot.width / 2);

    const y = reduceMotion
      ? 0
      : centerY - (slot.top + slot.height / 2);

    const scale = reduceMotion ? 1 : 0.08;
    const movement = reduceMotion ? { duration: 0 } : layoutSpring;

    let cancelled = false;

    const animation = isPresent
      ? animate(
          image,
          {
            x: [x, 0],
            y: [y, 0],
            scale: [scale, 1],
            opacity: [0, 1],
          },
          {
            ...movement,
            opacity: { duration: reduceMotion ? 0 : 0.12 },
          },
        )
      : animate(
          image,
          { x, y, scale, opacity: 0 },
          {
            ...movement,
            opacity: {
              delay: reduceMotion ? 0 : 0.18,
              duration: reduceMotion ? 0 : 0.12,
            },
          },
        );

    if (!isPresent) {
      animation.then(() => {
        if (!cancelled) safeToRemove?.();
      });
    }

    return () => {
      cancelled = true;
      animation.stop();
    };
  }, [
    isPresent,
    animate,
    scope,
    safeToRemove,
    reduceMotion,
    containerRef,
    miniGridRef,
    originRef,
  ]);

  return (
    <span
      ref={slotRef}
      className="relative block h-16 w-16 shrink-0 sm:h-16 sm:w-16"
    >
      <img
        ref={scope}
        src={app.iconSrc}
        alt=""
        draggable={false}
        className="block h-full w-full select-none object-contain"
        style={{ opacity: 0, transformOrigin: "center" }}
      />
    </span>
  );
}

export default function IosAppFolder({
  title = "Creator Studio",
  items = [],
  onAppClick,
  className = "",
}: IosAppFolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [reservedHeight, setReservedHeight] = useState<number>();

  useEffect(() => setMounted(true), []);
  const reduceMotion = useReducedMotion();

  const groupId = useId();
  const titleId = useId();

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const miniGridRef = useRef<HTMLSpanElement>(null);
  const originRef = useRef<Point>({ x: 0, y: 0 });

  const largePreview = items.slice(0, 3);
  const smallPreview = items.slice(3).slice(-4);

  const previewIds = new Set(
    [...largePreview, ...smallPreview].map((app) => app.id),
  );

  const fade = { duration: reduceMotion ? 0 : 0.16 };

  function openFolder() {
    const container = containerRef.current?.getBoundingClientRect();
    const miniGrid = miniGridRef.current?.getBoundingClientRect();

    if (container && miniGrid) {
      originRef.current = {
        x: miniGrid.left + miniGrid.width / 2 - container.left,
        y: miniGrid.top + miniGrid.height / 2 - container.top,
      };
    }

    setReservedHeight(container?.height);
    setIsOpen(true);
  }


  function renderSharedIcon(app: FolderApp, className: string) {
    return (
      <motion.img
        layoutId={`icon-${app.id}`}
        src={app.iconSrc}
        alt=""
        draggable={false}
        className={`block shrink-0 select-none object-contain ${className}`}
      />
    );
  }

  return (
    <MotionConfig
      reducedMotion="user"
      transition={reduceMotion ? { duration: 0 } : layoutSpring}
    >
      <LayoutGroup id={groupId}>
        <div
          ref={containerRef}
          style={{ minHeight: reservedHeight }}
          className={`relative isolate grid w-full place-items-center
            rounded-3xl bg-slate-50 text-slate-800 ${className}`}
        >
          <AnimatePresence initial={false} mode="sync">
            {!isOpen && (
              <motion.button
                key="closed"
                ref={triggerRef}
                type="button"
                aria-label={`Open ${title} folder`}
                aria-expanded={false}
                onClick={openFolder}
                className="relative col-start-1 row-start-1 self-start flex cursor-pointer flex-col
                  items-center gap-2.5 rounded-4xl
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-blue-500 focus-visible:ring-offset-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fade}
              >
                <span
                  aria-hidden="true"
                  className="grid h-36 w-36 grid-cols-2 grid-rows-2
                    gap-2.5 rounded-4xl border border-black/5
                    bg-white p-3
                    shadow-xl shadow-black/10"
                >
                  {largePreview.map((app) => (
                    <span
                      key={app.id}
                      className="flex items-center justify-center"
                    >
                      {renderSharedIcon(app, "h-12 w-12")}
                    </span>
                  ))}

                  <span
                    ref={miniGridRef}
                    className="col-start-2 row-start-2 grid
                      grid-cols-2 grid-rows-2 gap-1"
                  >
                    {smallPreview.map((app) => (
                      <span
                        key={app.id}
                        className="flex items-center justify-center"
                      >
                        {renderSharedIcon(app, "h-8 w-8")}
                      </span>
                    ))}
                  </span>
                </span>

                <span className="text-sm font-medium">{title}</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {mounted && createPortal(
          <AnimatePresence initial={false} mode="sync">
            {isOpen && (
              <FolderOverlay
                key="open"
                title={title}
                titleId={titleId}
                triggerRef={triggerRef}
                onClose={() => setIsOpen(false)}
              >
                <div className="pointer-events-none relative m-auto w-full max-w-2xl">
                  <motion.h2
                    id={titleId}
                    className="mb-8 text-center text-xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={fade}
                  >
                    {title}
                  </motion.h2>

                  <div className="grid grid-cols-4 gap-x-3 gap-y-4 sm:gap-x-8">
                    {items.map((app) => (
                      <button
                        key={app.id}
                        type="button"
                        onClick={() => onAppClick?.(app)}
                        className="pointer-events-auto flex min-w-0
                          cursor-pointer flex-col items-center gap-2
                          rounded-xl focus-visible:outline-none
                          focus-visible:ring-2 focus-visible:ring-blue-500
                          focus-visible:ring-offset-4"
                      >
                        {previewIds.has(app.id) ? (
                          renderSharedIcon(app, iconClassName)
                        ) : (
                          <EmergingIcon
                            app={app}
                            containerRef={containerRef}
                            miniGridRef={miniGridRef}
                            originRef={originRef}
                          />
                        )}

                        <motion.span
                          className="w-full text-center text-xs
                            leading-tight sm:text-sm"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: {
                              ...fade,
                              delay: reduceMotion ? 0 : 0.1,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            transition: fade,
                          }}
                        >
                          {app.label}
                        </motion.span>
                      </button>
                    ))}
                  </div>
                </div>
              </FolderOverlay>
            )}
          </AnimatePresence>,
          document.body,
        )}
      </LayoutGroup>
    </MotionConfig>
  );
}

/** Portal content stays mounted, focused and scroll-locked through exit. */
function FolderOverlay({
  title,
  titleId,
  triggerRef,
  onClose,
  children,
}: {
  title: string;
  titleId: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  children: ReactNode;
}) {
  const overlayRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const fade = { duration: reduceMotion ? 0 : 0.18 };

  useEffect(() => {
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const padding = parseFloat(getComputedStyle(body).paddingRight) || 0;

    // Compensate for the removed scrollbar so the source folder stays put.
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${padding + scrollbarWidth}px`;
    }
    body.style.overflow = "hidden";
    overlayRef.current?.focus({ preventScroll: true });

    function containFocus(event: FocusEvent) {
      const overlay = overlayRef.current;
      if (overlay && !overlay.contains(event.target as Node)) {
        overlay.focus({ preventScroll: true });
      }
    }
    document.addEventListener("focusin", containFocus);

    return () => {
      document.removeEventListener("focusin", containFocus);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [triggerRef]);

  return (
    <motion.section
      ref={overlayRef}
      layoutRoot
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      className="fixed inset-0 z-1000 isolate text-slate-800 outline-none"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          onClose();
          return;
        }
        if (event.key !== "Tab") return;

        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        const active = document.activeElement;

        if (!first) {
          event.preventDefault();
          event.currentTarget.focus();
        } else if (event.shiftKey && (active === first || active === event.currentTarget)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (active === last || active === event.currentTarget)) {
          event.preventDefault();
          first.focus();
        }
      }}
    >
      {/* Fade the backdrop only; the icons must stay visible while returning. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-slate-50/90 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={fade}
      />

      <motion.div
        layoutScroll
        className="absolute inset-0 flex overflow-y-auto overscroll-contain px-8 py-20 sm:px-12"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        {children}
      </motion.div>

      <motion.button
        type="button"
        aria-label={`Close ${title} folder`}
        onClick={onClose}
        className="absolute right-4 top-4 z-10 grid h-12 w-12 cursor-pointer
          place-items-center rounded-full bg-white/70 text-2xl shadow-sm
          hover:bg-white focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={fade}
      >
        <span aria-hidden="true">×</span>
      </motion.button>
    </motion.section>
  );
}
