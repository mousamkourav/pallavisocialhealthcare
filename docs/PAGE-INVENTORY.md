# Page inventory

Screenshots supplied (6): homepage top-to-bottom (901×863, **low resolution**), homepage footer (898×150), About top (1788×876), About bottom (1788×805), Contact Us (1774×729), Events (1632×870). All were captured in the Wix editor.

The original Wix slugs were not visible in any screenshot (only the bare domain is shown), so routes below are inferred. Common Wix variants redirect permanently — see `SEO-MIGRATION.md`.

| Page | New route | Evidence | Status |
|---|---|---|---|
| Home | `/` | Homepage screenshots | Implemented — some body copy low-confidence (see gaps) |
| About Us | `/about` | Two About screenshots | Implemented — copy transcribed verbatim |
| Contact Us | `/contact` | Contact screenshot | Implemented |
| Events | `/events` | Events screenshot + event posters in archive | Implemented — Wix sample events replaced with real past events from the archive |
| 404 | (any unknown URL) | — | Implemented, `noindex` |

Not yet built (seen only as links): **Resources** menu target, **Blog** articles, programme detail pages, Privacy Policy, Terms & Conditions, Refund Policy, Accessibility Statement.

## Home `/`
Sections in original order: announcement bar → header → hero (background video, “SOCIAL HEALTHCARE SOCIETY”) → 4 impact stats → colour-block mosaic (Who We Are / photo / Partner With Us / photo + Our Mission / How You Can Help / Our Vision / photo) → “Social Healthcare Society” video → Upcoming Programs (4 cards) → Blogs (3 cards) → “Want to Attend or Volunteer at an Event?” band → newsletter form → footer.
CTAs: Donate Now, Support Us, Read More ×3 (→ `/about`), Support Us (→ `/contact#enquiry`).
SEO: title “Pallavi Social Health Care Society | Cancer Care, Awareness & Support in Bhopal”.

## About `/about`
Hero “ABOUT / Fighting Cancer with Care, Compassion & Commitment” → Mission & History → 5-photo strip → What We Do (5 items + photo) → Our Core Values (photo + 4 values) → Partners (text) → shared CTA/footer.

## Contact `/contact`
Hero “CONTACT US / Let’s Fight Cancer Together — One Message, One Volunteer, One Partnership at a Time” → Enquiry Form section (intro text, email/phone/address, form: Name, Email, Phone Number, Message, Submit) → shared CTA/footer. `#enquiry` anchor is the target of Donate Now / Support Us.

## Events `/events`
Lavender panel with “Events” heading, Upcoming/Past tabs and expandable date/title rows (matching the Wix Events widget). Upcoming shows an empty state until a future event is added in `src/data/events.ts`.

## Content gaps (owner action needed)

1. **Homepage body copy is low-confidence.** The homepage screenshot is ~25 % scale; text under ~12 px is unreadable. These blocks are marked `[LOW-RES]` in `src/data/home.ts`: hero tagline and paragraph, Who We Are, Partner With Us, How You Can Help bullets, Our Mission, Our Vision, programme card descriptions. Who We Are and the hero paragraph reuse verified About-page wording; the rest is the closest legible reading. **Please supply a full-resolution homepage screenshot or the original text.**
2. **Two different emails.** Footer shows `info@pallavihealthcare.in`; Contact page shows `support@pallavisocialhealth.org`. Neither matches the domain `pallavisocialhealthcare.in`. Both are reproduced as shown — confirm which mailboxes are live.
3. **Impact statistics** (500+, 50K+, 12+, 200) are reproduced from the screenshot; the owner should confirm they are current.
4. **Events:** the original page only contained Wix sample events. Four past events were reconstructed from posters/photos in the archive; Pallavi’s exact role in each is not stated in the sources. No upcoming events were found.
5. **Blogs:** only titles are legible; article text is missing, so cards are not linked and “View More” is omitted.
6. **Programme cards:** “Read More” targets unknown; links omitted.
7. **Partner logos:** Wix template samples on the original — omitted.
8. **Donate Now:** no payment gateway / bank details recovered → links to the enquiry form.
9. **Policy pages:** listed in the footer as plain text until content is provided.
10. **Footer credit** “Developed and managed by …” — developer name/link illegible; omitted.
11. **“Let’s Chat!” widget** — Wix chat, no replacement configured (a WhatsApp link can be added if the number is confirmed as a WhatsApp business number).
12. **Phone field country picker** from Wix replaced by a plain tel input with `+91` hint.
