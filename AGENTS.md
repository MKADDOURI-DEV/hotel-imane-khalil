<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All hotel contact data (phone, email, address, socials, booking link) lives in `src/lib/site-config.ts`; null means "not provided" and UI shows a placeholder.
- Shared page chrome (header, footer, WhatsApp button) is rendered in `__root.tsx` via `SiteLayout`; pages only render their own content.
- Each route sets its own `head()` through `seo()` in `src/lib/seo.ts`.
