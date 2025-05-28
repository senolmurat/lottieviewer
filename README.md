# Lottie Viewer

Initially made as an internal tool to browse and match the lottie animation files between iOS and Android teams and I decided to share it.

A minimalist web application to browse, search, and preview Lottie animations stored in your project. The app provides a streamlined search experience, hover and autoplay modes, and easy download for each animation.

<img src="https://github.com/senolmurat/lottieviewer/blob/main/resources/demo.gif" width="540" height="239" />

Try it on [github.io](https://senolmurat.github.io/lottieviewer/)

## Features
- Responsive web UI built with HTML and Tailwind CSS
- Search and filter Lottie animations by file name
- Switch between autoplay and play-on-hover for previews
- Download any Lottie animation as a JSON file
- Animations are automatically discovered from the `lotties/` folder (no hardcoded list)

## How It Works
- All `.json` files in the `lotties/` directory are considered Lottie animations.
- A manifest (`manifest.json`) is generated automatically before serving or building the site, listing all available Lottie files.
- The frontend fetches this manifest to display and search animations.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (for manifest generation and local server)

### Installation & Usage
1. **Clone the repository:**
2. **Add your Lottie JSON files:**
   Place your `.json` Lottie files in the `lotties/` directory.
3. **Start the server:**
   ```sh
   npm start
   ```
   This will:
   - Automatically generate or update `/manifest.json` with all Lottie files in the folder
   - Serve the site locally (default: http://localhost:3000 or as shown in your terminal)

### Scripts
- `npm start` — Runs the static server and updates the manifest
- `npm run build` — (No build step by default, but will update the manifest)
- `node generate_manifest.js` — Manually regenerate the manifest if needed - or run as prestart/prebuild script

## Project Structure
```
/ (project root)
  |-- lotties/              # Place your Lottie .json files here
  |-- manifest.json         # Auto-generated list of Lottie files
  |-- index.html            # Main app UI
  |-- generate_manifest.js  # Script to generate manifest.json
  |-- package.json          # NPM scripts
  |-- LICENSE
  |-- README.md
```

## Tech Stack
- HTML, Tailwind CSS
- [Lottie Player Web Component](https://github.com/LottieFiles/lottie-player)
- Node.js (for manifest generation)

## License
MIT License — see [LICENSE](LICENSE) for details. 
