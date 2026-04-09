

## Plan: Add Live X/Twitter Feed Section

### What
Add an embedded X (Twitter) timeline section showing tweets from `@PixelatGames` that updates in real-time (not daily — tweets appear as soon as they're posted). Uses Twitter's official client-side embed widget, no backend needed.

### Changes

1. **Create `src/components/TwitterSection.tsx`**
   - Section with heading matching site style (motion animations, dark theme)
   - Embed `<a class="twitter-timeline" href="https://x.com/PixelatGames">` with Twitter's `widgets.js`
   - Dark theme, limited height, loading skeleton
   - Bilingual support via `useLanguage()`

2. **Update `src/i18n/translations.ts`**
   - Add `twitter.title` ("Latest from X" / "آخر الأخبار من X") and `twitter.subtitle` in both languages

3. **Update `src/pages/Index.tsx`**
   - Add `<TwitterSection />` between `<GamesSection />` and `<TeamSection />`

### Technical Notes
- Twitter's embed widget fetches tweets client-side in real-time — no API keys, no caching, no daily limit. New tweets appear immediately when users load/refresh the page.
- The widget handles its own responsive layout and dark theme via data attributes.

