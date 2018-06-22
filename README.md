# handbooker-sample-project

[![npm version](https://badge.fury.io/js/handbooker.svg)](https://badge.fury.io/js/handbooker)

With this sample project you can generate Player's Handbook-style documents from Markdown, using [Handbooker](https://github.com/monolith-games/handbooker).

## Getting started

1. Clone this repo
2. Edit and rename `example-document.md`, or add your own markdown document
3. Change create the `target` and `destination` paths in `createRulebooks.js` (if necessary)
4. `npm install`
5. `npm run build`

## Why not just use [Homebrewery](www.homebrewery.com)?

Homebrewery is a fantastic tool, and this project wouldn't be possible without their fantastic stylesheet. However, Homebrewery doesn't make collaboration and tracking changes to your document easy. If you're just working alone, and you're not used to working with git, npm, or Markdown, this is not the tool for you.

## Combining multiple documents

Handbooker will soon allow you to combine an ordered array of files into a single document.