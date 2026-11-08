'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
import type { Application } from '@splinetool/runtime'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  /** Camera zoom (1 = scene default). Below 1 zooms out so the whole robot fits. */
  zoom?: number
}

export function SplineScene({
  scene,
  className,
  zoom,
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Spline's built-in "look at mouse" behavior only reacts to pointer
    // events that land directly on its <canvas>. Anything stacked on top
    // of it (like the fixed nav bar) steals those events, so the model
    // freezes facing wherever the cursor last was before it crossed onto
    // that element. Forward every window-wide pointer move onto the
    // canvas so it keeps tracking the real cursor no matter what's
    // rendered on top of it.
    const forwardToCanvas = (event: PointerEvent) => {
      const canvas = container.querySelector('canvas')
      if (!canvas) return

      const init: MouseEventInit & PointerEventInit = {
        bubbles: true,
        cancelable: true,
        clientX: event.clientX,
        clientY: event.clientY,
        pointerId: event.pointerId,
        pointerType: event.pointerType,
      }

      canvas.dispatchEvent(new PointerEvent('pointermove', init))
      canvas.dispatchEvent(new MouseEvent('mousemove', init))
    }

    window.addEventListener('pointermove', forwardToCanvas)
    return () => window.removeEventListener('pointermove', forwardToCanvas)
  }, [])

  const handleLoad = (app: Application) => {
    if (zoom !== undefined) app.setZoom(zoom)
  }

  return (
    <div ref={containerRef} className={className}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-end justify-center pb-10">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft">loading model…</p>
          </div>
        }
      >
        <Spline
          scene={scene}
          className="w-full h-full"
          onLoad={handleLoad}
        />
      </Suspense>
    </div>
  )
}
