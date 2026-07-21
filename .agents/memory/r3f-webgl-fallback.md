---
name: React Three Fiber Canvas needs a WebGL guard
description: A WebGL context-creation failure inside a react-three-fiber <Canvas> throws synchronously and is not caught by a page-level React ErrorBoundary in the same way a render error is — it can surface as an unhandled overlay/crash instead of a graceful degrade.
---

When a design/build includes a react-three-fiber `<Canvas>` scene (e.g. a hero 3D
centerpiece), always:

1. Feature-detect WebGL availability before mounting `<Canvas>` (try creating a
   `webgl`/`webgl2` context on a throwaway `<canvas>`).
2. Wrap `<Canvas>` in its own local class-based error boundary (not just the
   app-level one), with a lightweight static fallback UI.
3. Reuse the same fallback UI for `prefers-reduced-motion` and for
   WebGL-unavailable environments.

**Why:** Headless/sandboxed browsers (screenshot tooling, some CI, GPU-disabled
environments) fail `new THREE.WebGLRenderer()` context creation. Without a guard,
this produces a full-page crash/dev-overlay instead of the "mobile/no-GPU
fallback" the product spec asked for, even though the surrounding page markup
is otherwise fine.

**How to apply:** Any time a design subagent adds a `<Canvas>` (react-three-fiber)
as a hero/centerpiece visual, verify after the build that a WebGL-unavailable
environment still renders the page without console errors — don't just trust the
subagent's own "graceful fallback" claim.
