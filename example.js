/**
 * Enum for sticking
 * @readonly
 * @enum {string}
 */
const Stick = {
  LEFT: "L",
  RIGHT: "R",
};

/**
 * @typedef Note
 * @type {object}
 * @property {number} value - represent length of note 1/2/4/8/16/32 etc.
 * @property {boolean} accented - whether the note should be accented
 * @property {Stick} [stick] - optional, must be L or R
 */

/**
 * @typedef Exercise
 * @type {Note[]}
 */

/** @type {Note} */
const note = {
  value: 16,
  accented: true,
  stick: Stick.RIGHT,
};

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
