## Plan

1. **Remove the likely mobile crash triggers**
   - Replace the heavy animated SVG/blob layer on the home hero with a lightweight static/mobile-safe version on small screens.
   - Stop continuous SVG path morphing, blur-heavy filtered SVGs, and infinite rotate animations on mobile.

2. **Make section transitions lighter and non-overlapping**
   - Keep the desktop door growth effect, but make mobile use a simple solid overlay that unmounts cleanly after the animation.
   - Increase the section navigation lock so users cannot trigger multiple transitions faster than the animation can finish.

3. **Reduce unnecessary remount/reload pressure**
   - Remove the `AnimatePresence mode="wait"` section wrapper if it is causing old/new sections to overlap during rapid mobile swipes.
   - Ensure the intro loader remains separate from section transitions.

4. **Verify the fix**
   - Use a mobile viewport test to navigate between sections repeatedly and check for console/runtime errors or reload loops.
   - Confirm the first home loader still appears once and the section transitions remain visually smooth.