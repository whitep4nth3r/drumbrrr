# Drumbrrr

Experiments in automated drum exercise creation for
[Drumbitious](https://drumbitious.com/). Fun fact, I didn't get very far 🫠.

## Problem

Verry at Drumbitious is working on a new feature where users can "import" or
"add" sample exercises into the app. Currently, the process is manual, where
Verry writes the music notation, creates an mp3, adds it to the app. And this
doesn't scale.

## Hypothesis

We could automate the creation of sample exercises by building a function that
accepts an array of notes. The function parses the notes and generates music
notation, so that adding a new sample exercise is as straightforward as
creating an array of objects in code.

A note could have these base properties (using JSDoc for typing here):

```javascript
/**
 * @typedef Note
 * @type {object}
 * @property {number} value - represent length of note 1/2/4/8/16/32 etc.
 * @property {boolean} accented - whether the note should be accented
 * @property {Stick} [stick] - optional, must be L or R
 */

/** @type {Note} */
const note = {
  value: 16,
  accented: true,
  stick: Stick.RIGHT,
};
```

A two-beat paradiddle could look like this:

```javascript
/** @type {Exercise} */
const paradiddle = [
  {
    value: 16,
    accented: true,
    stick: Stick.RIGHT,
  },
  {
    value: 16,
    accented: false,
    stick: Stick.LEFT,
  },
  {
    value: 16,
    accented: false,
    stick: Stick.RIGHT,
  },
  {
    value: 16,
    accented: false,
    stick: Stick.RIGHT,
  },
  {
    value: 16,
    accented: true,
    stick: Stick.LEFT,
  },
  {
    value: 16,
    accented: false,
    stick: Stick.RIGHT,
  },
  {
    value: 16,
    accented: false,
    stick: Stick.LEFT,
  },
  {
    value: 16,
    accented: false,
    stick: Stick.LEFT,
  },
];
```

## Problems encountered with this approach

### Notation engine

Web-based notation tools exist such as these:

- https://github.com/paulrosen/abcjs
- https://abcnotation.com/

But I was unsure how these and other JavaScript packages would port to Flutter.

There _is_ a
[Flutter notation project](https://github.com/rodydavis/sheet_music) I found,
but it is unmaintained with seemingly lots of issues.

## Music fonts

Instead of using a notation package, I considered trying to build my own engine
and using a music font to generate the visual aspect. However, this also felt
over-complicated. For example, I downloaded the
[Bravura OpenType music font](https://github.com/steinbergmedia/bravura) hoping
to install it on my machine to try it out. Firstly, it comes as a .pkgproj file
(which is weird) and also the installer exists to install extra JSON metadata
for the font file (which is needed for precise positioning of stems and
noteheads etc).
[Read more here.](https://www.w3.org/2019/03/smufl13/specification/font-specific-metadata.html)
