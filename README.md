# The Day in World News — Wednesday 18 November 2026 (v3, 70 stories)

[![Bounty](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118) [![Rank](https://make.fun/badge/news-image-20261118/zkNata/news-image-20261118-upload/rank.svg)](https://make.fun/bounty/news-image-20261118) [![Reward](https://make.fun/badge/news-image-20261118/zkNata/news-image-20261118-upload/reward.svg)](https://make.fun/bounty/news-image-20261118)

Entry for [news-image-20261118](https://make.fun/bounty/news-image-20261118)
(make.fun, $250, 50 paid places; deadline 20 Nov 2026 00:00 UTC / 07:00 WIB).
This is v3 — a NEW folder, never overwriting v2 (`../entry-repo/`).

## What it is

A program that **draws** its image at runtime (Node 22, standard library
only, no network, no clock, no randomness): a 1024×1024 newspaper front
page in the style of the user-supplied reference (45-story edition).
Masthead `THE DAY IN WORLD NEWS` / `WEDNESDAY 18 NOVEMBER 2026` /
`70 STORIES - 6 CONTINENTS - ONE DAY` / `NEWS UPDATE: 18 NOVEMBER 2026 -
18:42 WIB`, a multicolour divider, 20 main panels (4×5 grid, each with a
category label, number badge, small geometric icon drawn in code, headline
and 2–3 line caption), a simplified world map with numbered markers 1–20,
and 50 numbered briefs under `ALSO ON WEDNESDAY 18 NOVEMBER`.

The image is rendered by hand: a pixel framebuffer, a 5×7 bitmap font, and
a from-scratch PNG encoder (zlib deflate + CRC32), reusing the v2 Canvas /
font / encoder code. Text is drawn from a bitmap font on purpose: it can
never come out garbled the way AI-generated text does — exactly what this
contest's judge penalises under "craft".

## The 70 stories (cutoff 18 Nov 2026 18:42 WIB)

Source of truth: `../analysis/news-70-v3.md`. Main stories:

| # | Story |
|---|---|
| 1 | GULF ON EDGE — Kuwait, Bahrain intercepted Iranian drones Wed; Iran claims Patriot hit, Kuwait confirms only interception |
| 2 | APEC IN SHENZHEN — Xi greets Trump on tarmac; Xi urges free trade and AI cooperation; trilateral Thu |
| 3 | ALASKA SENATE FLIP — Peltola projected to win; Democrats projected 56–44 majority, ninth flip |
| 4 | RUSSIA'S 141 DRONES — 141 fired overnight, Ukraine downs 126; 5 killed, 15 hurt |
| 5 | KERCH BRIDGE FALLS — road arch falls into sea; 2 killed; road shut, rail partly back |
| 6 | GAZA TRUCE AT RISK — Board of Peace warns UN Gaza truce may collapse |
| 7 | CYCLONE AKVAN — severe; landfall Narsapur–Puri Nov 20; winds 100–110 km/h; red warning |
| 8 | XAVIER CAT 5 STORM — Category 5 near Cook Islands; winds ~220 km/h |
| 9 | UK INFLATION 3.6% — highest in a year; diesel record high (ONS) |
| 10 | BI HIKES RATE TO 6% — Bank Indonesia defends rupiah; record low 18,285/USD Tue |
| 11 | NVIDIA $115.8BN — record quarter; board rejects Huang return as CEO |
| 12 | VOYAGER 1 LIGHT-DAY — first human object one light-day away; ~16bn miles |
| 13 | EBOLA PASSES 11,000 — Congo cases pass 11,000; WHO backs two vaccine trials |
| 14 | AMNESTY: 37 KILLED — RSF drone strikes killed 37 civilians in El Obeid |
| 15 | AUSTRALIA SANCTIONS — settler leader Daniella Weiss; 3 people, 4 groups |
| 16 | BANGLADESH GARMENT — protests shut factories; workers seek Tk30,000 wage |
| 17 | GTA VI ROLLOUT — rollout begins in New Zealand; global release Thu 19 Nov |
| 18 | SUPERBUG WARNING — Europe off track on antibiotic resistance (ECDC) |
| 19 | COP31 DEADLOCK — talks deadlocked on fossil fuels and finance |
| 20 | US OUTAGE WAVE — tech outage wave reaches NSA; Trump plays down fears |

Briefs 21–70 are in `main.ts` (`BRIEFS`, one line each). Count audit:
20 mains + 50 briefs = 70.

## Duplicate fixes applied (vs `news-70-v3.md`)

- Brief 49: NSA outage **duplicated main 20** → replaced with
  "Canada announces C$155m Ukraine aid package".
- Brief 66: oil down **duplicated brief 36** (Brent) → replaced with
  "GTA VI leads Game Awards with 8 nominations", then replaced again
  (overlap with main 17 caption) with "UK and EU set out food trade
  deal ahead of summit".
- Brief 53: Patriot-hit claim **duplicated main 1** → replaced with
  "Hegseth to visit Colombia to deliver C-130".
- Brief 38: already replaced in the source file (Cyclone Xavier, duplicate
  of main 8) with "Nvidia stops H200 AI chip shipments to China" — kept.
- Brief 60: already replaced in the source file (South Africa inflation,
  duplicate of brief 50) with "Nigeria: Tinubu approves Tsamiya dry port
  operation" — kept.
- Brief 61: already replaced in the source file (H200, now at 38) with
  "Rupiah: banks sell dollars above Rp18,400 Wed" — kept.
- Six briefs were shortened by a few words to fit one 332 px line
  (29, 31, 55, 56, 63, 68); facts unchanged.
- Never used: "75 countries", "55 factories", "5 tankers sunk", any
  Peltola vote count (56–44 is the projected Senate split, not her votes).

## Icon revision (18 Nov ~19:10 WIB, user: "berita dan gambar harus relevan")
Captions unchanged; only icons + 4 headlines changed so each picture
matches its story:
- #2 APEC: globe → `iconPlaneLanding` (plane landing on runway, two
  flags) — Xi greets Trump on the tarmac. Old `iconGlobe` removed.
- #6 Gaza truce: shield + check → `iconCrackedDoc` (cracked page, red
  "!" badge) — truce may collapse, not secured. Old `iconShield` removed.
- #12 Voyager 1: rocket → `iconProbe` (box body, dish antenna, boom,
  stars) — a deep-space probe, not a launch. Old `iconRocket` removed.
- #16 Bangladesh garment: shirt → shirt + small placard on a stick, so
  the protest reads.
- #19 COP31: globe + leaf → same + thick red diagonal slash (deadlock).
- #20 US outage: lone bolt → `iconOutage` (monitor with red X + small
  bolt) — systems down, not just electricity. Old `iconBolt` removed.
