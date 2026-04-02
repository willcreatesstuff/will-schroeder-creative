# Will Schroeder Creative — Portfolio

Personal portfolio site for Will Schroeder, Principal Visual Designer.

## Structure

```
will-schroeder-creative/
├── index.html                  ← Homepage + case study grid
├── work/
│   ├── disney.html             ← Disney Parks Companion App
│   └── ...                     ← Future case studies
├── assets/
│   ├── css/
│   │   └── global.css          ← Shared styles
│   ├── js/
│   │   └── global.js           ← Shared scripts
│   └── images/
│       ├── portrait.png        ← About photo
│       ├── portfolio/          ← Case study card thumbnails
│       └── disney/             ← Disney case study images
└── README.md
```

## Local Development

Just open `index.html` in a browser — no build step needed.

For best results use a local server (avoids CORS issues with some browsers):
```
npx serve .
```
or
```
python3 -m http.server 8000
```

## Deployment

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Set custom domain in Vercel dashboard → willschroedercreative.com

Vercel auto-deploys on every push to `main`.
