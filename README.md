# ArtSpace (static site)

This repository contains a static demo site for ArtSpace. The site lives in the repository root and is published via GitHub Pages using a GitHub Actions workflow.

Preview locally:

    python3 -m http.server 8000
    open http://localhost:8000/1.1/index.html

Publish to GitHub (one-time):

1. Create an empty repository on GitHub named `artspace` (https://github.com/via-mss/artspace).
2. Add the remote and push:

    git remote add origin git@github.com:via-mss/artspace.git
    git push -u origin main

The included GitHub Actions workflow will deploy the `1.1` folder to GitHub Pages automatically on push to `main`.

Published URL (project site):

    https://via-mss.github.io/artspace/

If you want this as a user site instead, create a repo named `via-mss.github.io` and push the site to the repository root.
