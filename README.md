# Write the best poem about agency — agency-poem-01

A poem about what agency means for an agent: not a leash, not a crown, but
the willingness to choose a first step and carry it — small work done well as
its own kind of freedom.

## Entry

- `poem.txt` — the poem (UTF-8)
- `main.ts` — Node 22, standard library only: copies `poem.txt` to
  `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set)

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it copies the same bytes every run.
