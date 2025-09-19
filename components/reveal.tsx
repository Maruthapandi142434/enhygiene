"use client"

import { useEffect, useRef, useState, PropsWithChildren } from "react"
import clsx from "clsx"

interface RevealProps {
  className?: string
  as?: keyof JSX.IntrinsicElements
  delayMs?: number
  style?: React.CSSProperties
}

export default function Reveal({ className, as: Tag = "div", delayMs = 0, style, children }: PropsWithChildren<RevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger via delay
            const timeout = setTimeout(() => setVisible(true), delayMs)
            return () => clearTimeout(timeout)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delayMs])

  return (
    <Tag
      ref={ref as any}
      className={clsx(
        "transition-all duration-700 ease-out will-change-transform will-change-opacity",
        // Zoom out to zoom in effect
        visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3",
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  )
}
