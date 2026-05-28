
# GitUpload

> **Zero-dependency, single-file ZIP → GitHub deployer**

Drop a ZIP. Watch it fly to your repo. No Node, no CLI, no build step — just open `gitupload.html` in a browser.

---

## Features

- 📦 **In-memory unzip** — ZIP is extracted entirely in the browser via JSZip; nothing touches your disk
- ☁️ **Direct GitHub upload** — uses the GitHub Contents API to PUT each file individually
- ✏️ **Overwrite existing files** — automatically fetches the current file SHA and replaces it
- 💾 **Persistent settings** — GitHub credentials are saved to `localStorage` so they survive page reloads
- 📊 **Live progress UI** — animated progress bar, per-file mini-bar, and a `%complete` counter
- ✕ **Cancel button** — abort mid-upload cleanly between files
- 📋 **Upload log** — timestamped, editable textarea that records every uploaded file and any errors

---

## Requirements

- A modern browser (Chrome, Firefox, Edge, Safari)
- A GitHub **Personal Access Token** with `repo` scope
- A target GitHub repository (public or private)

---

## Quick Start

1. **Download** `gitupload.html`
2. **Open** it in your browser (double-click or `File → Open`)
3. **Configure** your GitHub settings (one time):
   - **Token** — your GitHub PAT (`ghp_…`)
   - **Owner** — your GitHub username or organisation name
   - **Repository** — the repo name (not the full URL)
   - **Branch** — target branch (defaults to `main`)
4. Click **Save Settings**
5. Optionally enter a **Repo path** prefix (e.g. `dist/` or `src/assets/`) — leave blank to upload to the repo root
6. **Drop a ZIP file** onto the drop zone or click to browse
7. Click **▲ Upload to GitHub**

---

## GitHub Token Setup

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Click **Generate new token**
3. Give it a descriptive name (e.g. `gitupload`)
4. Select the **`repo`** scope (full control of private repositories)
5. Click **Generate token** and copy it immediately — GitHub only shows it once

> ⚠️ Your token is stored in your browser's `localStorage`. Never share the HTML file after saving credentials, and clear settings before passing the file to anyone else.

---

## Repo Path Prefix

The optional **Repo path** field lets you nest uploaded files under a subfolder:

| ZIP contains | Repo path | Uploaded as |
|---|---|---|
| `index.html` | *(empty)* | `index.html` |
| `index.html` | `dist/` | `dist/index.html` |
| `assets/logo.png` | `public/` | `public/assets/logo.png` |

---

## How It Works

```
ZIP file (browser memory)
    │
    ▼
JSZip.loadAsync()          — unzips entirely in RAM
    │
    ▼
For each file entry:
    │
    ├─ GET /repos/:owner/:repo/contents/:path   — fetch existing SHA (if any)
    │
    └─ PUT /repos/:owner/:repo/contents/:path   — create or overwrite file
           body: { message, content (base64), branch, sha? }
```

Files are uploaded **sequentially** (one at a time) to avoid GitHub API rate limits. The progress bar advances after each successful PUT.

---

## Cancelling an Upload

Click the **✕ Cancel** button at any time. The current file finishes uploading, then the process stops cleanly. Files already uploaded remain in the repo.

---

## Limitations

| Item | Detail |
|---|---|
| File size | GitHub's Contents API has a **1 MB per-file limit**. Larger files require the Git Data API (not currently supported). |
| Rate limits | GitHub allows ~5,000 API requests/hour on authenticated tokens. Each file costs 2 requests (GET + PUT). |
| Binary files | Fully supported — JSZip reads all entries as base64. |
| Nested folders | Fully supported — folder structure inside the ZIP is preserved. |
| Private repos | Fully supported with a `repo`-scoped token. |

---

## File Structure

```
gitupload.html    ← the entire app; no other files needed
README.md         ← this file
```

---

## Dependencies (CDN, no install)

| Library | Version | Purpose |
|---|---|---|
| [JSZip](https://stuk.github.io/jszip/) | 3.10.1 | In-browser ZIP extraction |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | — | Monospace UI font |
| [Syne](https://fonts.google.com/specimen/Syne) | — | Display / heading font |

Both fonts are loaded from Google Fonts. JSZip is loaded from cdnjs. An internet connection is required on first load; after that the browser cache handles it.

---

## Security Notes

- Your token is stored in **`localStorage`** under the key `gitupload_settings`. This is scoped to the file's origin and not accessible by other sites.
- The app makes requests **directly from your browser to `api.github.com`** — no proxy, no server, no third party ever sees your token.
- Click **Clear** in the Settings panel before sharing your machine or the HTML file.

---

## License

MIT — do whatever you like with it.


## prompt
'''
As a senior web developer 
Create a single page web app
Named gitupload.
Save locally the github settings needed to upload to a repo.
Gui allows you to locate a local zip file and unzip it in memory and upload every file found to github repository. Overright any existing files in github.
Gui should display the file being uploaded with a progress bar across the screen. 

When done the file is added to bottom of the list of uploaded files which visible in an editable text area on the screen.

Gui mainins a %complete number at the top right of the display. 

Add a cancel button to abort the upload.
'''
