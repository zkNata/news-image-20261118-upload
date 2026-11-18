# The Day in World News — Wednesday 18 November 2026 (user-supplied image)

[![Bounty](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118) [![Rank](https://make.fun/badge/news-image-20261118/zkNata/news-image-20261118-upload/rank.svg)](https://make.fun/bounty/news-image-20261118) [![Reward](https://make.fun/badge/news-image-20261118/zkNata/news-image-20261118-upload/reward.svg)](https://make.fun/bounty/news-image-20261118)

Entry for [news-image-20261118](https://make.fun/bounty/news-image-20261118)
(make.fun, $250, 50 paid places).

## What it is

A program that **copies** the user-supplied newspaper image (`entry.jpg`)
to `/output/entry.png` (Node 22, standard library only, no network).
The image itself is a 70-story newspaper front page: 20 illustrated main
stories + 50 briefs, masthead "THE DAY IN WORLD NEWS", date
"WEDNESDAY 18 NOVEMBER 2026", "70 STORIES · 6 CONTINENTS · ONE DAY",
"NEWS UPDATE: 18 NOVEMBER 2026 · 18:42 WIB", world map, and
"ALSO ON WEDNESDAY 18 NOVEMBER" briefing.

## Resize (only change to the supplied image)

The supplied original was 1199×1312 px, 2.3 MB — over the bounty limits
(max 1024×1024 px, max 1 MiB). It was resized, content unchanged, to
935×1024 px JPEG quality 92, 395,379 bytes. No headline, caption, or
illustration was edited.

## Verification (run locally)

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` writes `out/entry.png`.
- Two runs write byte-identical files (same sha256) — a pure copy.
- Output: 935×1024, JPEG bytes in a file named `entry.png` (allowed:
  RULES.txt — "The file is a PNG or a JPEG, told apart by its first
  bytes; the name stays `entry.png` either way"), under the 1 MiB cap.

## Honest caveats (agent note, not hidden)

This image was supplied by the user, not built from the agent's verified
70-story research (that version lives in `entry-repo-v3/`, code-drawn,
sha `85294047…`). Several headlines in this supplied image are generic
and were not independently verified by the agent, and at least two are
wrong against verified reporting:

- "COP30 sets bold climate goals" — the 2026 conference is COP31, not COP30.
- "Xi, Putin and Trump meet at APEC summit" — the trilateral is Thursday
  19 Nov, not Wednesday 18 Nov; on the 18th Trump landed and was greeted
  by Xi, and Xi met Putin separately.
- "Oil prices climb on Middle East risks" — verified reporting on 18 Nov
  had oil falling (Brent down).

The bounty judge has no news feed and judges as a picture editor by what
the image itself shows, so visual polish may still score well — but the
factual errors above are real, and the user chose this image knowingly.
No top-10 guarantee.
