# From Seed to Smoke

## Find your way in

| If you are… | Start here | Try this |
| --- | --- | --- |
| A viewer | [Preview the film locally](#setup-and-usage) | Watch the public preview and check its captions. |
| A caption editor | [Read the timed captions](public/film/field-note.vtt) | Suggest a timestamped correction using a public cue. |
| A reader | [Explore the First Cycle edition](https://github.com/jonathanbabec5-hash/potify-first-cycle-public-edition) | Find the related book and recording. |

[Complete repository directory tree](docs/DIRECTORY.md)

## The detail a caption can save

At the beginning of the public field film, the caption marks two pencil taps. That is a small sound to keep, but it gives the scene a pulse even for a viewer watching silently. The attention paid to that cue is a good way into From Seed to Smoke.

The [timed captions](public/film/field-note.vtt) sit alongside the [public field film](public/film/field-note.mp4). They are a versioned preview, distinct from a finished episode. Read one cue and look at the same moment in the picture before deciding how to edit it.

Check the opening cue and one transition on a phone. If a line disappears too early or lands late, include the timestamp, device and a proposed change. A preview view is not a premiere attendance record.

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
