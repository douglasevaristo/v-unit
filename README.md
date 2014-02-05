VUnit
======

## Viewport-relative units made easy.
`vw` and `vh` CSS units are awesome - except they're not. They are [buggy, unreliable and have inconsistent implementation among browsers](http://caniuse.com/#feat=viewport-units). `v-unit.js` offers a robust alternative for that, but keep in mind this is *not* a polyfill/shim, as it doesn't play with your CSS values.

`v-unit.js` is library/framework agnostic and weights **less than 500 bytes** once gzipped and compressed.

## [Live example](http://joaocunha.github.io/v-unit/)
Looks horrible but shows the point. A fancy one is on the way :)

## How to use (in two steps)
1. Add the `v-unit.js` file on the `head` tag before your CSS files. This helps preventing FOUC.
2. Set classes on your elements to give them a proper size. E.g. `<div class="vw25 vh40">Hi!</div>` will fill 25% of the width and 40% of the height.

You're done!

## How it works
`v-unit.js` calculates the browser viewport dimensions and creates CSS rules ranging from 1% to 100% on both `width` and `height`. These rules are then inserted into a CSS stylesheet which is appended on the fly to the `head` tag.

An observer running every 100ms checks if the viewport have been resized and regenerates the CSS rules. It is an event-less solution for browser resizing and scrollbars appearing/disappearing.

The checking itself takes ~0.003ms while the CSS rules creation takes ~2ms, both on my environment. These are no absolute numbers in any way but serves as an initial performance reference.

## TODO
- Reset the observer after X seconds for browsers with poor garbage collectioning.
- Thorough crossbrowser testing.
