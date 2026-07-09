Add a new "Quick actions" chip row below the existing "Suggested topics" section in the homepage chat card (`src/components/hero/ChatCard.tsx`), styled identically to the topic chips.

Planned implementation:

1. Add a `Link` import from `@tanstack/react-router`.
2. Add a new `ACTIONS` array containing:
   - "Contact us" → `/contact` (icon: Mail)
   - "Request samples" → `/samples` (icon: Package)
   - "Design support" → `/design-services` (icon: Compass)
   - "Get a quote" → `/contact` (icon: FileText)
3. Insert a second divider and a new section below the suggested topics row with the eyebrow label "Quick actions".
4. Render the CTA chips in the same pill style (`rounded-full border border-copper-light/35 bg-canvas px-... text-... hover:border-copper hover:bg-copper-light/15 hover:text-copper-deep`) using `Link` instead of `motion.button`, so they navigate to the target pages.
5. Keep the same staggered entrance animation timing so the new chips appear after the topic chips.

No new routes or dependencies are required; this uses existing pages and Lucide icons already available in the project.