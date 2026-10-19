"use client"

import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { useState } from "react"
import { cn } from "cn"

export type FolderItem = {
  iconSrc: string,
  label: string,
  url?: string,
}

function AppTile({ item, layoutId, className }: { item: FolderItem, layoutId?: string, className?: string }) {
    const { iconSrc, label } = item
    const variants = {
        shown: { x: 0, y: 0, scale: 1 },
        hidden: { x: -500, y: -200, scale: 0 }

    }
    return (
        <motion.img
            variants={!!layoutId ? undefined : variants}
            initial="hidden"
            exit="hidden"
            animate="shown"
            className={cn("size-full rounded-xl p-2 bg-slate-100", className)}
            src={iconSrc}
            alt={label}
            aria-label={label}
            layoutId={layoutId}
            draggable={false}
            layoutAnchor={{ x: 0, y: 0 }}
        />
    )
}

export default function SkillFolder({ title = "Creator Studio", items = [] }: { title: string, items: FolderItem[] }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <MotionConfig
            transition={{ type: "spring", stiffness: 200, damping: 22, bounce: 0 }}
        >
            <div id="example" className="border border-red-600 m-4">
                <AnimatePresence mode="popLayout" initial={false}>
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            className="closed-root flex flex-col gap-4 items-center"
                            onClick={() => setIsOpen(true)}
                        >
                            <div className="folder-preview">
                                <div className="folder-grid grid grid-cols-2 grid-rows-2 gap-4 w-50">
                                    { items.slice(0, 3).map((item, i) => 
                                        <AppTile item={item} layoutId={"" + i} />
                                    )}
                                    <div className="grid grid-cols-2 grid-rows-2 gap-3">
                                      {items.slice(3, 7).map((item, i) =>
                                        <AppTile item={item} layoutId={"" + (i + 3)} className="rounded-md p-1.5" />
                                      )}
                                    </div>
                                </div>
                            </div>
                            <motion.div className="folder-name" layoutId="title">{title}</motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            className="open-overlay absolute w-dvw h-dvh top-0 left-0 flex items-center justify-center border"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="open-folder flex flex-col justify-center items-center gap-8">
                                <motion.div className="open-title text-2xl" layoutId="title">{title}</motion.div>
                                <div className="open-grid grid grid-cols-4 w-200 gap-8">
                                    { items.map((item, i) => 
                                        <AppTile item={item} layoutId={i <= 6 ? "" + i : undefined} />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Stylesheet />
        </MotionConfig>
    )
}

function Stylesheet() {
    return (
        <style>
            {/** Copy styles from example source code */}
        </style>
    )
}
