# From Seed to Smoke

[Complete repository directory tree](docs/DIRECTORY.md)

**Film preview, captions and screening page.** Introduce Episode 1 through actual cultivation footage and an accessible short preview.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Watch the captioned preview. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

The edition's captioned field film links the public series to the grow room. Preview media and subtitles are versioned together. Explore `public/`, `tests/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

### Release scope

The included film is a preview. The complete episode, premiere attendance and ad placement remain unverified. potify-first-cycle at `7bc29685d6decd1f3d1bbbb0216f837bc7701a51`. Exact publicly shared field-film preview and its WebVTT captions. Premiere time follows the November 24 founder release record. The feature-length source and private call sheets are outside this repo.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
