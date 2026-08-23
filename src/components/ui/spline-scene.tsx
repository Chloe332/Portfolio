'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
import type { Application } from '@splinetool/runtime'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  /**
   * Name of the rig object to wave (found via `strings` on the compiled
   * .splinecode scene — this is a shoulder-level "Empty" pivot, so
   * rotating it swings the whole elbow/forearm/hand chain beneath it).
   * There's no pre-authored "wave" animation in the scene, so this is
   * done by directly driving the object's rotation frame-by-frame rather
   * than triggering a Spline-side state.
   */
  waveObjectName?: string
  /**
   * Delay before the wave starts, timed to land just after the scene's
   * built-in on-load camera zoom-out (face -> full body) finishes, plus
   * the requested 0.3s pause. The zoom-out's own duration isn't exposed
   * by the scene file, so this is an estimate — tune it after watching
   * the live page.
   */
  waveDelayMs?: number
  waveDurationMs?: number
}

export function SplineScene({
  scene,
  className,
  waveObjectName,
  waveDelayMs = 2300,
  waveDurationMs = 1000,
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
    if (!waveObjectName) return

    const arm = app.findObjectByName(waveObjectName)
    if (!arm) {
      console.warn(
        `[SplineScene] Couldn't find an object named "${waveObjectName}" to wave.`
      )
      return
    }

    const baseZ = arm.rotation.z

    window.setTimeout(() => {
      const start = performance.now()
      const cycles = 3 // back-and-forth swings

      const step = (now: number) => {
        const t = Math.min((now - start) / waveDurationMs, 1)
        // Swing side to side, easing the amplitude down to zero so the
        // arm settles back to its resting pose instead of snapping.
        const amplitude = 0.35 * (1 - t)
        arm.rotation.z = baseZ + Math.sin(t * Math.PI * cycles) * amplitude

        if (t < 1) {
          requestAnimationFrame(step)
        } else {
          arm.rotation.z = baseZ
        }
      }

      requestAnimationFrame(step)
    }, waveDelayMs)
  }

  return (
    <div ref={containerRef} className={className}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
            <div className="loader">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
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
