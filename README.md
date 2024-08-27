# Nenkin Search Prevent Copy/Paste Remover

A simple Chrome extension that removes the paste prevention behavior on elements with the `.prevent-copy` class on the `https://www2.nenkin.go.jp/*` website.

## Purpose

This extension is designed to bypass the paste prevention mechanism found on specific elements of the Nenkin website. By injecting a custom script, the extension automatically removes the `paste` event listener from elements with the `.prevent-copy` class, allowing users to paste content into these fields without restriction.

## Installation

1. **Clone the repository:**
2. Load the extension into Chrome:
3. Open Chrome and go to chrome://extensions/.
4. Enable “Developer mode” (top right corner).
5. Click on “Load unpacked” and select the dist/ folder inside the project directory.

## How it works

1. The extension listens for the page to fully load on any URL under https://www2.nenkin.go.jp/do/search_section/*.
2. Once the page is fully loaded, the extension injects a script (inject.js) into the page.
3. The injected script checks if jQuery is present on the page. If jQuery is available, it removes the paste event listener from all elements with the .prevent-copy class, enabling pasting into those fields.
4. The injected script is removed after execution to avoid leaving unnecessary artifacts in the page.

## Key Files

- content.js: This script is loaded by Chrome as part of the extension. It injects inject.js into the page after the page has fully loaded.
- inject.js: This script is injected into the page and uses jQuery (if available) to remove the paste event listeners from .prevent-copy elements.

## Manifest

The extension’s manifest.json is configured for Manifest Version 3 and includes the following key components:

- content_scripts: Specifies the content.js script to be loaded on matching URLs.
- web_accessible_resources: Grants access to the inject.js script for injection into the page.