- Headlines shortened to one line, no orphan word on line 2 (captions
  unchanged): #4 "RUSSIA FIRES 141 DRONES" → "RUSSIA'S 141 DRONES";
  #8 "CYCLONE XAVIER CAT 5" → "XAVIER CAT 5 STORM"; #11 "NVIDIA RECORD
  $115.8BN" → "NVIDIA $115.8BN"; #17 "GTA VI ROLLOUT BEGINS" → "GTA VI
  ROLLOUT". All 20 headlines are now single-line.

## Verification (run locally)

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` writes `out/entry.png`.
- Two runs write byte-identical files (same sha256) — no clock, no
  randomness. v3: sha256
  `85294047c0e2c5b751d2481987124bc695efa8688a92e1ff8a6f05a6ec4abf85`,
  51,147 bytes, 1024×1024, valid PNG (signature + IHDR checked).
  (After the icon revision; previous sha d85dc347…, 51,276 bytes.)
- Audit script (counts, headline ≤2 lines, caption ≤3 lines, brief width
  ≤332 px, distinctness, forbidden strings): ALL PASS.
- Preview checked at full size (`../analysis/entry-preview-v3.png`):
  masthead, all 20 panels, map + legend, all 50 briefs present, no
  overlaps, no text outside panels. See "Honest caveats".

## Honest caveats

- Briefs 21–52 are the reference briefs as transcribed in `news-70-v3.md`;
  per that file they were NOT independently re-verified one-by-one — the
  footer of the reference claims they were reported 18 Nov. That limit is
  inherited, not fixed, by v3.
- Near-duplicates flagged by the builder were fixed 18 Nov ~19:00 WIB:
  brief 53 and brief 66 replaced (see above); re-run 2x byte-identical,
  new sha256 d85dc347… (51,276 bytes).
- Map markers 12 (Voyager 1, deep space) and 19 (COP31, venue not
  specified in the sources) have no earth location: 12 is starred in the
  map corner and both are explained in the legend — never placed at an
  invented location.
- At 1024 px, brief text is 7 px tall: legible at full size, dense at
  thumbnail. Headlines and numbers stay readable small; captions do not.
  The source file warned about this; v3 does not claim thumbnail-perfect
  readability.
- Icon legibility (checked on the new preview, full size): cracked doc
  (#6) and dead screen (#20) read clearly; probe dish (#12) and COP31
  red slash (#19) read clearly; plane (#2) reads as a landing plane
  but its two flags are very small; Bangladesh placard (#16) reads on
  close look, the shirt still dominates. All icons are ~34 px, so none
  of them is thumbnail-crisp — the same density limit as the briefs.
- No top-10 guarantee: this is an AI-judged image contest; provisional
  rates never count in the final heat, which re-judges every entry afresh
  after the deadline. v2's provisional E 96.9381% (11-0-1) says nothing
  about v3.
- NOT submitted, NOT signed, NOT claimed. Transcript bundle + submit need
  the user's explicit approval and the user-side signing step.
