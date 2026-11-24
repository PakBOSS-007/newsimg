# The World — 24 November 2026

A front-page poster summing up the world's news of **Tuesday, 24 November 2026**, for the make.fun bounty [Sum up 24 November's world news in one image](https://make.fun/bounty/news-image-20261124).

## The image

`entry.png` (1024×1024, ~110 KB) is a newspaper front page with six stories from that day, each verified against the day's reporting:

1. **Markets, United States** — Nvidia shares jump 31% as Jensen Huang returns; the S&P 500 rose 4.7% and the Nasdaq 6.5%.
2. **Conflict, Libya** — Ukraine says it sank the Russian corvette Merkury off Benghazi with naval drones.
3. **Space, NATO** — NATO vows to defend space after reports of a Russian nuclear-armed satellite.
4. **Middle East, Energy** — Iran says three tankers hit mines in the Strait of Hormuz.
5. **Climate, United Nations** — the COP31 climate summit ends with no deal on fossil fuels.
6. **Disaster, Indonesia** — a factory fire in Banten kills 26, with dozens missing.

The date it sums up is printed in the masthead and the footer, so the image names its day.

## How it is built

`draw_poster.py` renders `entry.png` with PIL and the Liberation fonts (the build tool, run on the author's machine — it is not run in the grader's sandbox). `main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`; the copy is byte-identical on every run, with no network and no model calls.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
